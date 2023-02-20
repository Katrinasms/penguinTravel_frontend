import React, { useEffect, useState } from "react";
import {AiOutlineMenu} from "react-icons/ai";
import {BsGrid3X2} from "react-icons/bs";
import ShopGridCard from '../components/shopGridCard'
import {listProduct} from '../redux/Actions/productAction'
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/LoadingError/Error";
import Loading from "../components/LoadingError/Loading";
import { Link, useNavigate,useLocation } from "react-router-dom";
// import { Link } from "react-router-dom";

// import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

import {FadeIn,FadeUp,ScaleIn} from "../service/scrollAnimate"
// import "./../components/strip.css"


const ShopPage = () => {
    // window.scrollTo(0, 0);
    let navigate = useNavigate();

    const productList = useSelector((state) => state.productList);
    const { loading, error, products, page, pages } = productList;

    const [value, setValue] = React.useState(0);
    const dispatch = useDispatch();

    // const setFilter = (place) => {
    //     const filt_data = products?.products.filter((product) => product.categories == place)
    //     setProductData(filt_data);
    // }

    useEffect(()=>{
        //get product axios

        dispatch(listProduct("falkland"));
        // setFilter("falkland");
    }, [dispatch]);

    const handleChange = (event, newValue) => {
    event.preventDefault();
      setValue(newValue);
      if (newValue == 0){
        dispatch(listProduct("falkland"));
      }else if (newValue == 1){
        dispatch(listProduct("southgeo"));
      }else {
        dispatch(listProduct("antarctica"));
      }
      console.log(newValue);
    };

    
    const navigateTo = (path) => {
        navigate(path);
        console.log(path);
    }


      



return(
        <>
        <div className=" m-0 ">
                {/* <div className="m-0 h-20 bg-slate-500"> */}
                {/* </div> */}
                <div className="hero-shop-image">
                    <div className=" slider-content hero-shop-text font-semibold rounded">
                        
                        {/* <h2 className="text-2xl font-normal text-blue-100 block mb-2 capitalize">World</h2> */}
                        <hr className="" />
                        <h1 className="text-4xl font-extrabold">Photos Shops</h1>
                        <p>It's an island with different penguins</p>
                        {/* <div className="inline-block mt-2 lg:mt-4">
                            <button className="explore-btn  hover:bg-white hover:border-white hover:text-gray-600" href="/">Explore More</button>
                        </div> */}
                    </div>
                </div>
                {/* <button className="m-10 p-5 rounded text-gray-100 bg-sky-200 hover:bg-sky-400" onClick={()=> buttonHandler()}> Change image data</button> */}
                {/* <div className=" pt-5 text-2xl font-normal text-blue-100 block mb-5 capitalize"> Location of Photos</div> */}
                <FadeUp>
                    <Box className="flex width-100 justify-center md:py-10">
                        <Tabs
                        value={value}
                        onChange={handleChange}
                        variant="scrollable"
                        scrollButtons="auto"
                        aria-label="auto tabs example"
                        // centered
                        >
                        <Tab label="Falkland Island" style={{maxWdith:"50%"}}/>
                        <Tab label="South Georgia" style={{maxWdith:"50%"}} />
                        <Tab label="Antarctica" style={{maxWdith:"50%"}} />
                        </Tabs>
                    </Box>
                </FadeUp>

                <div className="pb-24 md:px-10">
                    <div className="container">
                        <div className="flex flex-wrap flex-col lg:flex-row">
                            <div id="shoptab" className="flex-1">
                                <div className="hidden flex flex-wrap justify-between items-center px-4">
                                    <div className="flex flex-wrap">
                                       
                                        <div className="shop-select flex mr-12">
                                            <label htmlFor="SortBy">Sort by :</label>
                                            <select id="SortBy" className="px-2 bg-transparent">
                                                <option value="manual">Featured</option>
                                                <option value="best-selling">Best Selling</option>
                                                <option value="title-ascending">Alphabetically, A-Z</option>
                                                <option value="title-descending">Alphabetically, Z-A</option>
                                                <option value="price-ascending">Price, low to high</option>
                                                <option value="price-descending">Price, high to low</option>
                                                <option value="created-descending">Date, new to old</option>
                                                <option value="created-ascending">Date, old to new</option>
                                            </select>
                                        </div>
                                        <p className="my-2 sm:my-0">Showing 1 - 9 of 9 result</p>
                                    </div>
                                    <div>
                                        <span>Show :</span>
                                        <select className="bg-transparent">
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                        </select>
                                    </div>
                                    <div>
                                        <ul className="shop-tab-nav flex flex-wrap">
                                            <li className="active"><a href="#grid" className="text-base hover:text-orange inline-block py-2 px-2"><BsGrid3X2 /></a></li>
                                            <li><a href="#list" className="text-base hover:text-orange inline-block py-2 px-2 ml-5"><AiOutlineMenu /></a></li>
                                        </ul>
                                    </div>
                                </div>

                                <div>
                                    <div id="grid" className=" shop-tab-content active">
                                        {error && <Message variant="alert-danger">{error}</Message>}
                                            {loading && <Loading />}
                                            {/* <Loading /> */}
                                        <div className="flex flex-wrap">
                                            
                                                {products?.products?.map((product,i)=>(
                                                    // <Link to={`/shops/${product._id}`}>
                                                    <div className="transition-all w-full md:w-1/2 lg:w-1/3 px-4 py-4 slider-up-content" key={i}   onClick={()=>navigateTo(`/shops/${product._id}`)}>
                                                    <FadeUp>
                                                        
                                                        <ShopGridCard image={product.image} title={product.title} lazy={true} price={product.price}/>
                                                        
                                                        {console.log(product)}
                                                    </FadeUp>
                                                    </div>
                                                    // </Link>
                                                ))}
                    
                                        
                                        </div>
                                        
                                    
                                    </div>
                                </div>

                                {/* <div className="mt-12">
                                    <ul className="pagination flex flex-wrap items-center justify-center">
                                        <li className="mx-2">
                                            <a className="flex flex-wrap items-center justify-center  w-11 h-11 bg-white shadow text-orange leading-none transition-all hover:bg-orange hover:text-white" href="#">
                                                <i className="icon-arrow-left"></i>
                                            </a>
                                        </li>

                                        <li className="mx-2">
                                            <a className="flex flex-wrap items-center justify-center  w-11 h-11 bg-white shadow text-orange leading-none transition-all hover:bg-orange hover:text-white active" href="#">1</a>
                                        </li>
                                        <li className="mx-2">
                                            <a className="flex flex-wrap items-center justify-center  w-11 h-11 bg-white shadow text-orange leading-none transition-all hover:bg-orange hover:text-white" href="#">2</a>
                                        </li>
                                        <li className="mx-2">
                                            <a className="flex flex-wrap items-center justify-center  w-11 h-11 bg-white shadow text-orange leading-none transition-all hover:bg-orange hover:text-white" href="#">3</a>
                                        </li>
                                        <li className="mx-2">
                                            <a className="flex flex-wrap items-center justify-center  w-11 h-11 bg-white shadow text-orange leading-none transition-all hover:bg-orange hover:text-white" href="#">
                                                <i className="icon-arrow-right"></i>
                                            </a>
                                        </li>
                                    </ul>


                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>





            </div>

        </>
    )
    
    
    }
    
    export default ShopPage