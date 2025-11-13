import React, { use } from "react";
import Navber from "../compunents/Navber";
import Footer from "../compunents/Footer";
import { Outlet } from "react-router";
import { AuthContext } from "../context/AuthContext";
import Loading from "../compunents/Loading";

const Root = () => {
    const {loading} = use(AuthContext)
  return (
    <div>
      <Navber></Navber>
      <main className="min-h-[calc(100vh-285px)] w-7xl mx-auto bg-[#d2d2d220]">
       { loading
       ?
       <Loading></Loading>
       :
       <Outlet></Outlet>}
      </main>
      <Footer></Footer>
    </div>
  );
};

export default Root;
