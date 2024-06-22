import React from 'react'
import "./shop.css"
import { useState, useEffect} from 'react'
import {Link} from "react-router-dom"
import SideBar from './SideBar.jsx'
import Pagination from './Pagination.jsx'

export default function Shop() {

  let api ="https://www.smarketp.somee.com/api/Product/GetProductsWeb"

  const [products, setData] = useState([])

  const [currentPage, setCurrentPage] = useState(1)
  const [recordsPerPage] = useState(24)

  const indexOfLastRecord = currentPage * recordsPerPage
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage
  const currentRecords = products.slice(indexOfFirstRecord, indexOfLastRecord)
  const nPages = Math.ceil(products.length / recordsPerPage)

  useEffect(() => {
    const getProduct = async () => {
      const response = await fetch(api)
      const data = await response.json()
      setData(data)
    };
    getProduct()
  }, [])

  return <>
    <div className="shop">
      <div className='container d-flex my-3 py-2'>
        <SideBar />
        <div className="products flex-wrap d-flex justify-content-center mx-auto">
          {products ? (
            currentRecords.map((e) => 
            <div className="box border rounded-3 px-2 py-2" style={{width: 200}}>
              <div className='card-img'>
                <img className="" src={e.imageUrl} alt="Card" />
              </div>
              <div className="card-body">
                <h5 className="card-title fs-6 text-black-50">{e.name}</h5>
              </div>
              <hr />
              <div className='d-flex justify-content-between align-items-center'>
                <h6 className='m-0'>{e.price}$</h6>
                <Link to={`${e.id}`} className='btn bg-orange m-0'>
                  Details
                </Link>
              </div>
            </div>
            )
          ):  <div className="parentloader"><div class="loader"></div></div>}
        </div>
      </div>
      <Pagination
        nPages={nPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  </>
}



