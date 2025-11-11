import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";

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

  return (
    <div className="overflow-x-auto md:w-7xl mx-auto py-30">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>#</th>
            <th>Email</th>
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
              <td>{book.date}</td>
              <td>{book.price}</td>
              <th>
                <button className="btn btn-primary">Cancel</button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyBooking;
