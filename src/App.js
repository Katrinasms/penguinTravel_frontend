import logo from './logo.svg';
import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { Route, Routes } from 'react-router-dom';
import StickyHeader from './components/stickyHeader';
import ToggleSideMenu from './components/toggleSideMenu';
import Footer from './components/footer';
import HomePage from './pages/homePage';
import ShopPage from './pages/shopPage';
import ContactPage from './pages/contactPage';
import VideoPage from './pages/videoPage';
import ProductDetail from './pages/productDetailPage';
import LoginPage from './pages/loginPage';
import RegisterPage from './pages/registerPage';
import PrivateRouter from "./PrivateRouter";
import ProfilePage from './pages/profilePage';
import CartPage from './pages/cartPage';
import ShippingPage from './pages/shippingPage';
import PaymentPage from './pages/paymentPage';
import PlaceOrderPage from './pages/placeOrderPage';
import OrderPage from './pages/orderPage';
import NotFound from './pages/notFound';
import BuyCreditPage from './pages/buyCreditPage'
import CheckOutPage from './pages/checkoutPage'
import ThankYouPage from './pages/thankYouPage'


function App() {
  return (
    <div className="App">
      <StickyHeader />
      <ToggleSideMenu />
      <div className="flex-1 h-fit">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/shops" element={<ShopPage />} />
              <Route path="/video" element={<VideoPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/shops/:id" element={<ProductDetail />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/profile" element={<PrivateRouter><ProfilePage /></PrivateRouter>} />
              <Route path="/cart/:id" element={<PrivateRouter><CartPage /></PrivateRouter>} />
              <Route path="/cart/" element={<PrivateRouter><CartPage /></PrivateRouter>} />
              <Route path="/shipping" element={<PrivateRouter><ShippingPage /></PrivateRouter>} />
              <Route path="/payment/:type" element={<PrivateRouter><PaymentPage /></PrivateRouter>} />
              <Route path="/order/:id" element={<PrivateRouter><OrderPage /></PrivateRouter>} />
              <Route path="/placeorder" element={<PrivateRouter><PlaceOrderPage /></PrivateRouter>} />
              <Route path="/buycredit" element={<PrivateRouter><BuyCreditPage /></PrivateRouter>} />
              <Route path="*" element={<NotFound />} />
              <Route path="/checkout" element={<CheckOutPage />} />
              <Route path="/success" element={<ThankYouPage />} />
         

            </Routes>
        </div>
      
 

     <Footer />

    </div>
  );
}

export default App;
