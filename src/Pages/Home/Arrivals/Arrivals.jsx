/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react';

function Arrivals() {

  const [items, setData] = useState([])

  const api = "https://esmael-saleh-recommend-50-samples.hf.space/api/new_arrivals?n=5"
  useEffect(() => {
    const getProduct = async () => {
      const response = await fetch(api)
      const data = await response.json()
      setData(data)
    };
    getProduct()
  }, [])


  return (
    <>
      <div className="arrivals my-3 py-4 ">
        <div className="container ">
          <h3 className="fw-bold"><span className="sixth-color mb-2">New</span> Arrivals</h3>
          <div className="row justify-content-around flex-wrap">
            {
              items.map((element)=>
                <div className="product border p-2 mb-2 rounded-3" data-aos="zoom-in">
                  <div className="title w-100 text-wrap">
                    <h4 className='fs-6'>{element.product_name}</h4>
                  </div>
                  <div className="image text-center mb-3">
                    <img src={element.img_link_y} alt="product_image" />
                  </div>
                  <div className="price d-flex justify-content-between">
                    <p className="orange">$ {element.discounted_price}</p>
                    <p className="text-black-50"><del>$ {element.actual_price}</del></p>
                  </div>
                  <Link to="/shop" className='btn bg-orange'>Add to cart</Link>
                </div>
              )
            }
          </div>
        </div>
      </div>
    </>
  );
}
export default Arrivals;
