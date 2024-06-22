import {Link } from 'react-router-dom'; 
import {useState} from "react"
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

function Password() {

  var token = localStorage.getItem("userToken", token);

  const [formData, setFormData] = useState({
    currentPassword:'',
    newPassword:'',
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prevProps) => ({
      ...prevProps,
      [name]: value
    }))
  }

  const handleSubmit =()=>{
    const sendPostRequest = async (url, data, token) => {
      try {
        const config = {
          headers: {
            'Authorization': `Bearer ${token}`,
            "Content-Type": "application/json"
          },
        };
        const response = await axios.post(url, data, config)
        toast.info("I am in Your Cart Now")
    } catch (error) {
      console.error('Error:', error)
    }
  };

  const apiUrl = 'https://www.smarketp.somee.com/api/Account/ChangePassword';
  const postData = {
    currentPassword:formData.currentPassword,
    newPassword:formData.newPassword
  };
  const accessToken = token
  sendPostRequest(apiUrl, postData, accessToken)
}

  return <>
    <div className="title">
        <h3 className="fw-bold">Password</h3>
      </div>
      <div className="form mt-4">
        <form>
          <label htmlFor="oldpassword">Old Password</label>
          <input 
            type="password" 
            name="currentPassword" 
            placeholder="Old Password"
            value={formData.currentPassword} 
            onChange={handleChange}
          />
          <label htmlFor="newpassword">New Password</label>
          <input 
            type="password" 
            name="newPassword" 
            placeholder="New Password" 
            value={formData.newPassword} 
            onChange={handleChange}
          />
          <label htmlFor="confirmpassword">Re-enter Password</label>
          <input 
            type="password" 
            name="confirmpassword" 
            placeholder="Re-enter Password" 
          />
          <p>if you forget your password <Link className='orange' to="/forgetpassword">Click me</Link></p>
          <button 
            type="submit" 
            className="btn primary-color mt-3 text-white float-end"
            onClick={handleSubmit}
          >
            Save Changes
          </button>
        </form>
      </div>
  </>;
}
export default Password;
