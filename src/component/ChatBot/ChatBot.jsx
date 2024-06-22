import React, { useState } from 'react';
import './ChatBot.css'
import { RiRobot2Fill } from "react-icons/ri";
import { Button, Modal, ModalHeader, ModalBody, Input, Form, FormGroup } from 'reactstrap';
import axios from 'axios';

function ChatBot() {

  const [modal, setModal] = useState(false)
  const [messages, setMessages] = useState([])
  const [userMessage, setUserMessage] = useState('')

  const toggle = () => setModal(!modal)

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (userMessage.trim() === '') return

    const newMessage = {
      text: userMessage,
      sender: 'user',
    };
    setMessages([...messages, newMessage])

    try {
      const response = await axios.get(`https://esmael-saleh-smarkety.hf.space/api/v1/smarkety?question=${messages}`);
      const botMessage = {
        text: response.data.response ,
        sender: 'bot',
      };
      console.log(response)
      setMessages((prevMessages) => [...prevMessages, botMessage])
    } catch (error) {
      const errorMessage = {
        text: 'Sorry, something went wrong. Please try again later.',
        sender: 'bot',
      };
      setMessages((prevMessages) => [...prevMessages, errorMessage])
    }

    setUserMessage('')
  };

  return <>
    <div className="chatbot d-flex flex-column justify-content-center align-items-center">
        <div className="chatbot-button">
          <Button className="fifth-color" onClick={toggle}>
            <RiRobot2Fill className='fs-2 mb-2'/>
            <p className='m-0'>Chat Bot</p>
          </Button>
          <Modal isOpen={modal} toggle={toggle} className="chatbot-modal">
            <ModalHeader toggle={toggle}>Chatbot</ModalHeader>
            <ModalBody>
              <div className="chat-window">
                <div className="chat-messages">
                  {messages.map((msg, index) => (
                    <div
                      key={index}
                      className={`message ${msg.sender === 'user' ? 'user-message' : 'bot-message'}`}
                    >
                      {msg.text}
                    </div>
                  ))}
                </div>
              </div>
              <Form onSubmit={handleSendMessage} className="chat-input-form">
                <FormGroup className="chat-input-group">
                  <Input
                    type="text"
                    value={userMessage}
                    onChange={(e) => setUserMessage(e.target.value)}
                    placeholder="Type a message..."
                  />
                  <Button type="submit" color="primary">
                    Send
                  </Button>
                </FormGroup>
              </Form>
            </ModalBody>
          </Modal>
        </div>
    </div>
  </>
}

export default ChatBot