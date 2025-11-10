import React from "react";
import { useLoaderData } from "react-router";
import HeroCard from "../compunents/HeroCard";
import HeroSlider from "../compunents/HeroSlider";
import ChoseUs from "../compunents/ChoseUs";

const Home = () => {
  const hero = useLoaderData();
  const heros = hero.result
  // console.log(heros);
  return (
    <div className="w-7xl mx-auto">
      {/* hero sider section*/}
      <div className="my-10">
        <HeroSlider></HeroSlider>
      </div>
         
      {/* 6 card */}
    <div className="py-10">
      <h1 className="md:text-5xl text-2xl font-bold md:text-center md:my-20 my-5">Home Repair Services</h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 ">
          
         {
            heros.map(hero=><HeroCard key={hero._id} hero={hero}></HeroCard>)
         } 

      </div>
    </div>


      {/* why chose it */}
      <div>
          <h1 className="text-primary font-semibold text-sm">-Our Services</h1>
          <span>
            <ChoseUs></ChoseUs>
          </span>
      </div>

      {/* 2nd section */}
      <div>
        
      </div>
    </div>
  );
};

export default Home;
