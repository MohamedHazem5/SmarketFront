import './Contact.css'
import ContactSection from "../../component/Contact/Contact"

import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { IoIosTime } from "react-icons/io";


export default function Contact() {
  return <>
    <div className="contact">
      <div className="container py-5 my-3">
        <div className="title">
          <h3 className="fs-1 fw-bold text-center">Get In Touch With Us</h3>
          <p className="text-center text-black-50">For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
        </div>
        <div className="content ">
          <div className="row">
            <div className="col-6 align-items-end" data-aos="fade-right">
              <div className="box mb-5 d-flex">
                <div className="head align-self-center me-4">
                  <FaLocationDot className='fs-3'/>
                </div>
                <div className="text">
                  <h4 className='m-0 ms-1 fw-bold'>Address</h4>
                  <p>236 5th SE Avenue, New York NY10000, United States</p>
                </div>
              </div>
              <div className="box mb-5 d-flex">
                <div className="head align-self-center me-4">
                  <FaPhone className='fs-3'/>
                </div>
                <div className="text">
                  <h4 className='m-0 ms-1 fw-bold'>Phone</h4>
                  <p>Mobile: +(84) 546-6789</p>
                  <p>Hotline: +(84) 456-6789</p>
                </div>
              </div>
              <div className="box mb-5 d-flex">
                <div className="head align-self-center me-4">
                  <IoIosTime className='fs-3'/>
                </div>
                <div className="text">
                  <h4 className='m-0 ms-1 fw-bold'>Work Time</h4>
                  <p>Monday-Friday: 9:00 - 22:00</p>
                  <p>Saturday-Sunday: 9:00 - 21:00</p>
                </div>
              </div>
            </div>
            <div className="col-6" data-aos="fade-left">
              <form>
                <label htmlFor="name"> Your Name</label>
                <input type="text" name="name" placeholder="Omar El-Nahas" />
                <label htmlFor="email"> Your Email</label>
                <input type="email" name="email" placeholder="omarelnahas1141@gmail.com" />
                <label htmlFor="subject"> Subject</label>
                <input type="text" name="subject" placeholder="This is an optional" />
                <label htmlFor="textarea"> Message</label>
                <textarea name="textarea" cols="30" rows="10" placeholder="Hi! i’d like to ask about"></textarea>
                <button type='submit' className=' btn primary-color text-white float-start'>Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ContactSection />
  </>
}
