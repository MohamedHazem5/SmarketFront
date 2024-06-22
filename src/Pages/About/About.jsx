/* eslint-disable jsx-a11y/img-redundant-alt */
import './about.css'
import omar from "../../assets/me.jpg"
import abomagd from "../../assets/abo magd.jpg"
import esmael from "../../assets/esmael.jpg"
import hazem from "../../assets/hazem.jpg"
import magdy from "../../assets/magdy.jpg"
import toka from "../../assets/toka.jpg"
import asmaa from "../../assets/asmaa.jpg"
import ashrakat from "../../assets/ashrakat.jpg"
import nayera from "../../assets/nayera.jpg"
import mai from "../../assets/maii.PNG"
import video from "../../assets/project.mp4"

function About() {

  return (
    <div className="about py-4 my-4">
      <div className="container">
        <div className="row">
          <h3 className='fw-bold'>Who We Are</h3> 
          <p>
            Our Graduation project revolves around a cutting-edge E-Commerce system designed to redefine the online shopping experience. Users can effortlessly place orders through a user-friendly website, or mobile application initiating a seamless process that combines advanced technology and artificial intelligence. The heart of the system lies in a Raspberry Pi-powered robot, meticulously engineered to navigate autonomously through a predefined space to retrieve items. What sets this project apart is the integration of an AI-powered algorithm, specifically the A* algorithm, which intelligently determines the optimal path for the robot to traverse in reaching the desired products. The key to this efficiency is a meticulously crafted map that serves as a digital blueprint of the shopping environment. Each product's precise location, represented by coordinates on the x, y, and z axes, is stored in a database. This spatial information is then utilized by the A* algorithm to calculate the most efficient route for the robot to follow, ensuring quick and precise retrieval of the ordered items. Real-time updates are seamlessly communicated to users via the website, keeping them informed about the status of their orders. As the robot successfully retrieves the items, it strategically returns to a central point for streamlined delivery preparation.
          </p>  
        </div>
        <hr />
        <div className="row mt-3">
          <h3 className='fw-bold'>How It Works</h3> 
          <div className="video mt-2" data-aos="flip-left">
          <video src={video} preload="auto" width="100%" height="100%" autoPlay muted  poster="assets/img/header-bg-2.jpg">
          </video>
          </div>
        </div>
        <hr />
        <div className="row mt-3 justify-content-between">
          <h3 className='fw-bold'>Our Team</h3>     
          <div className="box" style={{width: 220}} data-aos="flip-up">
            <div className="box-img">
              <img src={omar} className="card-img-top" alt="member-image"/>
            </div>
            <div className="box-body">
              <h5 className="box-title">Omar EL-Nahas</h5>
              <p className="box-text text-black-50">FrontEnd</p>
            </div>
          </div>
          <div className="box" style={{width: 220}} data-aos="flip-up">
            <div className="box-img">
              <img src={esmael} className="card-img-top" alt="member-image" />
            </div>
            <div className="box-body">
              <h5 className="box-title">Esmael Saleh</h5>
              <p className="box-text text-black-50">AI</p>
            </div>
          </div>
          <div className="box" style={{width: 220}} data-aos="flip-up">
            <div className="box-img">
              <img src={magdy} className="card-img-top" alt="member-image"  />
            </div>
            <div className="box-body">
              <h5 className="box-title">Ahmed Magdy</h5>
              <p className="box-text text-black-50">AI</p>
            </div>
          </div>
          <div className="box" style={{width: 220}} data-aos="flip-up">
            <div className="box-img">
              <img src={hazem} className="card-img-top" alt="member-image" />
            </div>
            <div className="box-body">
              <h5 className="box-title">Mohamed Hazem</h5>
              <p className="box-text text-black-50">BackEnd</p>
            </div>
          </div>
          <div className="box" style={{width: 220}} data-aos="flip-up">
            <div className="box-img">
              <img src={abomagd} className="card-img-top" alt="member-image" />
            </div>
            <div className="box-body">
              <h5 className="box-title">Ahmed Aboelmagd </h5>
              <p className="box-text text-black-50">BackEnd</p>
            </div>
          </div>
          <div className="box" style={{width: 220}} data-aos="flip-down">
            <div className="box-img">
              <img src={asmaa} className="card-img-top" alt="member-image" />
            </div>
            <div className="box-body">
              <h5 className="box-title">Asmaa Mohamed</h5>
              <p className="box-text text-black-50">BackEnd</p>
            </div>
          </div>
          <div className="box" style={{width: 220}} data-aos="flip-down">
            <div className="box-img">
              <img src={mai} className="card-img-top" alt="member-image" />
            </div>
            <div className="box-body">
              <h5 className="box-title">Mai Allam</h5>
              <p className="box-text text-black-50">BackEnd</p>
            </div>
          </div>
          <div className="box" style={{width: 220}} data-aos="flip-down">
            <div className="box-img">
              <img src={toka} className="card-img-top" alt="member-image" />
            </div>
            <div className="box-body">
              <h5 className="box-title">Toka Gamal</h5>
              <p className="box-text text-black-50">Mobile</p>
            </div>
          </div>
          <div className="box" style={{width: 220}} data-aos="flip-down">
            <div className="box-img">
              <img src={ashrakat} className="card-img-top" alt="member-image" />
            </div>
            <div className="box-body">
              <h5 className="box-title">Ashrakat Elkholy</h5>
              <p className="box-text text-black-50">Mobile</p>
            </div>
          </div>
          <div className="box" style={{width: 220}} data-aos="flip-down">
            <div className="box-img">
              <img src={nayera} className="card-img-top" alt="member-image"  />
            </div>
            <div className="box-body">
              <h5 className="box-title">Nayera</h5>
              <p className="box-text text-black-50">Mobile</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}export default About
