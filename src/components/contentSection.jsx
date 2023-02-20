import React from "react";
import Pimg from "../assets/product1.JPG" 
import {FadeIn,FadeUp,ScaleIn} from "../service/scrollAnimate"


const ContentSection = () => {

    return(
    <>
        <div className="container my-24">
            <div className="flex items-center flex-wrap">
                
                <div className="w-full md:w-1/2 px-4 order-last order-sm-first">
                <FadeUp>
                    <img className="mt-8 md:mt-0 w-full h-full lg:pr-14 xl:pr-20 rounded-lg" src={Pimg} alt="product image" loading="lazy" width="512" height="647" />
                    </FadeUp>
                </div>
                
                <div className="w-full md:w-1/2 px-4 text-left order-first md:order-last">

                    <h2 className="text-md font-normal text-blue-200 block mb-4">About</h2>
                    <h3 className="font-playfair font-bold text-blue-300 text-[30px] sm:text-[36px] xl:text-[48px] leading-tight mb-5">Antarctica <br /> The Most Mysterious Place </h3>
                    <hr className="w-16 mb-7"/>
                    <p className="font-normal text-base xl:text-md">
                             Antarctica is the southernmost continent on the planet and is covered by ice and snow for most of the year. 
                             It is also the coldest and driest place on Earth, making it an inhospitable environment for most forms of life. 
                             Despite the harsh conditions, Antarctica is home to a number of unique and fascinating creatures, including penguins.                    </p>
                    {/* <a href="single-product.html" 
                    className="bg-blue-200 transition-all hover:bg-sky-500 hover:text-white px-5 md:px-12 py-3 md:py-4 xl:py-4 rounded-full capitalize font-medium text-sm lg:text-md inline-block mt-8 leading-normal">
                        Buy Now</a> */}
                </div>
            </div>
        </div>
      
    </>
    )
}

export default ContentSection;





