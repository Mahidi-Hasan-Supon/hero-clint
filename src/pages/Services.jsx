import React from "react";
import { useLoaderData } from "react-router";
import HeroCard from "../compunents/HeroCard";

const Services = () => {
  const data = useLoaderData()
  const services =data.result
  console.log(services);
  return  <div className="w-7xl mx-auto my-20">
    <h1 className="text-5xl font-bold text-center my-10">Our All Repair Services</h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 ">
          
         {
            services.map(hero=><HeroCard key={hero._id} hero={hero}></HeroCard>)
         } 

      </div>
  </div>;
};

export default Services;
