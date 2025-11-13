import React, { use, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router";
import Loading from "./Loading";

const UpdateProfile = () => {
  const { users, setUser, updateProfileFunc,loading,setLoading } = use(AuthContext);
  const navigate = useNavigate();
  if(loading){
      return <Loading></Loading>
  }
  const handleUpdate = (e) => {
    e.preventDefault();
    const displayName = e.target.name.value;
    const photoURL = e.target.photo.value;
    console.log(displayName, photoURL);
    if (!users) {
      navigate("/login");
      return;
    }
    if (!displayName || !photoURL) {
      toast.error("Please fill all fields!");
      return;
    }
    updateProfileFunc(displayName, photoURL)
      .then(() => {
        setLoading(false)
        toast.success('"Profile updated successfully!"');
        setTimeout(() => {
          navigate("/profile");
        }, 2000);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  return (
    <div className="py-50 flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-sm  shrink-0 shadow-2xl">
        <div className="card-body gap-5">
          <h1 className="text-center text-2xl font-bold">
            {" "}
            Update Your Profile
          </h1>
          <form onSubmit={handleUpdate}>
            <label className="label">Name</label>
            <input
              type="name"
              name="name"
              className="input"
              placeholder="Name"
            />
            <label className="label"> Photo-URL</label>
            <input
              type="photo"
              name="photo"
              className="input"
              placeholder=" Photo-URL"
            />
            <div className="flex gap-2 mt-5">
              <button type="submit" className="btn btn-neutral w-1/3">
                Save
              </button>
              <button
                type="button"
                onClick={() => navigate("/profile")}
                className="btn btn-outline w-1/3"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default UpdateProfile;
