import React, { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams,useNavigate } from 'react-router-dom';
import {BsCoin} from "react-icons/bs";
import history from "history/browser";
import { loadStripe } from "@stripe/stripe-js";
import {updateUserCredit} from "../redux/Actions/userActions";
import axios from "axios";

const PaymentPage = () => {
    window.scrollTo(0, 0);

    let navigate = useNavigate();
    let location = history.location;
    let { type } = useParams();
    const dispatch = useDispatch();
    const credit = useSelector((state) => state.credit);
    const { toPaid, creditGet, creditType } = credit;
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    const CreditOrder = useSelector((state) => state.createCreditOrder);
    const { credit_order } = CreditOrder;
    const credit_order_id = credit_order._id;

    const submitHandler = (e) => {
      e.preventDefault();
      dispatch(updateUserCredit({ id: userInfo._id, credit: userInfo.credit + 1}));
      navigate("/");
    };

    

    // const url = "http://localhost:5001"
    const url = "https://penguintravelbackend-production.up.railway.app"
    // const client_url = "http://localhost:3000"
    const client_url = "https://penguin-travel-frontend-ejb5qe7li-katrinasms.vercel.app/"

    const submitCoffeeHandler = (e) => {
      e.preventDefault();
      // const config = {
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      
      axios.post(`${url}/create-checkout-session`, {userInfo, creditType, toPaid, credit_order_id})
      .then((res)=>{
        if(res.data.url){
          window.location.href = res.data.url;
          if(res.data.url === `${client_url}/success`){
            dispatch(updateUserCredit({ id: userInfo._id, credit: userInfo.credit + 10}));
          }
          console.log(res.data.url)
        }
      })
      .catch((err)=> console.log(err.message));
      // dispatch(updateUserCredit({ id: userInfo._id, credit: userInfo.credit + 1}));
      // navigate("/");
    };
  


  
  return (
    <>
    <div className="h-20 md:h-24 lg:h-20 bg-slate-400">


      </div>
  
        <div className="container d-flex justify-content-center align-items-center login-center my-20">
          <div className="Login2 col-md-8 col-lg-4 col-11 childHorizontalAlign">
              <h6 className="uppercase text-xl">Here You are:</h6>
              <h1 className="text-9xl my-10">${toPaid}</h1>
              <h1 className="text-xl my-10"> for {creditGet} Credit  <BsCoin className="inline"/></h1>
            
            {
              type === "free"?(<>
              <div className="my-4">
                  <button className="bg-blue-300 w-4/5 uppercase py-2.5 text-white text-md" onClick={submitHandler}>Continue </button>
                </div></>
                ):(<>
                <form>
                    <button type="submit" className="bg-blue-300 w-4/5 uppercase py-2.5 text-white text-md" onClick={submitCoffeeHandler}>
                      Checkout
                    </button>
                  </form>
                </>)
            }
            {/* <form action="http://localhost:5001/create-checkout-session" method="POST" className=" w-4/5"> */}

          </div>
  
      </div>
    </>
  );
};

export default PaymentPage;

