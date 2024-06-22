import { jwtDecode } from "jwt-decode";
import {useState} from "react"
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
function Account() {

  var token = localStorage.getItem("userToken", token);
  const decoded = jwtDecode(token);

  const [formData, setFormData] = useState({
    firstname:'',
    lastname:'',
    date:'',
    phoneNumber:'',
    email:'',
    city:'',
    state:'',
    image:''
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
        const response = await axios.put(url, data, config)
        toast.info("I am in Your Cart Now")
    } catch (error) {
      console.error('Error:', error)
    }
  };

  const apiUrl = 'https://www.smarketp.somee.com/api/Account/EditUser';
  const postData = {
    firstname:formData.firstname,
      lastname:formData.lastname,
      date:formData.date,
      phoneNumber:formData.phoneNumber,
      email:formData.email,
      city:formData.city,
      state:formData.state,
      formFile:formData.image
  };
  const accessToken = token
  sendPostRequest(apiUrl, postData, accessToken)
  }

  return (
    <>
    <ToastContainer
      theme="dark"/>
      <div className="title">
        <h3 className="fw-bold">Account Details</h3>
      </div>
      <div className="form mt-4">
        <form>
          <label htmlFor="firstname">First Name</label>
          <input 
            type="text" 
            name="firstname" 
            placeholder={decoded.given_name} 
            value={formData.firstname} 
            onChange={handleChange}
          />
          <label htmlFor="lastname">Last Name</label>
          <input 
            type="text" 
            name="lastname" 
            placeholder={decoded.family_name} 
            value={formData.lastname} 
            onChange={handleChange} 
          />
          <label htmlFor="email"> Your Email</label>
          <input
            type="email"
            name="email"
            placeholder={decoded.email} 
            value={formData.email} 
            onChange={handleChange}
          />
          <label htmlFor="state">State</label>
          <input 
            type="text" 
            name="state" 
            placeholder="State" 
            value={formData.state} 
            onChange={handleChange} 
            />
          <label htmlFor="city">City</label>
          <input  
            type="text"  
            name="city"  
            placeholder="City"   
            value={formData.city}   
            onChange={handleChange}   
          />
          <label htmlFor="phone">Phone</label>
          <input  
            type="text"   
            name="phoneNumber"   
            placeholder="0123456789"  
            value={formData.phoneNumber}   
            onChange={handleChange}   
          />
          <label htmlFor="birthday">Birthday</label>
          <input  
            type="date"  
            name="birthday"  
            placeholder={decoded.birthdate}  
            value={formData.birthdate}   
            onChange={handleChange}   
          />
          <input type="file" onChange={handleChange} />
          <button type="submit" className="btn primary-color mt-3 text-white float-end" onClick={handleSubmit}>
            Save Changes
          </button>
        </form>
      </div>
    </>
  );
}
export default Account
