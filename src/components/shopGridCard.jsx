import {SlMagnifier, SlRefresh, SlBag} from "react-icons/sl"
import {BsSuitHeart} from "react-icons/bs"
import {HiOutlineCursorClick} from "react-icons/hi"
import {BsCoin} from "react-icons/bs";
// import {FadeIn,FadeUp,ScaleIn} from "../service/scrollAnimate"

const ShopGridCard = ({ title,image, lazy, price})=>{
    return (
        // <div className="flex flex-wrap -my-4 -mx-4">
        
            // <div className="w-full md:w-1/2 lg:w-1/3 px-4 py-4">
                <div className="border border-solid border-gray-300 transition-all hover:drop-shadow-lg group relative">
                    <div className="relative overflow-hidden">
                        <span className="font-medium uppercase text-sm text-black inline-block py-1 px-2 leading-none absolute top-3 right-3">SALE</span>
                        <span className="font-medium uppercase text-sm text-black inline-block py-1 px-2 leading-none absolute top-10 right-3">-50%</span>
                        
                        {lazy?
                            <img className="w-full h-full" src={image} alt="product image" loading="lazy" width="432" height="480" />:
                            <img className="w-full h-full" src={image} alt="product image"  width="432" height="480" />


                        }
                        {/* loading="lazy" */}
                        {/* <!-- actions start --> */}

                        <div className="absolute left-2/4 top-2/4 transform -translate-x-2/4 -translate-y-2/4 z-10">
                            <ul className="flex items-center justify-center bg-white shadow rounded-full h-0 transition-all group-hover:h-14 duration-500 overflow-hidden">
                                {/* <li className="py-4 pl-7 md:py-5 md:pl-8">
                                    <a href="#modal-cart" className="text-dark flex items-center justify-center text-md hover:text-orange modal-toggle" aria-label="quick view" data-tippy-content="Quick View">
                                        <SlMagnifier />
                                    </a>
                                </li>
                                <li className="py-4 pl-7 md:py-5 md:pl-8">
                                    <a href="whishlist.html" className="text-dark flex items-center justify-center text-md hover:text-orange" aria-label="whishlist" data-tippy-content="Add to wishlist">
                                     <BsSuitHeart />
                                    </a>
                                </li>
                                <li className="py-4 pl-7 md:py-5 md:pl-8">
                                    <a href="compare.html" className="text-dark flex items-center justify-center text-md hover:text-orange" aria-label="compare" data-tippy-content="Compare">
                                        <SlRefresh />
                                    </a>
                                </li>
                                <li className="py-4 pl-7 pr-7 md:py-5 md:pl-8 md:pr-8">
                                    <a href="#modal-addto-cart" className="text-dark flex items-center justify-center text-md hover:text-orange modal-toggle" aria-label="quick view" data-tippy-content="Add to cart">
                                        <HiOutlineCursorClick />
                                    </a>
                                </li> */}
                                <li className="py-4 pl-7 md:py-5 md:pl-8">
                                    <p className="text-slate-600">Click me</p>
                                </li>
                                <li className="py-4 pl-1 pr-7 md:py-3 md:pl-1 md:pr-8 text-slate-600">
                                     <HiOutlineCursorClick />
                                </li>
                                
                                
                            </ul>
                           
                        </div>

                        {/* <!-- actions end --> */}

                        {/* <!-- variants start --> */}

                        {/* <div className="p-2 bg-gray-200 shadow absolute left-2 right-2 -bottom-40 group-hover:bottom-2 z-20 transition-all duration-500 ease-linear">
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
                        </div> */}

                        {/* <!-- variants end --> */}
                    </div>

                    <div className="py-2 px-1">
                        <h4><a className="block text-base hover:text-orange transition-all" href="#">{title}</a></h4>
                        <h5 className="font-bold text-md leading-none text-orange mt-3"> <del className="font-normal text-sm mr-1 inline-block"><BsCoin className="inline-block"/> {price}</del><BsCoin className=" pl-1 inline"/> {price/2}</h5>
                        {/* <del className="font-normal text-sm mr-1 inline-block"><BsCoin className="inline-block"/> {price}</del> */}
                    </div>
                </div>

            // </div>
            
        // </div>
    )
}

export default ShopGridCard;