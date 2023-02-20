import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import "./product.css"
import { Pagination,Navigation } from "swiper";
import ShopGridCard from "./shopGridCard"
import { useDispatch,useSelector } from "react-redux";
import Loading from "./LoadingError/Loading"
import Message from "./LoadingError/Error"

import ProductCard from "./productCard"
import img1 from "../assets/product1.JPG" 
import img2 from "../assets/product2.JPG" 
import img3 from "../assets/cover1.webp" 

import {FadeIn,FadeUp,ScaleIn} from "../service/scrollAnimate"
import {random3Product} from "../redux/Actions/productAction";
import { useNavigate } from "react-router-dom";


const img_source 
      = [{image:img2, index:1},
          {image:img1, index:2},
          {image:img3, index:3},]





const AiProductSwiper = () => {



  let navigate = useNavigate();
  const productList = useSelector((state) => state.product3Random);
  const { loading, error, products } = productList;
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const dispatch = useDispatch();
 
  useEffect(() => {
    dispatch(random3Product());
    // console.log("hi, I am in aiswiper")
    // console.log("products",products)
  }, [userLogin]);

  const navigateTo = (path) => {
    navigate(path);
    console.log(path);
}

  

  return (

    <div className="container mb-10">
      <div className="grid grid-rows-1 grid-flow-col gap-4">
       <div className="text-center mb-14">
          <h2 className="font-playfair font-bold text-blue-300 text-4xl lg:text-2xl mb-4 ">Photos Shop</h2>
          <p className="font-normal text-black text-base"> Discover a stunning collection of penguin images in our Penguin Photos section, showcasing the diverse beauty of these fascinating birds from adorable little penguins to majestic emperor penguins. </p>
        </div>
      </div>
      {loading ? (
          <Loading />
        ) : error ? (
          <Message variant="alert-danger">{error}</Message>
        ) : (
      <FadeUp>
        <div className="md:mx-10">
          
          <Swiper
          breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            }}
            slidesPerView={1}
            spaceBetween={30}
            navigation={true}
            pagination={{
              dynamicBullets: true,
              clickable: true,
            }}
            modules={[Pagination,Navigation]}
            className="mySwiper"
          >
            {/* { console.log("products1",products)} */}
            {products?.map((product) => (
              // <div className="transition-all w-full md:w-1/2 lg:w-1/3 px-4 py-4 slider-up-content" key={i}   onClick={()=>navigateTo(`/shops/${product._id}`)}>

              <SwiperSlide className="pb-10 mr-10" onClick={()=>navigateTo(`/shops/${product._id}`)} key={product._id}  >
              <ShopGridCard 
              image={product.image}
              title={product.title}
              price={product.price}
              lazy={false} />
             
            </SwiperSlide>
            // </div>  
            ))}

            <div className="swiper-pagination"></div> 

          </Swiper>
          </div>

      </FadeUp>
        )}  

    </div>
  
  );
};

export default AiProductSwiper;