import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {updateUserCredit} from "../redux/Actions/userActions";
import { PaymentReload } from "../redux/Actions/userActions";




const ThankYouPage = () => {

  // const userLogin = useSelector((state) => state.userLogin);
  // const { userInfo } = userLogin;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(PaymentReload());
  }, [dispatch]);

  
  // useEffect(() => {
  //   dispatch(updateUserCredit({ id: userInfo._id, credit: userInfo.credit + 10}));
  // },[])
      
  return (
    <>
      <div className="h-20 md:h-24 lg:h-20 bg-slate-400">
      </div>
      {/* <Header /> */}
      <div className=" container my-5">
        <div className="row justify-content-center align-items-center">
          <h4 className="text-center mb-2 mb-sm-5">Thank you!</h4>
          <img
            style={{ width: "100%", height: "300px", objectFit: "contain" }}
            src="/images/photos/antarctica/antarctica (18).jpeg"

            
            alt="Not-found"
          />
          <button className="col-md-3 col-sm-6 col-12 btn btn-success mt-5">
            <Link to="/" className="text-white text-decoration-none">
              Home page
            </Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default ThankYouPage;
