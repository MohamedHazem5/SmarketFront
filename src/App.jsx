import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import { useEffect } from 'react';
import Layout from "./component/Layout/Layout"
import Home from "./Pages/Home/Home.jsx"
import About from './Pages/About/About.jsx';
import Contact from './Pages/Contact/Contact.jsx';

import AOS from "aos";
import "aos/dist/aos.css";
// css file
import "./index.css";
import User from './Pages/User/User.jsx';
import Shop from './Pages/Shop/Shop.jsx';
import Profile from './Pages/Profile/Profile.jsx';
import Account from './Pages/Profile/Account.jsx';
import Password from './Pages/Profile/Password.jsx';
import ForgetPassword from './Pages/Confirmations/ForgetPassword.jsx';
import ConfirmPassword from './Pages/Confirmations/ConfirmPassword.jsx';
import Register from './Pages/User/Register/Register.jsx';
import Product from './Pages/Shop/Product.jsx';
import Cart from './Pages/Cart/Cart.jsx';
import Order from './Pages/Profile/Order.jsx';
import Favorite from './Pages/Profile/Favorite.jsx';
import Login from './Pages/User/Login/Login.jsx';

function App() { 
  useEffect(() => {
    AOS.init({
      once: false,
      disable: "phone",
      duration: 1000,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <>  
    <BrowserRouter>
      <Routes>
        {/* Public routes */}
        <Route path="/user" element={<User />}>
          <Route index element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>

        {/* Protected routes */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="cart" element={<Cart />} />

          <Route path="shop">
            <Route index element={<Shop />} />
            <Route path=":id" element={<Product />} />
          </Route>

          <Route path="profile" element={<Profile />}>
            <Route index element={<Account />} />
            <Route path="password" element={<Password />} />
            <Route path="orders" element={<Order />} />
            <Route path="favorite" element={<Favorite />} />
          </Route>
        </Route>

        {/* Other routes */}
        <Route path="deny" element={<ForgetPassword />} />
        <Route path="confirm" element={<ConfirmPassword />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;