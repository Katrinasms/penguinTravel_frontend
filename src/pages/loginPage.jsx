import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate,useLocation } from "react-router-dom";

import { login,googleLogin } from "./../redux/Actions/userActions";

import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import { FcGoogle } from 'react-icons/fc';
import jwt_decode from "jwt-decode";



const LoginPage = () => {
  window.scrollTo(0, 0);
  let navigate = useNavigate();
  let location = useLocation();
  const [email, setEmail] = useState("");    
  const [password, setPassword] = useState("");
  const [response, setResponse] = useState("");    

  const dispatch = useDispatch();
  const redirect = location.search ? location.search.split("=")[1] : "/";
  const userLogin = useSelector((state) => state.userLogin);
  const { error, loading, userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [userInfo, navigate, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  const responseGoogle = (response) => {
    console.log(response);
     const userObject = jwt_decode(response.credential);
     console.log(userObject);
     dispatch(googleLogin(userObject.given_name,userObject.email,userObject.sub))
  }

  return (
    <>
      {/* <Header /> */}
    <div className="h-20 md:h-24 lg:h-20 bg-slate-400">

    </div>
    <GoogleOAuthProvider clientId="269779953942-e0kjahqqa2mgviccd1lg4h9d900mh8h9.apps.googleusercontent.com" >
    <div className="container slider-up-content ">
    
      <h1 className="mt-10 mb-2 font-playfair font-bold text-blue-300 text-[30px] sm:text-[36px] xl:text-[48px] leading-tight  uppercase  drop-shadow-md ">Login</h1>
      <div className=" d-flex flex-column flex justify-center align-items-center login-center mx-auto addToCart">
        {/* {error && <Message variant="alert-danger">{error}</Message>}
        {loading && <Loading />} */}
        <form
          className="Login col-md-8 col-lg-4 col-11 w-full md:w-2/3"
          onSubmit={submitHandler}
        >
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="text-white nav__link nav__link--btn nav__link--btn--highlight transition-all w-1/2 md:w-1/3 mt-8">Login</button>
          
      
            {/* <Link
            //   to={redirect ? `/register?redirect=${redirect}` : "/register"}
            >
              Create Account
            </Link> */}
       
          
         
         <div className="flex m-1">
           
                {/* <GoogleLogin
                    onSuccess={(credentialResponse) => {
                      console.log(credentialResponse);
                    }}
                    onError={() => {
                      console.log('Login Failed');
                    }}
                    // className="bg-slate-500"
                    /> */}
                    <div className="mx-auto">
                      <GoogleLogin
                          render={(renderProps) => (
                            <button
                              type="button"
                              className=" "
                              onClick={renderProps.onClick}
                              disabled={renderProps.disabled}
                            >
                              <FcGoogle className="" /> Sign in with google
                            </button>
                          )}
                          onSuccess={responseGoogle}
                          onFailure={responseGoogle}
                          cookiePolicy="single_host_origin"
                    />
                    </div>
           
            

          </div> 
            
        </form>

  
      </div>
    </div> 
    </GoogleOAuthProvider>
    </>
  );
};

export default LoginPage;

