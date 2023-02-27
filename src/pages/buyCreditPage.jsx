import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate,useLocation } from "react-router-dom";
import {BsCoin} from "react-icons/bs";
import img from "../assets/icon/coffee.jpeg" 
import {buyCreditNType} from '../redux/reducer/creditReducer'
import {createCreditOrder} from '../redux/Actions/paymentAction'
import {HiOutlineCursorClick} from "react-icons/hi";

import jwt_decode from "jwt-decode";



const BuyCreditPage = () => {
  // window.scrollTo(0, 0);

  const [toPaid, setToPaid] = useState(0)
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;


  useEffect(()=>{
    console.log("ToPaid value", toPaid)
  },[toPaid])


  const navigateTo = (path) => {
    navigate(path)
  }

  const paymentButtonClick = (toPaid, creditGet, creditType, path)=>{
    dispatch(buyCreditNType({
      toPaid:toPaid,
      creditGet:creditGet,
      creditType:creditType
    }));
    dispatch(createCreditOrder(userInfo._id, toPaid))
    // if()

    navigate(path)
  }

  
  return (
    <>
    {/* Heading */}
    <div className="h-20 md:h-24 lg:h-20 bg-slate-400">
    </div>

    <div className="container slider-up-content my-24 mx-auto">
        <h1 className=" my-4 font-playfair font-bold text-blue-300 text-[30px] sm:text-[36px] xl:text-[48px] leading-tight text-sh drop-shadow	pretty__text">Credit </h1>
        <div className="flex items-center flex-wrap space-x-15 childHorizontalAlign mxmd:mx-48">
           {/* first card */}
          {/* <div className=""> */}
          <div className="m-2 w-full sm:w-min shadow rounded-b-lg card h-100	grow">
            <div className="title-cover p-5 bg-blue-300 rounded-t-lg w-full border-x-2 ">
            </div>
            <div className="flex flex-col h-[28rem] verticalAlighn childHorizontalAlign">
         
              <h1 className="text-2xl p-3 text-slate-600 text-center  flex-wrap md:w-64 pretty__text">I really want to download the true size photos for free 🥺🥺🥺, Can I?</h1>
              <div className="px-5 pt-4 w-full">
                  <h1 className="text-xl text-slate-600 pretty__text"><b>One</b> <HiOutlineCursorClick className="inline"/> for <b>1</b> credit <BsCoin className="inline"/> </h1>
              </div>
            </div>
             <div className=" p-5 w-full bg-blue-100 rounded-b-lg border-x-2">
                <button className="text-2xl border-solid border-2 text-slate-500 bg-slate-400 text-white px-4 py-1 rounded-lg hover:bg-blue-500 pretty__text" onClick={()=>paymentButtonClick(0,1,"free",`/payment/free`)}>Take it!</button>
            </div>
          </div>



          {/* Second Card */}
          <div className="m-2 w-full sm:w-min shadow rounded-b-lg card h-100 grow">
            <div className="title-cover p-5 bg-blue-300 rounded-t-lg w-full border-x-2">
            </div>
            <div className="flex flex-col h-[28rem] verticalAlighn childHorizontalAlign ">
            <img src={img} className="drop-shadow-none w-1/4 mx-auto"></img>
                <h1 className="text-2xl pt-5 px-5 text-slate-600  md:w-64 text-left pretty__text">Let me buy you a coffee, is it a good idea?</h1>
                
                <h1 className="text-xl text-slate-600 p-5 pretty__text"><b>One</b>  Coffee (<b>$5</b> USD) for <b>10</b> credits <BsCoin className="inline"/> </h1>
            </div>
           
             <div className="title-cover p-5 w-full bg-blue-100 rounded-b-lg border-x-2">
               
                <button className="text-2xl border-solid border-2 text-slate-500 bg-slate-400 text-white px-4 py-1 rounded-lg hover:bg-blue-500 pretty__text" disabled onClick={()=>paymentButtonClick(5,10,"coffee",`/payment/coffee`)}>Thanks 🥺</button>
                <p className="text-sm pretty__text" >To be updated</p>
            </div>
          </div>

           {/* Third Card */}
           <div className="m-2 w-full sm:w-min shadow rounded-b-lg card h-100 grow">
            <div className="title-cover p-5 bg-blue-300 rounded-t-lg w-full border-x-2">
            </div>
            <div className="flex flex-col h-[28rem]  verticalAlighn childHorizontalAlign">
                
              <h1 className="text-2xl pt-5 px-5 pb-1 text-slate-600  md:w-64 text-left pretty__text mb-4">I want freedom, I decide on my own 😎😎</h1>
                <div className="flex childHorizontalAlign verticalAlighn pb-10 ">
                      <input
                              type="number"
                              placeholder="$"
                              className="border-2 px-2 py-1 pretty__text"
                              value={toPaid}
                              onChange={(e) => setToPaid(e.target.value)}
                            />
                      <p className="px-2 py-1 pretty__text" > USD</p>
                </div>
                <h1 className="text-xl text-slate-600 pretty__text"><b>$1</b>  USD for <b>2</b> credits <BsCoin className="inline"/> </h1>

            {/* <div className="title-cover pb-5 px-5 w-full border-x-2">
            </div> */}
            </div>
             <div className="title-cover p-5 w-full bg-blue-100 rounded-b-lg border-x-2">
                <button className="text-2xl border-solid pretty__text border-2 text-slate-500 bg-slate-400 text-white px-4 py-1 rounded-lg hover:bg-blue-500" disabled onClick={()=>paymentButtonClick(toPaid,toPaid*2,"freed",`/payment/freed`)}>Thanks 🥺</button>
                <p className="text-sm pretty__text ">To be updated</p>
            </div>
          </div>
        {/* </div> */}

      </div>
    </div> 

    {/* trial */}
 
    </>
  );
};

export default BuyCreditPage;

