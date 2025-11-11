import React from "react";
import { Link } from "react-router";

const HeroCard = ({ hero }) => {
  // console.log(hero);
  const {
    category,description,email,imageURL,price,providerName,serviceName,_id
  } 
  =
   hero;

  return (
    <div className="card bg-base-100 w-96 shadow-sm">
 
      <figure>
        <img
          src={imageURL}
          alt="Shoes"
          className="h-[300px] w-full"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {category}
          <div className="badge text-white bg-[#00aeef]">$ {price}</div>
        </h2>
        <p className="font-semibold opacity-70">
         {description}
        </p>

        <p className="font-bold">{email}</p>
        <div className="card-actions">
          <div className="text-[#00aeef] border rounded-2xl p-1 font-semibold">{serviceName} : <span className="font-bold">{providerName}</span></div>
          {/* <div className="text-[#00aeef] border rounded-2xl p-1 font-semibold">{providerName}</div> */}
        </div>
        <Link to={`/servicesdetails/${_id}`} className="btn mt-3 btn-primary">View Details</Link>
      </div>
    </div>
  );
};

export default HeroCard;
