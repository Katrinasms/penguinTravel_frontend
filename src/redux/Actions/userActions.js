import {
    USER_DETAILS_FAIL,
    USER_DETAILS_REQUEST,
    USER_DETAILS_RESET,
    USER_DETAILS_SUCCESS,
    USER_LOGIN_FAIL,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGOUT,
    USER_REGISTER_FAIL,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_UPDATE_PROFILE_FAIL,
    USER_UPDATE_PROFILE_REQUEST,
    USER_UPDATE_PROFILE_SUCCESS,
    USER_GOOGLE_LOGIN_REQUEST,
    USER_UPDATE_CREDIT_REQUEST,
    USER_UPDATE_CREDIT_SUCCESS,
    USER_UPDATE_CREDIT_FAIL
    // USER_GOOGLE_LOGIN_SUCCESS,
    // USER_GOOGLE_LOGIN_FAIL
  } from "../Constants/UserContants";
  import {
    CART_CLEAR_ITEMS
  } from "../Constants/CartConstants";
  import axios from "axios";
//   import { ORDER_LIST_MY_RESET } from "../Constants/OrderConstants";
  
  // const url = "http://localhost:5001"
  const url = "https://penguintravelbackend-production.up.railway.app"

  
  // LOGIN
  export const login = (email, password) => async (dispatch) => {
    try {
      dispatch({ type: USER_LOGIN_REQUEST });
  
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
  
      const { data } = await axios.post(
        `${url}/api/users/login`,
        { email, password },
        config
      );
      console.log("login data check:",data)
      dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
  
      localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: USER_LOGIN_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
  
  // LOGOUT
  export const logout = () => (dispatch) => {
    console.log("logging out")
    localStorage.removeItem("userInfo");
    localStorage.removeItem("cartItems");
    dispatch({ type: USER_LOGOUT });
    dispatch({ type: USER_DETAILS_RESET });
    dispatch({ type: CART_CLEAR_ITEMS });
    // dispatch({ type: ORDER_LIST_MY_RESET });
  };
  
  // REGISTER
  export const register = (name, email, password) => async (dispatch) => {
    try {
      dispatch({ type: USER_REGISTER_REQUEST });
  
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
  
      const { data } = await axios.post(
        `${url}/api/users`,
        { name, email, password },
        config
      );
      dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
      dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
  
      localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: USER_REGISTER_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };


//GoogleLogin/Register
  export const googleLogin = (name, email, gid) => async (dispatch) => {
    try {
      dispatch({ type: USER_GOOGLE_LOGIN_REQUEST });
  
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
  
      const { data } = await axios.post(
        `${url}/api/users/gooReg`,
        { name, email, gid },
        config
      );
      if (data.isExist){
        //exist google account, login & load profile 
        dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
      }else {
         //not google account, registered & login
         dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
         dispatch({ type: USER_LOGIN_SUCCESS, payload: data });

      }
      localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: USER_LOGIN_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
  
  // USER DETAILS
  export const getUserDetails = (id) => async (dispatch, getState) => {
    try {
      dispatch({ type: USER_DETAILS_REQUEST });
      const {
        userLogin: { userInfo },
      } = getState();
  
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      console.log("hi")
  
      const { data } = await axios.get(`${url}/api/users/${id}`, config);
      console.log(data)

      dispatch({ type: USER_DETAILS_SUCCESS, payload: data });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      if (message === "Not authorized, token failed") {
        dispatch(logout());
      }
      dispatch({
        type: USER_DETAILS_FAIL,
        payload: message,
      });
    }
  };
  
//reload login after payment
  export const PaymentReload = () => async (dispatch, getState) => {
    try {
      dispatch({ type: USER_DETAILS_REQUEST });
      const {
        userLogin: { userInfo },
      } = getState();

      console.log("userLogin, token?",userInfo)
  
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      // console.log("hi")
  
      const { data } = await axios.get(`${url}/api/users/profile`, config);
      
      // console.log(data)

      // dispatch({ type: USER_DETAILS_SUCCESS, payload: data });
      dispatch({ type: USER_DETAILS_SUCCESS, payload: data });
      dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
      localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      if (message === "Not authorized, token failed") {
        dispatch(logout());
      }
      dispatch({
        type: USER_DETAILS_FAIL,
        payload: message,
      });
    }
  };


  // UPDATE PROFILE
  export const updateUserProfile = (user) => async (dispatch, getState) => {
    try {
      dispatch({ type: USER_UPDATE_PROFILE_REQUEST });
  
      const {
        userLogin: { userInfo },
      } = getState();
  
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
  
      const { data } = await axios.put(`${url}/api/users/profile`, user, config);
      dispatch({ type: USER_UPDATE_PROFILE_SUCCESS, payload: data });
      dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
  
      localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      if (message === "Not authorized, token failed") {
        dispatch(logout());
      }
      dispatch({
        type: USER_UPDATE_PROFILE_FAIL,
        payload: message,
      });
    }
  };


// UPDATE credit
export const updateUserCredit = (user) => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_UPDATE_CREDIT_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.put(`${url}/api/users/updateCredit`, user, config);
    dispatch({ type: USER_UPDATE_CREDIT_SUCCESS, payload: data });
    dispatch({ type: USER_LOGIN_SUCCESS, payload: data });

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch({
      type: USER_UPDATE_CREDIT_FAIL,
      payload: message,
    });
  }
};
  