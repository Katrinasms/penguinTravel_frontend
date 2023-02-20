import {IoLocationOutline} from "react-icons/io5";
import {BsEnvelopeOpen} from "react-icons/bs";
import {GiSmartphone} from "react-icons/gi";
import {FadeIn,FadeUp,ScaleIn} from "../service/scrollAnimate"
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { BsWhatsapp } from "react-icons/bs";


const ContactPage = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm("service_8tgkfsy", "template_2y5ja1r", form.current, "bS4yHoTStqn52dS9H")
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          emailjs.sendForm("service_8tgkfsy", "template_IOguzjq", form.current, "bS4yHoTStqn52dS9H")
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      };
    
    return(
        <>
             <div className=" m-0 ">
                <div className="hero-contact-image">
                    <div className=" slider-content hero-shop-text font-semibold rounded">
                        <hr className="" />
                        <h1 className="text-4xl font-extrabold ">Contact</h1>
                        <p >If you are here, we are here</p>
                    </div>
                </div>
            </div>
            <div className="bg-white py-24 ">
                <FadeUp>
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-4">
                        <div className="contact-info-area px-10">
                            <h2 className="font-semibold text-gray-700 text-4xl mb-14 capitalize text-[36px] sm:text-[36px] xl:text-[36px] ">Contact Us</h2>
                            <div className="flex flex-wrap items-center mb-8">
                                <div className="text-gray-700  text-4xl mr-5 "><IoLocationOutline /></div>
                                <p className="flex-1 pretty__text">Everywhere in the World</p>
                            </div>
                            <div className="flex flex-wrap items-center mb-8">
                                <div className="text-gray-700  text-4xl mr-5"><BsEnvelopeOpen /></div>
                                <a href="mailto:penguinstravelworld@gmail.com" className="flex-1 text-wrap text-sm">penguinstravel@gamil.com</a>
                            </div>
                            <div className="flex flex-wrap items-center">
                                <div className="text-gray-700  text-4xl mr-5"><BsWhatsapp /></div>
                                <a href="https://wa.me/85257436555" className="flex-1 pretty__text">+852 5743 6555</a>
                            </div>
                        </div>

                        <div className="p-10 lg:p-14 shadow-lg mt-14 lg:mt-0">
                            {/* <form id="contact-form" method="get" action="#"> */}
                            <form ref={form} onSubmit={sendEmail}>
                                <input className="border border-solid border-gray-300 w-full py-1 px-3 mb-3 placeholder-current text-dark h-12 focus:outline-none text-base" type="text" name="user_name" placeholder="Name" />
                                <input className="border border-solid border-gray-300 w-full py-1 px-3 mb-3 placeholder-current text-dark h-12 focus:outline-none text-base" type="email" placeholder="Email" name="user_email" />
                                <input className="border border-solid border-gray-300 w-full py-1 px-3 mb-3 placeholder-current text-dark h-12 focus:outline-none text-base" type="text" placeholder="Subject" name="subject" />
                                <textarea className="border border-solid border-gray-300 w-full py-2 px-3 mb-3 text-dark h-32 focus:outline-none text-base resize-none" placeholder="Message" name="message"></textarea>
                                <button className="w-full leading-none uppercase text-white text-sm bg-dark px-3 py-3 transition-all hover:bg-orange" type="submit" aria-label="button">Send Message</button>
                            </form>
                            <p className="form-messege"></p>
                        </div>
                    </div>
                </div>
                </FadeUp>

            </div>
            {/* <FadeUp>
                <div>
                    <iframe className="w-full h-96 md:h-500px" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3743278.227637299!2d-61.159056951307704!3d-2.371597134950372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91e8605342744385%3A0x3d3c6dc1394a7fc7!2sAmazon%20Rainforest!5e0!3m2!1sen!2sbd!4v1638433670177!5m2!1sen!2sbd" allowFullScreen="" loading="lazy"></iframe>
                </div>
            </FadeUp> */}
        </>
    )}
export default ContactPage