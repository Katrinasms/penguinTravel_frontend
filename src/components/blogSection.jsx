import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import "./product.css"
import { Pagination,Navigation } from "swiper";
import {FadeUp} from "../service/scrollAnimate"


import img1 from "../assets/cover3.JPG" 
import img2 from "../assets/cover4.JPG" 
import img3 from "../assets/cuteme.JPG" 
import img4 from "../assets/product3.JPG" 
import BlogCard from "./blogCard";

const img_source 
      = [{image:img1, index:1},
          {image:img2, index:2},
          {image:img3, index:3},
          {image:img4, index:4},]


const video_data = [
    {title: "[南極企鵝之旅]12分鐘睇完22日Falkland Island, South Georgia & 南極三島之旅| 22 days to Antarctica", 
    image: "./images/photos/video/Cover1.jpg", 
    link:"https://www.youtube.com/watch?v=RZor4t83b6Q",
    content: "簡單總結去Falkland Island, South Georgia & 南極22日行程!"
    },
    {
        title: "22 min Relaxing Music with Penguins (South Georgia & Antarctica)  Part 1", 
        image: "./images/photos/video/Cover2.jpeg", 
        link:"https://www.youtube.com/watch?v=JaaAjn-0YT0&t=1109s",
        content: "A video to all who love penguins. Hope you can enjoy it."},
    {
        title: "[阿根廷睇世界杯]7分鐘睇完世界盃月間既阿根廷 | 7 Min about World Cup Period in Argentina", 
        image: "./images/photos/video/Cover3.png", link:"https://www.youtube.com/watch?v=FB7_XU75il4",
        content: "希望你地可以一齊感受到阿根延既喜悅!"},
]



const BlogSection = () => {
    return (
        <FadeUp>
        <div className="container pt-24 pb-24">
            <div className="grid grid-cols-12 gap-4">
              
                <div className="col-span-12">
                    <div className="section-title text-center pb-14">
                        <h2 className="font-playfair font-bold text-blue-300 text-4xl lg:text-2xl mb-4 capitalize">Latest Video</h2>
                        <p className="font-normal text-gray-700 text-base">There are many variations of passages of Lorem</p>
                    </div>
                </div>
                
                <div className="col-span-12">
                    <section className="relative -m-4">
                        <div className="blog-carousel overflow-hidden p-4">
                        
                        <Swiper
                            breakpoints={{
                                576:{
                                    slidesPerView: 2,
                                    spaceBetween: 30,
                                },
                                970: {
                                    slidesPerView: 3,
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
                                className="mySwiper  flex"
                            >

                                {video_data?.map((image,index) => (
                               
                                <SwiperSlide className="pb-10 mr-10 swiper-slide" key={index}>
                                     {/* <a href={image.link} className="inline-block play-vedio text-white opacity-75"> */}
                                    <BlogCard image={image.image} title={image.title} link={image.link} content={image.content} className="swiper-content h-100"/>
                                    {/* </a> */}
                                </SwiperSlide>
                                
                                ))}
                              
                            

                                <div className="swiper-pagination"></div> 
                        
                        </Swiper>

                     

                        
                        </div>
                    </section>
                </div>
               
            </div>
        </div>
        </FadeUp>
    )
}

export default BlogSection;