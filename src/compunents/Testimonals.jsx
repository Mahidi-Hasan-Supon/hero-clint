import React from "react";

const Testimonals = () => {
  return (
    <div className="md:flex gap-8 md:items-center md:w-4xl mx-auto ">
      <div className="space-y-4">
        <h1 className="text-primary">-TESTIMONIALS </h1>
        <h1 className="text-3xl opacity-80 font-bold">
          {" "}
          What Our <span className="text-orange-400">Customers</span> <br /> Say About Our Service
        </h1>
        <h1></h1>
        <p className="font-semibold">
          {" "}
          We provide the hightest- quality service <br /> to our customers.
        </p>
      </div>
      <div>
        <div className="card w-[400px] bg-base-100 hover:shadow-2xl card-xs shadow-sm items-center">
          <div className="text-center gap-5 py-5">
            <img
              className="w-[50px] h-[50px] ml-45 rounded-4xl"
              src="https://img.freepik.com/free-photo/front-view-man-with-helmet-crossed-arms_23-2148269265.jpg?semt=ais_hybrid&w=740&q=80"
              alt=""
            />

            <h1 className="font-semibold opacity-85">Martin taylor (CEO of Company)</h1>
            <p className="opacity-60">
              I must explain to you how all this mistaken idea of denouncing
              pleasure and praising pain was born and I will give you a complete
              account of the system, and expound the actual teachings.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonals;
