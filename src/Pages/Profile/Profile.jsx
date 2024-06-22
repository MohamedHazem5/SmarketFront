import "./Profile.css";
import { FaCamera } from "react-icons/fa";

import { Outlet, NavLink } from "react-router-dom";

import { jwtDecode } from "jwt-decode";
import { useState, useEffect } from "react";

export default function Profile() {

  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "orange"
  }

  var token = localStorage.getItem("userToken", token);
  const decoded = jwtDecode(token);

  return (
    <>
      <div className="profile">
        <div className="container">
          <div className="content my-3 pt-3">
            <div class="row  justify-content-around gap-3">
              <div className="col-3 box py-4 rounded" data-aos="fade-right">
                <div className="box-img">
                  <img src={decoded.imageUrl} alt="profile" />
                </div>
                <div className="box-title">
                  <h3 className="fw-bold fs-5 text-center mt-2">{decoded.given_name} {decoded.family_name}</h3>
                </div>
                <div className="box-list d-flex flex-column justify-content-between align-items-start">
                  <nav className="mb-0 mt-3">
                    <NavLink  
                      to="." 
                      end
                      style={({isActive}) => isActive ? activeStyle : null }
                      className="nav-link mb-4">Account
                    </NavLink>
                    <NavLink
                      to="password" 
                      style={({isActive}) => isActive ? activeStyle : null }
                      className="nav-link mb-4">Password
                    </NavLink>
                    <NavLink 
                      to="orders" 
                      style={({isActive}) => isActive ? activeStyle : null }
                      className="nav-link mb-4">Orders
                    </NavLink>
                    <NavLink 
                      to="favorite" 
                      style={({isActive}) => isActive ? activeStyle : null }
                      className="nav-link mb-4">Favorite
                    </NavLink>
                    <NavLink 
                      to="/user" 
                      style={({isActive}) => isActive ? activeStyle : null }
                      className="nav-link mb-4"
                      onClick={()=>(localStorage.removeItem("userToken"))}>Logout
                    </NavLink>
                  </nav>
                </div>
              </div>
              <div className="col-7 border me-1 rounded p-4" data-aos="fade-left">
                <Outlet/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
