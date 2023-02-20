import React, { useState, useEffect } from "react";
// import { useDispatch } from "react-redux";
import { givePayment } from "./../redux/Actions/paymentAction";
import axios from "axios";
// import "./App.css";
import { useParams,useNavigate } from 'react-router-dom';


const ProductDisplay = () => {


  // const sendHandle =() => {
  //   const article = { title: "hihi" };
  //   axios.post('http://localhost:5001/create-checkout-session', article)
  // }
  let navigate = useNavigate();

  function handleSubmit(event) {
    console.log("hihi")
    event.preventDefault(); // prevent the form from submitting via HTTP request
    // const formData = new FormData(event.target); // get the form data
    const article = { title: "hihi" }
    fetch('http://localhost:5001/create-checkout-session', {
      method: 'POST',
      body: article
    })
    .then(response => {
      // handle the server response here
      // navigate("http://localhost:5001/create-checkout-session")
    })
    .catch(error => {
      // handle any errors here
    });
  }
  

    return(
        <section>
          <div className="product">
            <img
              src="https://i.imgur.com/EHyR2nP.png"
              alt="The cover of Stubborn Attachments"
            />
            <div className="description">
            <h3>Stubborn Attachments</h3>
            <h5>$20.00</h5>
            </div>
          </div>
          <form action="http://localhost:5001/create-checkout-session?hi" method="POST">
            <button type="submit">
              Checkout
            </button>
          </form>
        </section>
      );
}


// action="/create-checkout-session" method="POST"

const Message = ({ message }) => (
  <section>
    <p>{message}</p>
  </section>
);

export default function CheckOutPage() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);

    if (query.get("success")) {
      setMessage("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      setMessage(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
    }
  }, []);

  return message ? (
    <Message message={message} />
  ) : (
    <ProductDisplay />
  );
}