import { combineReducers, configureStore } from '@reduxjs/toolkit';
import menuReducer from './reducer/menu'
import creditReducer from './reducer/creditReducer'
import {
  userDetailsReducer,
  userLoginReducer,
  userRegisterReducer,
  userUpdateProfileReducer,
  userGoogleLoginReducer,
  userUpdateCreditReducer
} from "./reducer/userReducers";

import {
  productCreateReviewReducer,
  productDetailsReducer,
  productListReducer,
  product3RandomListReducer
} from "./reducer/productReducers";

import {
  cartReducer
}from "./reducer/cartReducers";

import {
  orderCreateReducer,
  orderDetailsReducer,
  orderListMyReducer,
  orderPayReducer,
} from "./reducer/orderReducers";

import {
  paymentReducer,
  createCreditOrderReducer
}from "./reducer/paymentReducer";

const userInfoFromLocalStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const cartItemsFromLocalStorage = localStorage.getItem("cartItems")
? JSON.parse(localStorage.getItem("cartItems"))
: [];

const shippingAddressFromLocalStorage = localStorage.getItem("shippingAddress")
  ? JSON.parse(localStorage.getItem("shippingAddress"))
  : {};


const initialState = {
    cart: {
      cartItems: cartItemsFromLocalStorage,
      shippingAddress: shippingAddressFromLocalStorage,
    },
    userLogin: { userInfo: userInfoFromLocalStorage },
  };

export const store = configureStore({
    reducer: {
      menu: menuReducer,
      credit:creditReducer,
      userLogin: userLoginReducer,
      userRegister: userRegisterReducer,
      userDetails: userDetailsReducer,
      userUpdateProfile: userUpdateProfileReducer,
      userGoogleLogin: userGoogleLoginReducer,
      userUpdateCredit:userUpdateCreditReducer,
      productList: productListReducer,
      productDetails: productDetailsReducer,
      product3Random: product3RandomListReducer,
      cart: cartReducer,
      orderCreate: orderCreateReducer,
      orderDetails: orderDetailsReducer,
      orderPay: orderPayReducer,
      orderListMy: orderListMyReducer,
      payment: paymentReducer,
      createCreditOrder: createCreditOrderReducer

      
      // productReviewCreate: productCreateReviewReducer

    },
    preloadedState: initialState
});
  