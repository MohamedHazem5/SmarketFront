/* eslint-disable jsx-a11y/anchor-is-valid */
import "./Confirmations.css";
import {useState} from "react"
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { jwtDecode } from "jwt-decode";

import { CiCircleCheck } from "react-icons/ci";

function ConfirmPassword() {

  var token = localStorage.getItem("userToken", token);
  const decoded = jwtDecode(token);

  let goHome =()=>{
    window.location.href ="/"
  }
  
  const handleSubmit =()=>{
    const sendPostRequest = async (url, token) => {
      try {
        const config = {
          headers: {
            'Authorization': `Bearer ${token}`,
            "Content-Type": "application/json"
          },
        };

        const response = await axios.get(url, config)
        setTimeout(goHome,3000)
        toast.info("Payment Accepted")
    } catch (error) {
      console.error('Error:', error)
    }
  };

  const apiUrl = `https://www.smarketp.somee.com/api/Order/ConfirmOrder?userId=${decoded.nameid}`;
  const accessToken = token
  sendPostRequest(apiUrl, accessToken)
  }
  return <>
    <div className="confirm_password py-5 my-3 mb-2">
      <ToastContainer />
      <div className="container">
        <div className="image text-center">
          <CiCircleCheck />
        </div>
        <div className="content text-center">
          <h2 className="fs-1 py-5">Successfully</h2>
          <p className="text-black-50">Click to confirm Your Payment</p>
          <button onClick={handleSubmit} className="primary-color btn text-white my-3">Confirm</button>
        </div>
      </div>
    </div>
  </>;
}
export default ConfirmPassword;
