import React, { useState } from 'react';
import { Button} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link, NavLink}from "react-router-dom"
import { jwtDecode } from "jwt-decode";

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

/* eslint-disable jsx-a11y/anchor-is-valid */
import Logo from '../../assets/whitelogo.png'
import './Nav.css'

import { AiOutlineSearch } from 'react-icons/ai';
import { FaCartArrowDown } from "react-icons/fa";

function Navigation() {

  var token = localStorage.getItem('userToken', token)
  var decode = jwtDecode(token)

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "orange"
  }

  return (
    <>
    
      <Navbar expand="lg fixed" className="nav">
        <Container className='justify-content-between'>
          <Navbar.Brand href="#" className='m-0'>
            <Link className="logo" to='./' data-aos="fade-right">
              <img src={Logo} alt="Logo" />
            </Link>
          </Navbar.Brand>
          <Form className="d-flex" data-aos="fade-right">
            <Form.Control
              type="search"
              placeholder="Search"
              className="form-control text-black-50 me-2"
              aria-label="Search"
            />
            <Button className='bg-orange text-white'><AiOutlineSearch /></Button>
          </Form>

          <Nav className="justify-content-end flex-grow-1 pe-3" data-aos="fade-left">
            <NavLink 
              to="/"
              style={({isActive}) => isActive ? activeStyle : null }
              className="nav-link"
            >
              Home
            </NavLink>
            
            <NavLink 
              to="/about"
              style={({isActive}) => isActive ? activeStyle : null }
              className="nav-link"
            >
              About
            </NavLink>
            
            <NavLink 
              to="/shop"
              style={({isActive}) => isActive ? activeStyle : null }
              className="nav-link"
            >
              Shop
            </NavLink>
            <NavLink 
              to="/contact"
              style={({isActive}) => isActive ? activeStyle : null }
              className="nav-link"
            >
              Contact
            </NavLink>
            <NavLink 
              to="/cart"
              style={({isActive}) => isActive ? activeStyle : null }
              className="nav-link"
            >
              <FaCartArrowDown className='me-1' />
              Cart 
            </NavLink>
          </Nav>
          <Link className="profile-icon" to='./profile' data-aos="fade-left"><img src={decode.imageUrl} alt="Profile" /></Link>   
        </Container>
      </Navbar>
  </>
  );
}

export default Navigation;