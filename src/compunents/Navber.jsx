import React, { use } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../context/AuthContext";
import useImg from "../assets/user 1.png";
import { ToastContainer } from "react-toastify";
const Navber = () => {
  const { users, setUsers, signOutFunc } = use(AuthContext);
  const handleSignOut = () => {
    signOutFunc()
      .then((res) => {
        console.log(res.user);
      })
      .cath((e) => {
        console.log(e.message);
      });
  };
  const links = (
    <div className="flex">
      <li>
        <NavLink className={({isActive})=>isActive?'text-primary font-bold':''} to="/home">Home</NavLink>
      </li>
      <li>
        <NavLink className={({isActive})=>isActive?'text-primary font-bold':''} to="/services">Services</NavLink>
      </li>
     { users && <div className="flex">
        <li>
        <NavLink className={({isActive})=>isActive?'text-primary font-bold':''} to="/mybookings">My Bookings</NavLink>
      </li>
      <li>
        <NavLink className={({isActive})=>isActive?'text-primary font-bold':''} to="/addservice">Add Service</NavLink>
      </li>
      <li>
        <NavLink className={({isActive})=>isActive?'text-primary font-bold':''} to="/myservice">My Services</NavLink>
      </li>
     </div> }
    </div>
  );
  return (
    <div className="navbar bg-base-100 max-w-7xl mx-auto shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-md md:text-xl">HouseHold Services</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end md:gap-5">
        {users ? (
          <div>
            <details className="dropdown">
              <summary className="btn rounded-4xl m-1">
                {" "}
                <img src={users.photoURL} className="h-[40px] w-[40px] rounded-3xl" alt="" />
              </summary>
              <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                <li>
                  <Link to='/profile'>Profile</Link>
                </li>
              </ul>
            </details>
          </div>
        ) : (
          <img src={useImg} alt="" />
        )}
        {users ? (
          <button onClick={handleSignOut} className="btn">
            SignOut
          </button>
        ) : (
          <div className="flex gap-1 md:gap-3">
            <Link to="/login" className="btn">
              Login
            </Link>
            <Link to="/register" className="btn">
              Register
            </Link>
          </div>
        )}
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Navber;
