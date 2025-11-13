import React, { useState } from "react";
import { useLoaderData } from "react-router";
import HeroCard from "../compunents/HeroCard";

const Services = () => {
  const data = useLoaderData();
  // const services =data.result
  const [services, setServices] = useState(data || []);
  const [sort, setSort] = useState("");
  console.log(data);
  console.log(services);
  const handleSort = (order) => {
    setSort(order);
    fetch(`http://localhost:3000/services?sort=${order}`)
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => console.error(err));
  };
  return (
    <div className="w-7xl mx-auto py-20">
      <h1 className="text-5xl font-bold text-center my-10">
        Our All Repair <span className="text-blue-600">Services</span>
      </h1>

      <div className="flex justify-center mb-10">
        <select
          className="select select-bordered w-44"
          value={sort}
          onChange={(e) => handleSort(e.target.value)}
        >
          <option value="">Sort by Price</option>
          <option value="asc">Low to High</option>
          <option value="desc">High to Low</option>
        </select>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 ">
        {services.length === 0 ? (
          <p className="text-center text-gray-500 font-semibold col-span-3">
            No Services Found
          </p>
        ) : (
          services.map((hero) => (
            <HeroCard key={hero._id} hero={hero}></HeroCard>
          ))
        )}
      </div>
    </div>
  );
};

export default Services;
