// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';


const HeroSection = () => {

    return(

      <div className="hero-image">
        <div className=" slider-content hero-text font-semibold rounded">
          <h1 className="text-2xl font-extrabold">This is Penguin Travel</h1>
          <p>Want to show you a different part of world</p>

          <div className=" inline-block mt-4 lg:mt-4">
            <a className="explore-btn  hover:bg-white hover:border-white hover:text-gray-600" href="/shops">Explore More</a>
          </div>

        </div>
      {/* <div className="swiper-pagination"></div> */}
  </div>

// 
    )
}

export default HeroSection;


//Swipe Slide
// <Swiper
// spaceBetween={0}
// slidesPerView={1}
// onSlideChange={() => console.log('slide change')}
// onSwiper={(swiper) => console.log(swiper)}
// >
//   <SwiperSlide>
//       <div className="hero-image">
//   <div className=" slider-content hero-text  font-semibold rounded">
//     <h1 className="text-2xl font-extrabold">This is Penguin Travel</h1>
//     <p>Want to show you a different part of world</p>
//     <div className="inline-block mt-2 lg:mt-4">
//     <button className="explore-btn  hover:bg-white hover:border-white hover:text-gray-600" href="/">Explore More</button>

//     </div>

//   </div>
//   <div className="swiper-pagination"></div>
// </div>
// </SwiperSlide>
// {/*  */}


// <SwiperSlide>
// <div className="hero-image">
//   <div className=" slider-content hero-text font-semibold rounded">
//     <h1 className="text-2xl font-extrabold">This is Penguin Travel</h1>
//     <p>Want to show you a different part of world</p>
//     <div className="inline-block mt-2 lg:mt-4">
//     <button className="explore-btn  hover:bg-white hover:border-white hover:text-gray-600" href="single-product.html">Explore More</button>

//     </div>

//   </div>
//   <div className="swiper-pagination"></div>
// </div>
// </SwiperSlide>
// </Swiper>