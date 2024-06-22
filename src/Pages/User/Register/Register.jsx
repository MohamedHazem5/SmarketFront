import background from "../assets/userbackground.png"

import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaEye } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

import axios from 'axios';

function Register() {
  
  const [formData, setFormData] = useState({
    firstname:'',
    lastname:'',
    date:'',
    phoneNumber:'',
    email:'',
    password:'',
    showPassword:false
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prevProps) => ({
      ...prevProps,
      [name]: value
    }))
  }

  const handleSubmit =(e)=>{
    e.preventDefault();
    axios
      .post("https://www.smarketp.somee.com/api/Account/register",{
        firstname:formData.firstname,
        lastname:formData.lastname,
        date:formData.date,
        phoneNumber:formData.phoneNumber,
        email:formData.email,
        password:formData.password,
      })
      .then(toast.success("Login Success !"))
      .catch((err) => window.alert("checkpassword"))
  }

  const handleShowPass = () =>{
    setFormData({
      ...formData,
      showPassword: !formData.showPassword
    })
  }

  return <>
    <ToastContainer
      theme="dark"/>
    <div className="Register d-flex justify-content-between ">
      <div className="left d-flex flex-column justify-content-center " data-aos="fade-right">
        <div className="login-form">
          <header className="mb-4">
            <h3 className="fw-bold fs-1 text-center">Welcome To Smarket</h3>
            <p className="fs-3 fst-italic text-black-50 text-center">Shop Smarter Today</p>
          </header>
          <form className="d-flex flex-column" onSubmit={handleSubmit}>
            <div className="d-flex justify-content-between">
              <div>
                <label htmlFor="firstname">Enter First Name<span className="text-danger">*</span></label>
                <div className="email d-flex align-items-center mt-1 my-3">
                  <MdEmail className="fs-5 text-black-50"/>
                  <input 
                    type="text" 
                    name="firstname" 
                    placeholder="Omar"
                    value={formData.firstname}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="lastname">Enter Last Name<span className="text-danger">*</span></label>
                <div className="email d-flex align-items-center mt-1 my-3">
                  <MdEmail className="fs-5 text-black-50"/>
                  <input 
                    type="text" 
                    name="lastname" 
                    placeholder="El-Nahas"
                    value={formData.lastname}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-between">
              <div>
                <label htmlFor="birthday">Enter Your Data<span className="text-danger">*</span></label>
                <div className="email d-flex align-items-center mt-1 my-3">
                  <MdEmail className="fs-5 text-black-50"/>
                  <input 
                    type="date" 
                    name="date" 
                    placeholder="11/4/2001"
                    value={formData.date}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="phone">Enter Phone<span className="text-danger">*</span></label>
                <div className="email d-flex align-items-center mt-1 my-3">
                  <MdEmail className="fs-5 text-black-50"/>
                  <input 
                    type="phone" 
                    name="phoneNumber" 
                    placeholder="0123456789"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-center">
              <label htmlFor="email">Enter Email<span className="text-danger">*</span></label>
              <div className="email d-flex align-items-center mt-1 my-3">
                <MdEmail className="fs-5 text-black-50"/>
                <input 
                    type="email" 
                    name="email" 
                    placeholder="ommar@gmail.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
              </div>
            </div>
            <div className="d-flex justify-content-between">
              <div>
                <label htmlFor="password">Enter password<span className="text-danger">*</span></label>
                <div className="password d-flex align-items-center mt-1 my-3">
                  <RiLockPasswordFill className="fs-5 text-black-50"/>
                  <input 
                    type={formData.showPassword ? "text" : "password"}
                    name="password" 
                    value={formData.password}
                    placeholder="password"
                    onChange={handleChange}
                    required
                  />
                  <span className="eye" onClick={handleShowPass}><FaEye className="fs-5 text-black-50"/></span>
                </div>
              </div>
              <div>
                <label htmlFor="confirmpassword">Re-Enter password<span className="text-danger">*</span></label>
                <div className="password d-flex align-items-center mt-1 my-3">
                  <RiLockPasswordFill className="fs-5 text-black-50"/>
                  <input 
                    type={formData.showPassword ? "text" : "password"}
                    placeholder="Confirm password"  
                    required
                  />
                  <span className="eye" onClick={handleShowPass}><FaEye className="fs-5 text-black-50"/></span>
              </div>
              </div>
            </div>
            <button type="submit" className="btn primary-color rounded-3 text-white mb-3 fw-bold" onClick={handleSubmit}>Register</button>
          </form>
          <div className="d-flex justify-content-center">
            <p>have account? </p>
            <Link to="/user" className="text-info ms-1">Login</Link>
          </div>
        </div>
      </div>
      <div className="right" data-aos="fade-left">
        <img className="" src={background} alt="" />
      </div> 
    </div>
  </>;
}
export default Register;
