import React, { useState,useEffect } from "react";
import Pagination from '../Shop/Pagination'
import { jwtDecode } from "jwt-decode";

function Order() {

  var token = localStorage.getItem("userToken", token);
  const decoded = jwtDecode(token);
  const nameId = parseInt(decoded.nameid)

  const [data, setData] = useState([])

  const [currentPage, setCurrentPage] = useState(1)
  const [recordsPerPage] = useState(20)

  const indexOfLastRecord = currentPage * recordsPerPage
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage
  const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord)
  const nPages = Math.ceil(data.length / recordsPerPage)

  useEffect(() => {
    fetchFavorites();
  }, []);

  const fetchFavorites = async () => {
    const token = localStorage.getItem("userToken");
    if (token) {
      try {
        const response = await fetch(`https://www.smarketp.somee.com/api/Order/GetOrderByUser/?id=${nameId}`, {
          method: "GET",
        });

        if (response.ok) {
          const data = await response.json();
          setData(data);
        } else {
          console.error("Failed to fetch favorites");
        }
      } catch (error) {
        console.error("Error fetching favorites:", error);
      }
    } else {
      console.error("Token not found in localStorage");
    }
  };

  return (
    <>
      <div className="order p-relative">
        <h3 className="fw-bold">Order History</h3>
        <table class="table">
          <thead>
            <tr>
              <th className="text-start">Order ID</th>
              <th className="text-start">Dates</th>
              <th className="text-start">Status</th>
              <th className="text-start">Price</th>
            </tr>
          </thead>
          <tbody>
            {data ?
            (currentRecords.map((e) => 
              <tr>
                <td>#{e.id}</td>
                <td>{e.date}</td>
                <td>{e.status = 0 ? "Delivered" : "undelivered"}</td>
                <td>${e.totalPrice}</td>
              </tr>)
              ):<div className="parentloader"><div class="loader"></div></div>}
          </tbody>
        </table>
        <div className="p-absolute">
          <Pagination
            nPages={nPages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
    </>
  );
}

export default Order;
