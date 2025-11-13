import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router";
import { toast } from "react-toastify";

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
  const handleDelete=(id)=>{
    console.log('delete');
    fetch(`http://localhost:3000/service/${id}`,{
      method:"DELETE",
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
        setMyBooks(myBooks.filter(book=>book._id!==id))
        toast("Delete service")
    })

  }
  return (
    <div className="overflow-x-auto md:w-7xl mx-auto py-20">
        <h1 className="text-4xl font-bold md:text-center py-10">My <span className="text-orange-400">Services</span>: {myBooks.length}</h1>
         
     { myBooks.length === 0? 
     <p className="text-center text-primary font-semibold col-span-3">
            No Add Services Found
          </p>
     : <table className="table">
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
            <th className="space-y-2 flex gap-2">
              <Link to={`/update/${book._id}`} className="btn btn-primary">Update</Link>
              <button onClick={()=>handleDelete(book._id)} className="btn btn-secondary">Delete</button>
            </th>
          </tr>
        ))
       }
         
        
        
        
        </tbody>
       
      </table>}
    </div>
  );
};

export default MyService;
