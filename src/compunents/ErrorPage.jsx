import React from "react";
import errorImg from "../assets/error.jpg"
import { Link } from "react-router";
import Navber from "./Navber";
import Footer from "./Footer";
import { FaArrowRight } from "react-icons/fa";
const ErrorPage = () => {
  return (
    <>
    <Navber></Navber>
    <div className="flex flex-col justify-center items-center text-center space-y-10">
       <div className="relative">
         <img src={errorImg} alt="" className="h-[600px] w-[800px]" />
       
         
       </div>
       <div className="absolute mt-96">
         <Link to='/' className="text-xl text-white font-bold btn opacity-80 bg-amber-400"><FaArrowRight></FaArrowRight> Go Home</Link>
       </div>
     
     
    </div>
    <Footer></Footer>
    </>
  );
};

export default ErrorPage;
