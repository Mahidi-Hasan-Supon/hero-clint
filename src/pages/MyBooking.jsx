import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import Swal from "sweetalert2";

const MyBooking = () => {
  const { users } = use(AuthContext);
  const [books, setBooks] = useState([]);
  useEffect(() => {
    if (users?.email) {
      fetch(`http://localhost:3000/bookings?email=${users.email}`)
        .then((res) => res.json())
        .then((data) => {
          setBooks(data);
        });
    }
  }, [users]);

  const handleCancel = (_id) => {
    console.log("e");
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/bookings/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("delete", data);
            if (data.deletedCount) {
              Swal.fire({
                title: "Cancel!",
                text: "Your booking has been cancel.",
                icon: "success",
              });
              const remainingBooks = books.filter(book=>book._id !== _id)
              setBooks(remainingBooks)
            }
          });
      }
    });
  };
  return (
   <div className="overflow-x-auto md:w-7xl mx-auto py-30">
      { books.length === 0? 
       <div>
        <p className="text-center text-gray-500 text-lg py-30">No bookings found.</p>
       </div>
       : 
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>#</th>
            <th>Email</th>
            <th>serviceName</th>
            <th>Booking Date</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* row 4 */}
          {books.map((book, index) => (
            <tr key={book._id}>
              <th>{index + 1}</th>
              <td>
                <div className="flex items-center gap-3">
                  {/* <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                     
                    </div>
                  </div> */}
                  <div>
                    <div className="font-bold">{book.user_email}</div>
                  </div>
                </div>
              </td>
              <td>{book.serviceName}</td>
              <td>{book.date}</td>
              <td>{book.price}</td>
              <th>
                <button
                  onClick={() => handleCancel(book._id)}
                  className="btn btn-primary"
                >
                  Cancel
                </button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>}
    </div>
  );
};

export default MyBooking;
