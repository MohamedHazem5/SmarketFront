import "./Cart.css";
import { MdDelete } from "react-icons/md";
import axios from "axios";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';

function Cart() {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [checkLink, setCheckLink] =useState([])

  var token = localStorage.getItem("userToken", token);
  const apiUrl = "https://www.smarketp.somee.com/api/Order/getShoppingCartbyUser"
  const DeleteItemApi ="https://www.smarketp.somee.com/api/Order/RemoveFromCart"
  const checkoutApi ="https://www.smarketp.somee.com/api/Order/Checkout"
  const AuthString = 'Bearer '.concat(token);

  //reQuest Main Data
  useEffect(()=>{
    fetchData()
  },[])

  const fetchData =()=>{
    axios.get(apiUrl, { headers: { Authorization: AuthString } })
      .then(response => {
        setData(response.data.packages)
      })
      .then(() => {
        setLoading(false);
      })
  }

  // Delete Item from DataBase
  const handleDelete = async (Id) => {
    if (!token) {
      console.error('No token provided');
      setError('No token provided');
      return;
    }
    try {
      const response = await axios.post(
        DeleteItemApi,
        { productId:Id }, 
        {
          headers: {
            Authorization: AuthString,
            "Content-Type": "application/json",
          },
        }
      );
      // Handle successful deletion (e.g., update state, show notification)
      setData(data.filter((item) => item.productId !== Id));
      toast.error("Aleardy Deleted, Bye",{
        icon:MdDelete
      })
    } catch (error) {
      if (error.response) {
        // Server responded with a status other than 200 range
        if (error.response.status === 401) {
          console.error('Unauthorized: Check your token.');
          setError('Unauthorized: Check your token.');
        } else {
          setError(`Error: ${error.response.status} ${error.response.statusText}`);
        }
      } else if (error.request) {
        // Request was made but no response received
        console.error('No response received:', error.request);
        setError('No response received from server.');
      } else {
        // Something else caused the error
        console.error('Error message:', error.message);
        setError(`Error: ${error.message}`);
      }
    }
  }

  //Checkout 
  let checkout = async () =>{
    try {
      const response = await axios.post(
        checkoutApi,{}, 
        {
          headers: {
            Authorization: AuthString,
            "Content-Type": "application/json",
          },
        }
      );
      // Handle successful deletion (e.g., update state, show notification) 
      const sessionUrl = response.data.sessionUrl;
      setCheckLink(sessionUrl);
      window.open(sessionUrl, "_self", "popup");

    }catch (error) {
      if (error.response) {
        // Server responded with a status other than 200 range
        if (error.response.status === 401) {
          console.error('Unauthorized: Check your token.');
          setError('Unauthorized: Check your token.');
        } else {
          setError(`Error: ${error.response.status} ${error.response.statusText}`);
        }
      } else if (error.request) {
        // Request was made but no response received
        console.error('No response received:', error.request);
        setError('No response received from server.');
      } else {
        // Something else caused the error
        console.error('Error message:', error.message);
        setError(`Error: ${error.message}`);
      }
    }
  }

  //caclulate Total 
  let getTotal = ()=>{
    var total = 0
    if(!loading){
      for (var i = 0; i < data.length; i++) {
        total += data[i].count * data[i].price;
      }
      return total;
    }else{
      return total
    }
  }

  return (
    <>
      <div className="cart my-5 py-3">
        <div className="container">
          <ToastContainer
            autoClose={2000}
            theme="dark" />
          <table class="table table-striped table-bordered">
            <thead>
              <tr>
                <th>#</th>
                <th>Product Image</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Delete</th>
              </tr>
            </thead>  
            <tbody>
              {!loading ? (
                data.map((e, i)=>
                  <tr>
                    <td>{i+1}</td>
                    <td className="product_img"><img src={e.productImageUrl} alt="Product 2"/></td>
                    <td>{e.count}</td>
                    <td>${e.count * e.price}</td>
                    <td>
                      <MdDelete className="action ms-2 text-danger" onClick={()=>handleDelete(e.productId)} />
                    </td>
                  </tr>)
                  ):<div className="parentloader"><div className="loader"></div></div>}
            </tbody>
          </table>
          <div className="total d-flex justify-content-around ">
            <div>
              <h4 className="fw-bold">Total : ${getTotal()}</h4>
            </div>
            <div>
              <button 
                className="btn bg-orange fw-bold text-white"
                onClick={()=>checkout()}>Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
