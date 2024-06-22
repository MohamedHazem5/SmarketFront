import './Contact.css'
import { AiOutlineMail } from "react-icons/ai";

function Contact() {
  return <>
    <div className="contact-section" >
        <div className="container overflow-hidden" data-aos="zoom-in">
          <h1>Join Our Newsletter</h1>
          <p>Sign Up For Deals, New Products and Promotions</p>
          <form>
              <AiOutlineMail  className="text-black-50"/>
              <input type="email" placeholder="Email Address" />
              <button className="text-black-50">Subscibe</button>
          </form>
        </div>
    </div>
  </>;
}
export default Contact;
