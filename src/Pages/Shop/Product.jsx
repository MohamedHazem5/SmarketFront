import { FaHeart } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

import React from "react";
import { useParams, Link} from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';

function Product() {

  var token = localStorage.getItem("userToken", token);

  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  
  let updateId =(e)=>{
    setFlag(e)
    window.scrollTo(0,0)
  }
  
  var {id} = useParams()
  const [flag, setFlag] = useState(id)
  let api =`https://www.smarketp.somee.com/api/Product/getproductdetailsforweb/${flag}`

  useEffect(() => {
    axios.get(api)
    .then((response) => {
      setProduct(response.data);
    })
    .finally(() => {
      setLoading(false);
    });
  }, [flag])

  // manage Stock and count
  const [quantity, setQuantity] = useState(1)
  let stock = product?.left || 0;
  function plus(){
    if(quantity < stock )
      setQuantity(quantity + 1)
  }
  function minus(){
    if(quantity > 1)
      setQuantity(quantity - 1)
  }

//   // manage Favorite
  const [favToggel, setFavToggle] = useState(false)
  
//   const [favorites, setFavorites] = useState(() => {
//     const savedFavorites = localStorage.getItem('favorites');
//     return savedFavorites ? JSON.parse(savedFavorites) : [];
//   });
  
//   // Function to add favorite item
//   const addFavorite = (item) => {
//     setFavorites([...favorites, item]);
//   };

//   // Function to delete favorite item
//   const deleteFavorite = (item) => {
//     setFavorites(favorites.filter(fav => fav !== item));
//   };
  
//   const Favorite = () =>{
//     if(favToggel){
//       addFavorite(flag)
//     }else{
//       deleteFavorite(flag)
//     }
//   }
// console.log(favorites)

  const addToCart =()=>{
    const sendPostRequest = async (url, data, token) => {
      try {
        const config = {
          headers: {
            'Authorization': `Bearer ${token}`,
            "Content-Type": "application/json"
          },
        };
        const response = await axios.post(url, data, config);
        toast.info("I am in Your Cart Now",{
          icon:FaShoppingCart
        })
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const apiUrl = 'https://www.smarketp.somee.com/api/Order/AddToCart';
  const postData = {
    "productId": product.id,
    "quantity": quantity
  };
  const accessToken = token;

  sendPostRequest(apiUrl, postData, accessToken);
}

  const activeStyle = {
    width: "fit-content",
    margin: "0 20",
    padding: "5px 10px",
  }

  return <>
    {!loading ?(
      <div className="product py-3 my-3">
        <div className="container">
          <ToastContainer
            theme="dark"/>
          <div className="row">
            <div className="col-6">
              <div className="product-img">
                <img src= {product.imageUrl} alt="product-img" />
              </div>
            </div>
            <div className="col-6">
              <div>
                <h2 className="mb-3">{product.name}</h2>
                <div className="price mb-3 d-flex align-items-center">
                  <p className="fs-3 orange me-3">{product.price}$</p>
                  <p>{[...Array(product.averageRate)].map((e, i) => (
                        <FaStar className="star" />
                      ))}
                  </p>
                </div>
                <div className="quantity mb-4">
                  Quatity:
                  <div className="d-inline ms-2">
                    <button className="btn border border-2 rounded-circle me-2" onClick={plus}>+</button>
                    {quantity}
                    <button className="btn border border-2 rounded-circle ms-2" onClick={minus}>-</button>
                  </div>
                </div>
                <div className="action">
                  <button className="btn border border-2 me-1" onClick={addToCart} >Add to Cart</button>
                  <button 
                    style={activeStyle}
                    className={favToggel ? "text-danger" : null }
                    onClick={() => (setFavToggle(!favToggel))}
                    ><FaHeart /></button>
                </div>
              </div>
            </div>
          </div>
          <div className="product-detail py-3 my-3">
            <div className="row">
              <nav>
                <ul className="d-flex">
                  <li className="active">Overview</li>
                  <li >Rating</li>
                </ul>
              </nav>
              <p>{product.description}</p>
            </div>
          </div>
        </div>
      </div>
    ) : <div className="parentloader"><div class="loader"></div></div>}

    <div className="other-products mb-4">
      <div className="container">
        <div className="row justify-content-around">
          {!loading ?(
            product.productDtoFilters.map((e) => 
            <div className="cardd border rounded-3 px-2 py-2" style={{width: 200}}>
              <div className='card-img'>
                <img src={e.imageUrl} alt="Card" />
              </div>
              <div className="card-body">
                <h5 className="card-title fs-6 text-black-50">{e.name}</h5>
              </div>
              <hr />
              <div className='d-flex justify-content-between align-items-center'>
                <Link to={`/shop/${e.productId}`} onClick={()=>updateId(e.productId)}  className="btn bg-orange">See more</Link>
              </div>
            </div>
            )):<div className="parentloader"><div className="loader"></div></div>}
        </div>
      </div>
    </div>
  </>
}

export default Product;
