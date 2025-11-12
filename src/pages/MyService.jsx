import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";

const MyService = () => {
  const { users } = use(AuthContext);
  const [myBooks,setMyBooks] = useState([]);
  useEffect(() => {
    if(users?.email){
        fetch(`http://localhost:3000/service?email=${users.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        setMyBooks(Array.isArray(data) ? data : []);
      });
    }
  }, [users?.email]);
  return (
    <div className="overflow-x-auto md:w-7xl mx-auto py-20">
        <h1>{myBooks.length}</h1>
        
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>
             #
            </th>
            <th>Image URL</th>
            <th>Category</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
         
       {
       myBooks.map(
            (book,index)=>(
               <tr key={book._id}>
            <th>
              {index + 1}
            </th>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle h-12 w-12">
                    <img
                      src={book.imageURL}
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
                <div>
                  <div className="font-bold">{book.providerName}</div>
                  <div className="text-sm opacity-50">{book.email}</div>
                </div>
              </div>
            </td>
            <td>
              {book.category}
              <br />
              <span className="badge badge-ghost badge-sm">
                {book.serviceName}
              </span>
            </td>
            <td>{book.price}</td>
            <th className="space-y-2">
              <button className="btn btn-primary mr-2">Update</button>
              <button className="btn btn-secondary">Delete</button>
            </th>
          </tr>
        ))
       }
         
        
        
        
        </tbody>
       
      </table>
    </div>
  );
};

export default MyService;
