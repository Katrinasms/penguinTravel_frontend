import React, { useState, useEffect } from "react";
import {useSelector, useDispatch} from 'react-redux';
import {isMenuActive} from '../redux/reducer/menu'
import {AiOutlineCloseCircle} from "react-icons/ai";
import { logout } from "../redux/Actions/userActions";
import { googleLogout } from '@react-oauth/google';
import {BsCoin} from "react-icons/bs";
import {AiOutlineShoppingCart}  from "react-icons/ai"; 

const ToggleSideMenu = () => {
  // const [isOpen, setIsOpen] = useState(false);
  const {isActive } = useSelector((state) => state.menu);
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const handleMenu = () => {
    if (isActive){
      dispatch(isMenuActive(false));
    }else {
      dispatch(isMenuActive(true));
    }
    
  }

  const logoutHandler = ()=>{
    dispatch(logout());
    if(userInfo?.isGoogle){
      googleLogout();
    }
  }



  return (
    <div>
      {/* <button onClick={() => handleMenu()}>Toggle Menu</button> */}
   
        <div className={`fixed top-0  z-40`} style={{ width: '200px', height: '100%', backgroundColor: '#f4f4f4', right: isActive? '0':'-265px', transition: 'right 0.3s ease-in-out' }}>
          <button onClick={() => handleMenu() } className={`absolute top-3 left-2 ml-2`}> <AiOutlineCloseCircle style={{ fontSize: '1.2em' }}/></button>
           {/* Side Menu Content */}
           
           <nav> 
            <ul>
              <li className='mt-10'><a href="/" className="nav__link"> Home </a></li>
              <li className='m-1 md:m-5'><a href="/shops" className="nav__link">  Shops  </a></li>
              <li className='m-1 md:m-5'><a href="/video" className="nav__link">  Videos  </a></li>
              <li className='mb-10 md:m-5'><a href="/contact" className="nav__link">  Contact  </a></li>
              <hr></hr>

              {userInfo ? (
                <>
                  <li className='mt-10 mb-2 pretty__text'>Hi, {userInfo.name}</li>
                  <li className="nav__list-item  m-1 md:m-3"> <a href="/buycredit" className="pretty__text"><BsCoin className="inline"/> {userInfo?.credit}</a> </li> 
                  <li className="nav__list-item  m-1 md:m-3"><a href="/cart" className="pretty__text"><AiOutlineShoppingCart className="inline m-1"/>Cart</a></li> 
                  <li className='m-1 md:m-3'><a href="/profile" className="pretty__text">  Profile  </a></li>
                  
                  <li className='m-1 md:m-3'><button onClick={logoutHandler} className="pretty__text">  logout  </button></li>
                  {/* <li className='m-5'><a href="/cart" className="nav__link nav__link--btn nav__link--btn--highlight"> Cart </a></li> */}
                </>
              ):(
                <>
                <li className='mt-10 m-5'><a href="/login" className="nav__link nav__link--btn"> Login </a></li>
                <li className='m-5'><a href="/register" className="nav__link nav__link--btn nav__link--btn--highlight"> Join Us </a></li>
              </>
              )}
            </ul>
           </nav>
        </div>
        <div onClick={() => handleMenu()} className={`${isActive? 'overlay':''}`}></div>
      
    </div>
  )
}

export default ToggleSideMenu;