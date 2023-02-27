import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { createOrder } from "../redux/Actions/orderAction";
import { ORDER_CREATE_RESET } from "../redux/Constants/OrderConstants";
import Message from "./../components/LoadingError/Error";
import { useNavigate } from 'react-router-dom';
import JSZip from 'jszip';
import {updateUserCredit} from "../redux/Actions/userActions";


const PlaceOrderPage = () => {
  window.scrollTo(0, 0);
  let navigate = useNavigate();


  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const orderCreate = useSelector((state) => state.orderCreate);
  const { order, success, error } = orderCreate;

  // Calculate Price
  const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2);
  };

  //new version (my credit version)
  const photo_num =  cart.cartItems.reduce((acc, item) => acc + item.qty, 0)
  const credit_require =  addDecimals(
    cart.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0) * 0.5
  );
  const user_credit = addDecimals(userInfo.credit);
  const remaining_credit = addDecimals(user_credit - credit_require);

  const image_urls = []
  
  cart.cartItems.map((item)=> item.image)

  const onButtonClick = async () => {
      // using Java Script method to get photos
      cart.cartItems.map((item)=> image_urls.push(item.raw))
      console.log("image_urls", image_urls)
      const promises = image_urls.map(url => fetch(url));
      const responses = await Promise.all(promises); 
      const blobs = await Promise.all(responses.map(res => res.blob()));
      console.log("blobs",blobs);

      //zip
      const zip = new JSZip()
      blobs.forEach((blob, i) => {
        zip.file(`${cart.cartItems[i].name}.jpg`, blob);
    });
      const zipBlob = await zip.generateAsync({type:'blob'});

      const fileURL = window.URL.createObjectURL(zipBlob);
      let alink = document.createElement('a');
      alink.href = fileURL;
      alink.download = 'download.zip';
      alink.click();
      
      dispatch(updateUserCredit({ id: userInfo._id, credit: remaining_credit}));
      navigate(`/`);
      dispatch({ type: ORDER_CREATE_RESET });
      placeOrderHandler();

}

// dispatch(updateUserProfile({ id: user._id, name, email, password }));

    //-> 
//end of new version

  useEffect(() => {
    if (success) {
      navigate(`/order/${order._id}`);
      dispatch({ type: ORDER_CREATE_RESET });
      console.log("success")
    }
  }, [navigate, dispatch, success, order]);


  const goBuyCreditHandler = () =>{
    navigate(`/buycredit`)
  }

  const placeOrderHandler = () => {
    dispatch(
      createOrder({
        orderItems: cart.cartItems,
        creditRequired: credit_require
      })
    );
  };

  return (
    <>
    <div className="h-20 md:h-24 lg:h-20 bg-slate-400">

    </div>
      <div className="container pt-10 ">
        <div className="row  order-detail mx-sm-20">
          <div className="col-lg-4 col-sm-4 mb-lg-4 mb-5 mb-sm-0 ">
            <div className="row ">
              <div className="col-md-4">
                <div className="alert-success order-box ">
                  <i className="fas fa-user text-sky-300"></i>
                </div>
              </div>
              <div className="col-md-8 center flex-wrap">
                <h5>
                  <strong>Customer</strong>
                </h5>
                <p>{userInfo.name}</p>
                <p >{userInfo.email}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row order-products justify-content-between my-10 mx-md-20">
          <div className="col-lg-8">
            {cart.cartItems.length === 0 ? (
              <Message variant="alert-info mt-5">Your cart is empty</Message>
            ) : (
              <>
                {cart.cartItems.map((item, index) => (
                  <div className="order-product row" key={index}>
                    <div className="col-md-3 col-6">
                      <img src={item.image} alt={item.name} />
                    </div>
                    <div className="col-md-7 col-6 d-flex align-items-center">
                      <Link to={`/products/${item.product}`}>
                        <h6>{item.name}</h6>
                      </Link>
                    </div>
                    {/* <div className="mt-3 mt-md-0 col-md-2 col-6  d-flex align-items-center flex-column justify-content-center ">
                      <h4>QUANTITY</h4>
                      <h6>{item.qty}</h6>
                    </div> */}
                    <div className="mt-3 mt-md-0 col-md-2 col-6 align-items-end  d-flex flex-column justify-content-center ">
                      <h4>credit</h4>
                      <h6>{item.qty * item.price * 0.5}</h6>
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
          {/* total */}
          <div className="col-lg-3 d-flex align-items-end flex-column mt-5 subtotal-order">
            <table className="table table-bordered">
                <tbody>
                  <tr>
                    <td>
                      <strong>No of Photos</strong>
                    </td>
                    <td>{photo_num}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Credit Required</strong>
                    </td>
                    <td>{credit_require}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Your Current Credit</strong>
                    </td>
                    <td>{user_credit}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Remaining Credit</strong>
                    </td>
                    <td>{remaining_credit}</td>
                  </tr>
                </tbody>
              </table>
            {remaining_credit<0 ? (
              <div className="w-full">
                <p className="text-red-500 mb-1" >* Not Enough credit</p>
              {/* <button disabled type="submit" onClick={placeOrderHandler}>
              PLACE ORDER
            </button> */}
              <button className="mt-1" onClick={goBuyCreditHandler}>
                Buy Credit
              </button>
            </div>
            ) : (
              <button type="submit" onClick={onButtonClick}>
                PLACE ORDER
              </button>
            )}
            {error && (
              <div className="my-3 col-12">
                <Message variant="alert-danger">{error}</Message>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default PlaceOrderPage;
