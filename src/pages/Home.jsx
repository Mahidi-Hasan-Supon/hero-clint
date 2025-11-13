import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import HeroCard from "../compunents/HeroCard";
import HeroSlider from "../compunents/HeroSlider";
import ChoseUs from "../compunents/ChoseUs";
import Testimonals from "../compunents/Testimonals";

const Home = () => {
  const hero = useLoaderData();
  const heros = hero.result
  const [topRated, setTopRated] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/top-rated")
      .then((res) => res.json())
      .then((data) => setTopRated(data))
      .catch((err) => console.error("Top rated fetch error:", err));
  }, []);
  // console.log(heros);
  return (
    <div className="w-7xl mx-auto">
      {/* hero sider section*/}
      <div className="py-10">
        <HeroSlider></HeroSlider>
      </div>
         
      {/* 6 card */}
    <div className="py-10">
      <h1 className="md:text-5xl text-2xl font-bold md:text-center md:my-20 my-5">Home <span className="text-orange-400">Repair</span> Services</h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 ">
          
         {
            heros.map(hero=><HeroCard key={hero._id} hero={hero}></HeroCard>)
         } 

      </div>
    </div>


      {/* Top Rated Services Section */}
      <div className="py-20">
        <h1 className="md:text-4xl text-2xl font-bold text-center mb-10">
           Top Rated <span className="text-orange-400">Services</span>
        </h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
          {topRated.length > 0 ? (
            topRated.map((service) => (
              <HeroCard key={service._id} hero={service}></HeroCard>
            ))
          ) : (
            <p className="text-center text-gray-500 font-semibold col-span-3">
              No top rated services yet.
            </p>
          )}
        </div>
      </div>


      {/* why chose it */}
      <div className="space-y-8 py-10">
          <span className="text-primary font-semibold text-sm">-Our Services</span>
          <h1 className="md:text-3xl text-2xl font-bold opacity-80">What We Do For Our <span className="text-orange-400">Customers</span></h1>
          <span>
            <ChoseUs></ChoseUs>
          </span>
      </div>

      {/* 2nd section */}
      <div className="py-20">
         <Testimonals></Testimonals>
      </div>
    </div>
  );
};

export default Home;
