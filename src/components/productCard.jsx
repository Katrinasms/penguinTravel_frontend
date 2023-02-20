import {SlMagnifier, SlRefresh, SlBag} from "react-icons/sl"
import {BsSuitHeart} from "react-icons/bs"
import {HiOutlineCursorClick} from "react-icons/hi"



const ProductCard = ({image, title}) => {
   return (

    <div className="border border-solid border-gray-200 transition-all hover:drop-shadow-lg group">
    <div className="relative overflow-hidden">
        <span className="font-bold uppercase text-xl text-black inline-block py-1 px-2 leading-none absolute top-3 right-3">Sale</span>
        <span className="font-bold uppercase text-sm text-black inline-block py-1 px-2 leading-none absolute top-10 right-3">-11%</span>
        <img className="w-full h-full" src={image} alt="product image" height="480" />

        <div className="absolute top-1/2 left-1/2  -translate-y-1/2  -translate-x-1/2 transform  z-10">
      
            <ul className="flex items-center justify-center bg-white shadow rounded-full h-0 transition-all group-hover:h-12 duration-500 overflow-hidden">
                <li className="py-4 pl-7 md:py-5 md:pl-8">
                    <a href="#modal-cart" className="text-dark flex items-center justify-center text-md hover:text-orange modal-toggle" data-tippy-content="Quick View" aria-label="Quick View">
                       <SlMagnifier />
                    </a>
                </li>
                <li className="py-4 pl-7 md:py-5 md:pl-8">
                    <a href="whishlist.html" className="text-dark flex items-center justify-center text-md hover:text-orange" data-tippy-content="Add to wishlist" aria-label="wishlist">
                        <BsSuitHeart />
                    </a>
                </li>
                <li className="py-4 pl-7 md:py-5 md:pl-8">
                    <a href="compare.html" className="text-dark flex items-center justify-center text-md hover:text-orange" data-tippy-content="Compare" aria-label="Compare">
                        <SlRefresh />
                    </a>
                </li>
                <li className="py-4 pl-7 pr-7 md:py-5 md:pl-8 md:pr-8">
                    <a href="#modal-addto-cart" className="text-dark flex items-center justify-center text-md hover:text-orange modal-toggle" aria-label="add to cart" data-tippy-content="Add to cart">
                        <HiOutlineCursorClick />
                    </a>
                </li>
             
            </ul>
        </div>
        <div className="p-2 bg-gray-200 opacity-80 shadow absolute left-2 right-2 -bottom-40 group-hover:bottom-2 z-20 transition-all duration-500 ease-linear">
            <ul className="flex flex-wrap items-center justify-center mb-3">
                <li className="mx-1 leading-none"><button className="text-sm capitalize">sm</button></li>
                <li className="mx-1 leading-none"><button className="text-sm capitalize">l</button></li>
                <li className="mx-1 leading-none"><button className="text-sm capitalize">m</button></li>
                <li className="mx-1 leading-none"><button className="text-sm capitalize">xl</button></li>
                <li className="mx-1 leading-none"><button className="text-sm capitalize">xxl</button></li>
            </ul>
            <ul className="flex flex-wrap items-center justify-center">
                <li className="mx-1 leading-none"><button className="w-4 h-4 rounded-full bg-orange-600" aria-label="colors"></button></li>
                <li className="mx-1 leading-none"><button className="w-4 h-4 rounded-full bg-amber-600" aria-label="variants"></button></li>
                <li className="mx-1 leading-none"><button className="w-4 h-4 rounded-full bg-indigo-600" aria-label="variants"></button></li>
                <li className="mx-1 leading-none"><button className="w-4 h-4 rounded-full bg-green-600" aria-label="variants"></button></li>
            </ul>
        </div>
    </div>

    <div className="py-5 px-4">
        <ul className="mb-3 text-sm capitalize">
            <li className="flex flex-wrap items-center justify-between"><span><span>Sold: </span><span className="text-orange">10</span></span> <span><span>Available: </span> <span className="text-orange">12</span> </span></li>
        </ul>
        <div className="border bg-gray-400 rounded">
            <div className="h-full bg-orange rounded-l" aria-label="progress bar" role="progressbar"  aria-valuenow="83" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
        
        <h3 className="mt-4"><a className="block text-base hover:text-orange transition-all" href="single-product.html">{title}</a></h3>
        <h4 className="font-bold text-md leading-none text-orange mt-3"><del className="font-normal text-sm mr-1 inline-block">$110.00</del>$130.00</h4>
    </div>
  </div>

   )
}

export default ProductCard;