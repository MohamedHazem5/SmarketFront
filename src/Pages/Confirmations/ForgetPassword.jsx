import "./Confirmations.css";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { jwtDecode } from "jwt-decode";

function ForgetPassword() {

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
        toast.info("Payment Deny")
    } catch (error) {
      console.error('Error:', error)
    }
  };

  const apiUrl = `https://www.smarketp.somee.com/api/Order/DenyOrder?userId=${decoded.nameid}`;
  const accessToken = token
  sendPostRequest(apiUrl, accessToken)
  }

  return <>

    <div className="forget_password py-5 my-3">
      <ToastContainer />
      <div className="container">
        <div className="title text-center">
          <h2 className="fs-1 py-5">Payment Failed</h2>
          <p className="text-black-50">Check Your Information</p>
        </div>
        <div className="d-flex justify-content-center  ">
            <button onClick={handleSubmit} className="button py-2 px-4 bg-orange rounded-3 text-white mb-3 fw-bold">Go Home</button>
        </div>
      </div>
    </div>
  </>;
}
export default ForgetPassword;
