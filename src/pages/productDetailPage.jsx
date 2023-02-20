import React, { useEffect, useState } from "react";
import {CiFacebook,CiTwitter,CiInstagram,CiYoutube} from "react-icons/ci";
// import AiProductSwiper from "../components/aiProductSwiper";
// import img1 from "../assets/cover3.JPG" 
import {listProductDetails} from '../redux/Actions/productAction'
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from 'react-router-dom';
import history from "history/browser";
import Loading from "./../components/LoadingError/Loading"
import Message from "./../components/LoadingError/Error"
import JSZip from 'jszip';
import {BsCoin} from "react-icons/bs";

// import axios from "axios";
// import fs from 'fs';
// // import https from 'https';
// import Path from 'path';


const ProductDetail = ()=>{
    window.scrollTo(0, 0);
    let { id } = useParams();
    const dispatch = useDispatch();
    let navigate = useNavigate();
    const [qty, setQty] = useState(1);

    const productDetails = useSelector((state) => state.productDetails);
    const { loading, error, product } = productDetails;

    const decreaseQty = () => {
        if (qty <= 0) {
          setQty(0);
        } else {
          setQty(qty - 1);
        }
      };
    
      const increaseQty = () => {
        if (qty >= 10) {
          setQty(10);
        } else {
          setQty(qty + 1);
        }
      };

      const onChange = (e) => {
        const value = parseInt(e.target.value);
        if (value >= 0 && value <= 100) {
          setQty(value);
        }
      };

      const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch(product.image).then(response => {
          console.log(response)
            response.blob().then(async blob => {
              console.log(blob)
              const zip = new JSZip()
              zip.file('hi.jpg',blob)
              const zipBlob = await zip.generateAsync({type:'blob'});

              const fileURL = window.URL.createObjectURL(zipBlob);
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'download.zip';
                alink.click();

                // Creating new object of PDF file
                // const fileURL = window.URL.createObjectURL(blob);
                // // Setting various property values
                // let alink = document.createElement('a');
                // alink.href = fileURL;
                // alink.download = 'download.jpg';
                // alink.click();
            })
        })
    }

    // https://res.cloudinary.com/dij3ckfrq/image/upload/v1676261523/penguin_travel/southgeo/southgeo_18_iagpw6.jpg

    
      

    const AddToCartHandle = (e) => {
        e.preventDefault();
        navigate(`/cart/${id}?qty=${qty}`);
        //download image
      //   https.get("https://res.cloudinary.com/dij3ckfrq/image/upload/v1676261523/penguin_travel/southgeo/southgeo_18_iagpw6.jpg",(res) => {
      //     // Image will be stored at this path
      //     const path = `${__dirname}/files/img.jpeg`; 
      //     const filePath = fs.createWriteStream(path);
      //     res.pipe(filePath);
      //     filePath.on('finish',() => {
      //         filePath.close();
      //         console.log('Download Completed'); 
      //     })
      // })
      // downloadImage()

      };

    useEffect(()=>{
        dispatch(listProductDetails(id));

    }, [dispatch]);


    // listProductDetails

    return (<>
        <div className="h-20 bg-slate-400">
        </div>
        <div className="py-10 md:py-24">

        <div className="container ">
        {loading ? (
          <Loading />
        ) : error ? (
          <Message variant="alert-danger">{error}</Message>
        ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 verticalAlighn">
                <div>
                    <div className="relative overflow-hidden">
                    <img className="rounded-lg" src={product?.image} alt="product image" />
                        <span className="font-semibold uppercase text-sm text-white inline-block py-1 px-2 leading-none absolute top-3  z-10 right-3 bg-orange">Sale</span>
                    </div>
                </div>
                {console.log(product)
                // {product?.image}
                }
                <div className=" text-center">
                        <h3 className="font-medium text-xl capitalize">{product?.title}</h3>
                        <h5 className="font-bold text-md leading-none text-orange my-3"><del className="font-normal text-sm mr-1 inline-block"><BsCoin className="inline-block"/> {product?.price}</del><BsCoin className=" pl-1 inline"/> {product?.price/2}</h5>
                        <p className="mb-8">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>

                        <div>

                        <div className="mb-8">
                            <div className="flex flex-wrap items-center mt-8 addToCart ">
                                {/* <div className="flex count border border-solid border-gray-300 p-2 h-11">
                                    <button className="decrement flex-auto w-5 leading-none" aria-label="button" onClick={decreaseQty}>-</button>
                                    <input onChange={onChange} value={qty} type="number" min="1" max="100" step="1" className="quantity__input flex-auto w-8 text-center focus:outline-none input-appearance-none" />
                                    <button className="increment flex-auto w-5 leading-none" aria-label="button" onClick={increaseQty}>+</button>
                                </div> */}
                                <div className=" ml-2 sm:ml-8">
                                    <button className="bg-black leading-none py-4 px-5 md:px-8 font-normal text-sm h-11 text-white transition-all hover:bg-orange testbutton" onClick={AddToCartHandle}>Add to Cart</button>
                                </div>
                                {/* <a href="#" className="text-md ml-8"><i className="icon-heart"></i></a>
                                <a href="#" className="text-md ml-8"><i className="icon-refresh"></i></a> */}
                            </div>
                        </div>

                        <div className="flex flex-wrap items-center justify-start mb-8 addToCart">
                            <a href="#" className="text-md text-facebook hover:text-dark mr-10 leading-none transition relative before:absolute before:top-1/2  before:-translate-y-1/2 before:left-7 before:empty before:bg-gray-900 before:w-4 before:h-1px"><CiFacebook /></a>
                            <a href="#" className="text-md text-twitter hover:text-dark mr-10 leading-none transition relative before:absolute before:top-1/2  before:-translate-y-1/2 before:left-7 before:empty before:bg-gray-900 before:w-4 before:h-1px"><CiTwitter /></a>
                            <a href="#" className="text-md text-dribbble hover:text-dark mr-10 leading-none transition relative before:absolute before:top-1/2  before:-translate-y-1/2 before:left-7 before:empty before:bg-gray-900 before:w-4 before:h-1px"><CiInstagram /></a>
                            <a href="#" className="text-md text-pinterest hover:text-dark leading-none transition"><CiYoutube /></a>
                            <div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>)}
        </div>
        {/* <AiProductSwiper /> */}
    </div>
    </>
    )
}

export default ProductDetail;