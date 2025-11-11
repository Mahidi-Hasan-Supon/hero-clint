import React from "react";
import { useLoaderData } from "react-router";

const ServicesDetails = () => {
  const details = useLoaderData();
  const detail = details.result;
  console.log(detail);
  return (
    <div className=" w-7xl mx-auto py-50 border border-amber-200">
      <div className="flex gap-20">
        <div className="">
          <img
            src={detail.imageURL}
            className="h-full w-[600px] rounded-lg shadow-2xl"
          />
         
          </div>
          <div className="space-y-4">
            <h1 className="text-5xl font-bold opacity-85">{detail.category}</h1>
              <p className="text-xl font-semibold mt-5 opacity-80">{detail.description}</p>
              <div className="text-[#00aeef] text-xl font-semibold">ProviderName: {detail.providerName}</div>
              <div className="text-[#00aeef] text-xl font-semibold">serviceName: {detail.serviceName}</div>
              <div className="border-t border-gray-200"></div>
            <div className="flex gap-4">
              <button className="btn btn-primary text-xl font-bold">price: $ {detail.price}</button>
             
            <button className="btn btn-primary text-xl font-bold">Book Now</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesDetails;
