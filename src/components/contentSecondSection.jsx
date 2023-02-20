import React from "react";
import Pimg from "../assets/cover1.webp" 
import {FadeIn,FadeUp,ScaleIn} from "../service/scrollAnimate"




const ContentSecondSection = () => {

    return(
    <>
        <div className="container my-24">
            <div className="flex items-center flex-wrap">
                <div className="w-full md:w-1/2 px-4  order-last">
                    {/* <p>hi</p> */}
                    <FadeUp>
                    <img className="mt-8 md:mt-0 w-full h-full lg:pr-14 xl:pr-20 rounded-lg" src={Pimg} alt="product image" loading="lazy" width="512" height="647" />
                    </FadeUp>
                </div>
                <div className="w-full md:w-1/2 px-4 text-left">

                    <h2 className="text-md font-normal text-blue-200 block mb-4">More</h2>
                    <h3 className="font-playfair font-bold text-blue-300 text-[30px] sm:text-[36px] xl:text-[48px] leading-tight mb-5">Penguins <br />The livings in Antarctica</h3>
                    <hr className="w-16 mb-7"/>
                    <p className="font-normal text-base xl:text-md">
                    Penguins are flightless birds that are well-adapted to life in the cold, with dense feathers and a layer of insulating fat that help them stay warm in the harsh Antarctic climate. 
                    There are several species of penguins that can be found in Antarctica, including the Adelie penguin, the Emperor penguin, and the Chinstrap penguin. 
                    </p>
                    <a href="shops" 
                    className="bg-blue-200 transition-all hover:bg-sky-500 hover:text-white px-5 md:px-12 py-3 md:py-4 xl:py-4 rounded-full capitalize font-medium text-sm lg:text-md inline-block mt-8 leading-normal">
                        See More</a>
                </div>
            </div>
        </div>
      
    </>
    )
}

export default ContentSecondSection;





