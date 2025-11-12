import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useLoaderData, useParams } from 'react-router';
import { toast } from 'react-toastify';


const Update = () => {
    const {users} = use(AuthContext)
    const [myBooks,setMyBooks] = useState([]);
    const {id} =useParams()
    const datas =useLoaderData()
    const data = datas.result
    console.log(data);
    console.log(id);
    //   useEffect(() => {
    //         fetch('http://localhost:3000/service')
    //       .then((res) => res.json())
    //       .then((data) => {
    //         console.log(data);
    //         // setMyBooks(data)
    //         // setMyBooks(Array.isArray(data) ? data : []);
    //       });
    //     }, []);
     const handleUpdate = (e) => {
    e.preventDefault();
    const serviceName = e.target.serviceName.value;
    const price = e.target.price.value;
    const category = e.target.category.value;
    const description = e.target.description.value;
    const photo = e.target.image.value;
    const email = e.target.email.value;
    const providerName = e.target.providerName.value;
    console.log(
      serviceName,
      category,
      price,
      description,
      photo,
      email,
      providerName
    );
    const createUpdate = {
      serviceName: serviceName,
      category: category,
      price: price,
      description: description,
      imageURL: photo,
      providerName: providerName,
      email: email,
    };
    fetch(`http://localhost:3000/service/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(createUpdate),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("data post", data);
        if(data.modifiedCount){
            toast('Update a service')
        }
      });
  };
    return (
        <div className="md:w-7xl mx-auto py-5">
      <div className="card bg-base-100 w-96 mx-auto max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <form onSubmit={handleUpdate}>
            <fieldset className="fieldset">
              <label className="label">Service Name</label>
              <input
                type="name"
                name="serviceName"
                className="input"
                defaultValue={data.serviceName}
                placeholder="Service Name"
              />
              <label className="label">Price</label>
              <input
                type="name"
                name="price"
                className="input"
                placeholder="price"
                 defaultValue={data.price}
              />
              <label className="label">Category</label>

              <input
                type="text"
                name="category"
                className="input"
                placeholder="Which browser do you use"
                list="browsers"
                 defaultValue={data.category}
              />
              <datalist id="browsers">
                <option value="Electrical"></option>
                <option value="Electronics"></option>
                <option value="Plumbing"></option>
                <option value="Cleaning"></option>
                <option value="Furniture"></option>
                <option value="Outdoor"></option>
              </datalist>
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Description</legend>
                <textarea
                  className="textarea h-24"
                  name="description"
                  placeholder="description"
                   defaultValue={data.description}
                ></textarea>
              </fieldset>

              <label className="label">Image URL</label>
              <input
                type="photo"
                name="image"
                className="input"
                placeholder="Image URL"
                 defaultValue={data.imageURL}
              />

              <label className="label">Provider Name</label>
              <input
                type="name"
                name="providerName"
                className="input"
                placeholder="Provider Name"
                 defaultValue={data.providerName}
              />

              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Email"
                readOnly
                 defaultValue={data.email}
              />

              <button type="submit" className="btn btn-primary mt-4">
                Update A Service
              </button>
            </fieldset>
          </form>
        </div>
      </div>
      {/* <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
     
      </div>  */}
    </div>
    );
};

export default Update;