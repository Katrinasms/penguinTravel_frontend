import React, { useEffect } from "react";
// import Header from "./../components/Header";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { addToCart, removefromcart } from "./../Redux/Actions/cartActions";
import { useParams,useNavigate } from 'react-router-dom';
import history from "history/browser";
import { addToCart, removefromcart } from "../redux/Actions/cartAction";

const CartPage = () => {
  window.scrollTo(0, 0);
  const dispatch = useDispatch();
  let navigate = useNavigate();
  let location = history.location;
  let { id } = useParams();
  const qty = location.search ? Number(location.search.split("=")[1]) : 1;

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const total = cartItems.reduce((a, i) => a + i.qty * i.price, 0).toFixed(2) * 0.5;


  useEffect(()=>{
   
    console.log("id",id);
    console.log("search",qty);
    if (id) {
      dispatch(addToCart(id, qty));
    }
    console.log("total",total);
    // console.log(cartItems);
  },[dispatch, id, qty])


  const checkOutHandler = () => {
    navigate(`/placeorder`);
    // history.push("/login?redirect=shipping");
  };

  const removeFromCartHandle = (id) => {
    dispatch(removefromcart(id));
  };
  return (
    <>
      <div className="h-20 bg-slate-400">
      </div>
      <div className="py-10 md:py-24">
      {console.log(cartItems)}
      <div className="container">
      {cartItems.length === 0 ? (
 
      <div className=" alert alert-info text-center mt-3 md:w-2/3  mx-auto">
            <p className="mb-2 ">Your cart is empty 🐧🐧🐧🐧 </p>
            <Link
              className="btn btn-success mx-5 px-5 py-3"
              to="/shops"
              style={{
                fontSize: "12px",
              }}
            >
              SHOPPING NOW
            </Link>
          </div>):(
            <div className="md:mx-40">
            <div className=" alert alert-info text-center mt-3 ">
              Total Cart Products
              <Link className="text-success mx-2" to="/cart">
                ({cartItems.length})
              </Link>
            </div>
            {/* cartiterm */}
            {cartItems.map((item) => (
              
              <div className="cart-item row childHorizontalAlign" key={item.product}>
                <div
                  onClick={() => removeFromCartHandle(item.product)}
                  className="remove-button d-flex justify-content-center align-items-center "
                >
                  <i className="fas fa-times"></i>
                </div>
                {console.log(item)}
                <div className="cart-image col-md-3 flex-none">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="cart-text col-md-5 col-sm-4  d-flex align-items-center childHorizontalAlign">
                  <Link to={`/products/${item.product}`}>
                    <h4>{item.name}</h4>
                  </Link>
                </div>
                {/* <div className="cart-qty col-md-2 col-sm-5 mt-md-5 mt-3 mt-md-0 d-flex flex-column justify-content-center">
                  <h6>QUANTITY</h6>
                  <select
                    value={item.qty}
                    onChange={(e) =>
                      dispatch(addToCart(item.product, Number(e.target.value)))
                    }
                  >
                    {[...Array(10).keys()].map((x) => (
                      <option key={x + 1} value={x + 1}>
                        {x + 1}
                      </option>
                    ))}
                  </select>
                </div> */}
                <div className="cart-price mt-3 mt-md-0 col-md-2 col-sm-7 align-items-sm-end align-items-start  d-flex flex-column justify-content-center ">
                  <h6>Creidt</h6>
                  <h4>${item.price * 0.5}</h4>
                </div>
              </div>
            ))}

            {/* End of cart iterms */}
            <div className="total">
              <div className="sub">total:</div>
              <div className="total-price">${total}</div>
            </div>
            <hr />
            <div className="flex cart-buttons d-flex align-items-center row childHorizontalAlign">
              <Link to="/shops" className="col-md-6 ">
                <button>Continue To Shopping</button>
              </Link>
              {total > 0 && (
                // <div className="col-md-6 d-flex justify-content-md-end mt-3 mt-md-0">
                <div className="col-md-6 mt-3  mt-md-0">
                  <button onClick={checkOutHandler}>Checkout</button>
                </div>
              )}
            </div>
          </div>
          )}
        </div>  
      </div>
    </>
     
  );
}

export default CartPage;
