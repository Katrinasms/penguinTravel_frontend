import $ from "jquery";
import { useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';


const ProductsSection = ()=> {
   new Swiper(".product-carousel .swiper-container", {
        loop: false,
        slidesPerView: 3,
        spaceBetween: 30,
        speed: 600,
        autoplay: false,
        lazy: true,
        fadeEffect: {
          crossFade: true,
        },
        pagination: false,
    
        navigation: {
          nextEl: ".product-carousel .swiper-button-next",
          prevEl: ".product-carousel .swiper-button-prev",
        },
    
        breakpoints: {
          // when window width is >= 320px
          0: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          // when window width is >= 480px
          576: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          // when window width is >= 640px
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        },
      });
  


return (
    

    <div className="container">

        <div className="grid grid-rows-1 grid-flow-col gap-4">
            <div className="text-center mb-14">
                <h2 className="font-playfair font-bold text-blue-300 text-4xl lg:text-xl mb-4">Deal Collection</h2>
                <p className="font-normal text-black text-base">There are many variations of passages of Lorem</p>
            </div>
        </div>


        {/* <div className="grid grid-cols-12 gap-4">
            <div className="col-start-1 md:col-start-3 col-span-12 md:col-span-8">

                <div className="relative py-4 p-4 before:absolute before:w-full before:empty before:block before:h-full before:z-10 before:shadow-deal before:inset-x-2 before:top-2 after:absolute after:w-full after:empty after:block after:h-full after:z-10 after:shadow-deal after:inset-x-3 after:top-3 mb-12">
             
                    <div className="countdown item-1 flex flex-wrap justify-center pt-4" data-countdown="2023/3/21" data-format="short">
                        <div className="countdown__item flex flex-wrap items-baseline flex-col sm:flex-row mr-5">
                            <span className="countdown__time mr-1 text-lg lg:text-4xl text-dark font-500 daysLeft"></span>
                            <p>1</p>
                            <span className="countdown__text capitalize text-base text-dark font-400 daysText"></span>
                        </div>
                        <div className="countdown__item flex flex-wrap items-baseline flex-col sm:flex-row mr-5">
                            <span className="countdown__time mr-1 text-lg lg:text-4xl text-dark font-500 hoursLeft"></span>
                            <span className="countdown__text capitalize text-base text-dark font-400 hoursText"></span>
                        </div>
                        <div className="countdown__item flex flex-wrap items-baseline flex-col sm:flex-row mr-5">
                            <span className="countdown__time mr-1 text-lg lg:text-4xl text-dark font-500 minsLeft"></span>
                            <span className="countdown__text capitalize text-base text-dark font-400 minsText"></span>
                        </div>
                        <div className="countdown__item flex flex-wrap items-baseline flex-col sm:flex-row">
                            <span className="countdown__time mr-1 text-lg lg:text-4xl text-dark font-500 secsLeft"></span>
                            <span className="countdown__text capitalize text-base text-dark font-400 secsText"></span>
                        </div>
                    </div>
                </div>


            </div>
        </div> */}
        <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12">
                <section className="relative">
                    <div className="product-carousel overflow-hidden p-4">
                        <div className="swiper-container">
                            <div className="swiper-wrapper">
  
                                <div className="swiper-slide">
                                    <div className="border border-solid border-gray-300 transition-all hover:shadow-product group">
                                        <div className="relative overflow-hidden">
                                            <span className="font-bold uppercase text-sm text-black inline-block py-1 px-2 leading-none absolute top-3 right-3">Sale</span>
                                            <span className="font-bold uppercase text-sm text-black inline-block py-1 px-2 leading-none absolute top-10 right-3">-11%</span>
                                            <img className="w-full h-full" src="assets/images/products/lg/product3.webp" alt="product image" loading="lazy" width="432" height="480" />

                                            <div className="absolute left-2/4 top-2/4 transform -translate-x-2/4 -translate-y-2/4 z-10">
                                                <ul className="flex items-center justify-center bg-white shadow rounded-full h-0 transition-all group-hover:h-16 duration-500 overflow-hidden">
                                                    <li className="py-4 pl-7 md:py-5 md:pl-8">
                                                        <a href="#modal-cart" className="text-dark flex items-center justify-center text-md hover:text-orange modal-toggle" data-tippy-content="Quick View" aria-label="Quick View">
                                                            <i className="icon-magnifier"></i>
                                                        </a>
                                                    </li>
                                                    <li className="py-4 pl-7 md:py-5 md:pl-8">
                                                        <a href="whishlist.html" className="text-dark flex items-center justify-center text-md hover:text-orange" data-tippy-content="Add to wishlist" aria-label="wishlist">
                                                            <i className="icon-heart"></i>
                                                        </a>
                                                    </li>
                                                    <li className="py-4 pl-7 md:py-5 md:pl-8">
                                                        <a href="compare.html" className="text-dark flex items-center justify-center text-md hover:text-orange" data-tippy-content="Compare" aria-label="Compare">
                                                            <i className="icon-refresh"></i>
                                                        </a>
                                                    </li>
                                                    <li className="py-4 pl-7 pr-7 md:py-5 md:pl-8 md:pr-8">
                                                        <a href="#modal-addto-cart" className="text-dark flex items-center justify-center text-md hover:text-orange modal-toggle" aria-label="add to cart" data-tippy-content="Add to cart">
                                                            <i className="icon-bag"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>

      

                                            <div className="p-2 bg-gray-200 shadow absolute left-2 right-2 -bottom-40 group-hover:bottom-2 z-20 transition-all duration-500 ease-linear">
                                                <ul className="flex flex-wrap items-center justify-center mb-3">
                                                    <li className="mx-1 leading-none"><button className="text-sm">sm</button></li>
                                                    <li className="mx-1 leading-none"><button className="text-sm">l</button></li>
                                                    <li className="mx-1 leading-none"><button className="text-sm">m</button></li>
                                                    <li className="mx-1 leading-none"><button className="text-sm">xl</button></li>
                                                    <li className="mx-1 leading-none"><button className="text-sm">xxl</button></li>
                                                </ul>
                                                <ul className="flex flex-wrap items-center justify-center">
                                                    <li className="mx-1 leading-none"><button className="w-4 h-4 rounded-full bg-orange" aria-label="colors"></button></li>
                                                    <li className="mx-1 leading-none"><button className="w-4 h-4 rounded-full bg-primary" aria-label="variants"></button></li>
                                                    <li className="mx-1 leading-none"><button className="w-4 h-4 rounded-full bg-indigo-600" aria-label="variants"></button></li>
                                                    <li className="mx-1 leading-none"><button className="w-4 h-4 rounded-full bg-dark" aria-label="variants"></button></li>
                                                </ul>
                                            </div>

                                        </div>

                                        <div className="py-5 px-4">
                                            <ul className="mb-3 text-sm capitalize">
                                                <li className="flex flex-wrap items-center justify-between"><span><span>Sold: </span><span className="text-orange">10</span></span> <span><span>Available: </span> <span className="text-orange">12</span> </span></li>
                                            </ul>
                                            <div className="h-2 bg-gray-600 rounded">
                                                {/* <div className="h-full bg-orange rounded-l" aria-label="progress bar" role="progressbar" style="width:83%" aria-valuenow="83" aria-valuemin="0" aria-valuemax="100"></div> */}
                                            </div>
                                            <h3 className="mt-4"><a className="block text-base hover:text-orange transition-all" href="single-product.html">Airpod product ides</a></h3>
                                            <h4 className="font-bold text-md leading-none text-orange mt-3"><del className="font-normal text-sm mr-1 inline-block">$110.00</del>$130.00</h4>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>


                    </div>
                </section>


            </div>
        </div>

    </div>

)
}

export default ProductsSection;