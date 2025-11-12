import React, { use } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link, Navigate, useNavigate } from "react-router";

const Profile = () => {
    const {users} = use(AuthContext)
    const navigate = useNavigate()
    if(!users){
        navigate('/')
        return null
    }
  return (
   <div className="p-20 flex justify-center items-center">
     <div className="card bg-base-100 w-96 shadow-sm">
      <figure className="px-10 pt-10">
        <img
          src={users.photoURL}
          alt="Shoes"
          className="rounded-xl h-[40px] w-[40px] rounded-2xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{users.displayName}</h2>
        <p className="text-xl font-bold">
          {users.email}
        </p>
        <div className="card-actions">
          <Link to='/updateprofile' className="btn btn-primary w-[200px]">Update Profile</Link>
        </div>
      </div>
    </div>
     
   </div>
  );
};

export default Profile;
