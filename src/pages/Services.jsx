import React, { useState } from "react";
import { useLoaderData } from "react-router";
import HeroCard from "../compunents/HeroCard";

const Services = () => {

  const [minPrice, setMinPrice] = useState("")
  const [maxPrice, setMaxPrice] = useState("")
  const data = useLoaderData()
  // const services =data.result
  const [services, setServices] = useState(data || []);
  console.log(data);
  console.log(services);
  const handleFilter=(e)=>{ 
    e.preventDefault()
       fetch(`http://localhost:3000/services?minPrice=${minPrice}&maxPrice=${maxPrice}`)
         .then(res => res.json())
      .then(data => setServices(data))
      .catch(err => console.error(err));
  }
  return  <div className="w-7xl mx-auto my-20">
    <h1 className="text-5xl font-bold text-center my-10">Our All Repair Services</h1>


        {/* 🔹 Filter Section */}
      <div className="flex justify-center gap-3 mb-8">
        <input
          type="number"
          placeholder="Min Price"
         defaultValue={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
        
          className="input input-bordered w-40"
        />
        <input
          type="number"
          placeholder="Max Price"
          defaultValue={maxPrice}
             onChange={(e) => setMaxPrice(e.target.value)}
          className="input input-bordered w-40"
        />
        <button onClick={handleFilter} className="btn btn-primary bg-[#00aeef] border-none">
          Filter
        </button>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 ">
          
         { services.length === 0? 
          (
          <p className="text-center text-gray-500 font-semibold col-span-3">
            No Services Found
          </p>
        )
         :
            services.map(hero=><HeroCard key={hero._id} hero={hero}></HeroCard>)
         } 

      </div>
  </div>;
};

export default Services;
