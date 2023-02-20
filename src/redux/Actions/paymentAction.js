import {
    PAYMENT_REQUEST,
    PAYMENT_SUCCESS,
    PAYMENT_FAIL,
    CREDIT_ORDER_REQUEST,
    CREDIT_ORDER_SUCCESS,
    CREDIT_ORDER_FAIL
} from "./../Constants/PaymentConstant.js"
import axios from "axios";

// const url = "http://localhost:5001"
const url = "https://penguintravelbackend-production.up.railway.app"


export const givePayment = () =>
  async (dispatch) => {
    try {
      dispatch({ type: PAYMENT_REQUEST });
      console.log("hi")
      
      const { data } = await axios.post(
        `${url}/create-checkout-session`
        // /api/products
      );
      // console.log("In listProduct action:",data)
      dispatch({ type: PAYMENT_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: PAYMENT_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const createCreditOrder=(user_id,toPaid)=>
  async(dispatch) => {
    try{
      dispatch({ type: CREDIT_ORDER_REQUEST });

      const { data } = await axios.post(`${url}/createCredit`,
       {userId:user_id ,
        credit_add: toPaid});

      // console.log("In createCreditOrder:",data)
      dispatch({ type: CREDIT_ORDER_SUCCESS, payload: data });

    }catch (error){
      dispatch({
        type: CREDIT_ORDER_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });

    }
  }


  //= (id) => async (dispatch, getState)