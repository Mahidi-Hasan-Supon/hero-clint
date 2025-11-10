import React from "react";
import { useLoaderData } from "react-router";
import HeroCard from "../compunents/HeroCard";
import HeroSlider from "../compunents/HeroSlider";

const Home = () => {
  const hero = useLoaderData();
  const heros = hero.result
  console.log(heros.result);
  return (
    <div className="w-7xl mx-auto">
      {/* hero sider section*/}
      <div className="my-10">
        <HeroSlider></HeroSlider>
      </div>

      {/* 6 card */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 ">
          
         {
            heros.map(hero=><HeroCard key={hero.id} hero={hero}></HeroCard>)
         } 

      </div>
    </div>
  );
};

export default Home;
