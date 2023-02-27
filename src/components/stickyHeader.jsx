import React, { useState, useEffect } from "react";
import {useSelector, useDispatch} from 'react-redux';
import {isMenuActive} from '../redux/reducer/menu'
import { Link } from "react-router-dom";
import { logout } from "../redux/Actions/userActions";
import { googleLogout } from '@react-oauth/google';
import {AiOutlineShoppingCart}  from "react-icons/ai"; 
import {BsCoin} from "react-icons/bs";



const StickyHeader = () => {
  const [sticky, setSticky] = useState(false);
  const {isActive} = useSelector((state) => state.menu);
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;


  const viewportHeight = window.innerHeight;

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset >= viewportHeight - 700) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    });
  }, [dispatch]);

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
      <header className={ ` z-30 ${sticky ? "fixed nav-scrolled" : " before-scrolled"}`}>
          <a href="/" className={ sticky ? "text-blue-300" : " text-white" }>
            <span className="logo text-2xl  font-extrabold">Penguin Travel</span>
           
          </a>
            <div className="nav__list ">
                <ul className="hidden space-x-2 md:inline-flex">
                <li className="nav__list-item pt-1.5"><a href="/" className="nav__link">Home</a></li>
                <li className="nav__list-item pt-1.5">
                  <a href="/shops" className="nav__link">Photos</a>
                </li>
                <li className="pt-1.5"><Link className="nav__link" to="/video">Videos</Link></li>
                <li className="nav__list-item  pt-1.5"><a href="/contact" className="nav__link">Contact</a></li> 
                {/* nav__list-item nav__list*/}
                {/* <a href="/video" className="nav__link">Videos</a> */}
                {/* start of button */}
                {userInfo ? (
                  <>
                  <div className="flex verticalAlighn">
                  <div className="btn-group nav__link">
                    <button
                      type="button"
                      className="name-button dropdown-toggle nav__link"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Hi, {userInfo.name}
                    </button>
                    <div className="dropdown-menu">
                      <Link className="dropdown-item" to="/profile">
                        Profile
                      </Link>

                      <Link
                        className="dropdown-item"
                        to="/"
                        onClick={()=> logoutHandler()}
                      >
                        Logout
                      </Link>
                    </div>

                  </div>
                  <div className="flex verticalAlighn">
                  <li className="nav__list-item pt-1.5 pr-2"> <a href="/buycredit" className="pretty__text"><BsCoin className="inline"/> {userInfo?.credit}</a> </li> 

                  <li className="nav__list-item pt-1.5"><a href="/cart"><AiOutlineShoppingCart className="text-lg" /></a></li> 
                  </div>
                  </div>


                  </>
                  
                ) : (
                  <>
                  <li className="nav__list-item">
                    <a className="nav__link nav__link--btn" href="/login">Login</a>
                  </li>
                  <li className="nav__list-item">
                    <a
                      className="nav__link nav__link--btn nav__link--btn--highlight"
                      href="/register"
                      >Join</a>
                  </li>
                  </>
                )}


               
                  {/* end of button */}
            </ul>
           
          </div>
          <div className="inline-flex md:hidden">
              <button onClick={()=> handleMenu()} className="px-2 z-60">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16" />
                </svg>
              </button>
          </div>
          
     
      </header>
  </div>
  );
};

export default StickyHeader;



