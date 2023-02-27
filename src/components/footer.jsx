import {CiFacebook,CiTwitter,CiInstagram,CiYoutube} from "react-icons/ci";
// import {TfiDribbble} from "react-icons/Tfi"

const Footer = ()=>{
    return (
        <footer>
            <div className="news-letter-section bg-gray-100 pt-12 pb-12">
                <div className="container">
                    <div className="max-w-[600px] mx-auto">
                        <div className="text-center">
                            <a href="#" className="inline-block mb-11">
                              <span className="logo text-2xl  font-extrabold">Penguin Travel</span>
                            </a>
    
                            <p className="mb-10">
                                Feel free to follow us to get the updated information.
                            </p>
    
                            <form id="mc-form" className="relative text-center md:max-w-xl mx-auto mb-10">
                                <input id="mc-email" type="email" name="email" placeholder="email@example.com" className="border-2 border-solid  w-full h-14 sm:h-16 rounded-full bg-transparent placeholder-primary placeholder-opacity-50 text-sm sm:text-base focus:outline-none py-1 pl-8 pr-14 sm:pr-36" />
                                <button id="mc-submit" type="submit" 
                                className="bg-gray-600 transition-all hover:bg-blue-300 hover:text-white
                                  text-white capitalize font-medium text-sm 
                                  mt-1 px-10  py-3   
                                 lg:text-md  mt-sm-0 leading-none w-full sm:w-auto sm:absolute sm:top-0 sm:right-0 sm:h-full  sm:py-1 sm:px-3 sm:rounded-l-none rounded-r-full  rounded-l-full">Subscribe</button>
                            </form>

                            {/*   */}

                            <div className="mailchimp-alerts text-centre">
                                <div className="mailchimp-submitting"></div>
                                <div className="mailchimp-success text-green-400"></div>
                                <div className="mailchimp-error text-red-600"></div>
                            </div>
                     
                        </div>
                        <div className="flex flex-wrap items-center justify-center">
                            <a href="#" aria-label="social links" className="text-2xl text-dark hover:text-blue-300 mx-3 leading-none transition"><CiFacebook /></a>
                            <a href="#" aria-label="social links" className="text-2xl text-dark hover:text-blue-300 mx-3 leading-none transition"><CiTwitter /></a>
                            <a href="#" aria-label="social links" className="text-2xl text-dark hover:text-blue-300 mx-3 leading-none transition"><CiInstagram /></a>
                            <a href="#" aria-label="social links" className="text-2xl text-dark hover:text-blue-300 mx-3 leading-none transition"><CiYoutube /></a>
                            {/* <a href="#" aria-label="social links" className="text-lg text-dark hover:text-orange mx-3 leading-none transition"><TfiDribbble /></a> */}
                        </div>
    
                    </div>
                </div>
            </div>
     
            <div className="footer-bottom-section py-2 bg-gray-500">
                <div className="container">
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="flex order-last md:order-first flex-wrap items-center justify-center md:justify-start">
                            <p className="text-white flex flex-wrap items-center text-sm lg:text-base">&copy; 2023 PenguinTravel. Made <i className="icon-heart mx-2 text-orange"></i> by<a href="#" className="ml-1 transition hover:text-orange">Katrina</a>.</p>
                        </div>
    
                        <div className="flex flex-wrap items-center justify-center md:justify-end">
                            {/* <a href="#">
                                <img className="w-full h-full" src="assets/images/logo/payment.webp" alt="payment logo" loading="lazy" width="286" height="23" />
                            </a> */}
                        </div>
                    </div>
    
                </div>
            </div>
    
        </footer>
    
    )
}


export default Footer;