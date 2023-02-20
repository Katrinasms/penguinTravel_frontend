import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate,useLocation } from "react-router-dom";
import Message from "../components/LoadingError/Error";
import Loading from "../components/LoadingError/Loading";
import { register } from "../redux/Actions/userActions";
import moment from "moment";
import ProfileTabs from "../components/Tabs/profileTab"
import { getUserDetails } from "../redux/Actions/userActions";
import {listMyOrders} from "../redux/Actions/orderAction";
import OrdersTab from "../components/Tabs/orderTab";
import {BsCoin} from "react-icons/bs";

// import FormInput from "../components/Form/FormInput"
// import Header from "./../components/Header";


const ProfilePage = () => {
    window.scrollTo(0, 0);
    const dispatch = useDispatch();

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;
    const orderListMy = useSelector((state) => state.orderListMy);
    const { loading, error, orders } = orderListMy;

    useEffect(() => {
        dispatch(listMyOrders());
        dispatch(getUserDetails("profile"));
      }, [dispatch]);

  return (
    <>
    <div className="h-20 md:h-24 lg:h-20 bg-slate-400">
        {console.log(userInfo)}

    </div>
    <div className="md:mx-10 mb-4">
    <div className="container slider-up-content">
        {/* <h1 className="mt-10 mb-2 font-playfair font-bold text-blue-300 text-[30px] sm:text-[36px] xl:text-[48px] leading-tight  uppercase drop-shadow-md">hi</h1> */}
        <div className="row align-items-start mt-16">
            <div className="col-lg-4 p-0 shadow ">
                <div className="author-card pb-0 pb-md-3 mb-0">
                <div className="author-card-cover"></div>
                <div className="author-card-profile row">
                    <div className="author-card-avatar col-md-5">
                    <img className="absolute left-4 -top-12" src="./images/photos/southgeo/southgeo(24).jpeg" alt="userprofileimage" />
                    </div>
                    <div className="author-card-details col-md-7">
                        <h5 className="author-card-name mb-2 ">
                            <strong className="pretty__text">{userInfo.name}</strong>
                        </h5>
                        
                        {/* <span className="author-card-position"> */}
                            
                            <p className="pretty__text">  <BsCoin className="inline "/> {userInfo.credit}</p>
                            <p className="pretty__text">Joined {moment(userInfo.createdAt).format("LL")}</p>
                        {/* </span> */}
                    </div>
                </div>
                </div>
                <div className="wizard">
                    <div className="d-flex align-items-start">
                        <div
                        className="nav align-items-start flex-column col-12 nav-pills me-3 "
                        id="v-pills-tab"
                        role="tablist"
                        aria-orientation="vertical"
                        >
                        <button
                            className="nav-link active"
                            id="v-pills-home-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#v-pills-home"
                            type="button"
                            role="tab"
                            aria-controls="v-pills-home"
                            aria-selected="true"
                        >
                            Profile Settings
                        </button>
                        {/* <button
                            className="nav-link d-flex justify-content-between"
                            id="v-pills-profile-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#v-pills-profile"
                            type="button"
                            role="tab"
                            aria-controls="v-pills-profile"
                            aria-selected="false"
                        >
                            Orders List
                        </button> */}
                        </div>
                    </div>
                </div>
            </div>
            

            {/* panels */}
            <div
                className="tab-content col-lg-8 pb-5 pt-lg-0 pt-3 md:p-10"
                id="v-pills-tabContent"
            >
                <div
                className="tab-pane fade show active "
                id="v-pills-home"
                role="tabpanel"
                aria-labelledby="v-pills-home-tab"
                >
                {/* <p>ProfileTabs</p> */}
                <ProfileTabs />
                </div>
                <div
                    className="tab-pane fade"
                    id="v-pills-profile"
                    role="tabpanel"
                    aria-labelledby="v-pills-profile-tab"
                >
                    <OrdersTab orders={orders} loading={loading} error={error} />
                {/* <p>Order</p> */}
                </div>
            </div>
            </div>
      </div>
      </div>
    </>
  );
};

export default ProfilePage;


   