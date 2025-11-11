import React, { use, useRef } from "react";
import { useLoaderData, useParams } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify/unstyled";

const ServicesDetails = () => {
  const {users} = use(AuthContext)
  const {id:serviceId,} = useParams()
  const details = useLoaderData();
  const detail = details.result;
  console.log(detail);
  const bookModalRef = useRef(null);
  const handleModal = () => {
    bookModalRef.current.showModal();
  };
  const handleModalSubmit=(e)=>{
    e.preventDefault()
    const email = e.target.email.value 
    const bookingDate = e.target.bookingDate.value 
    console.log(serviceId,email,bookingDate);
    const bookingUser ={
      service:serviceId,
      user_email:email, 
      date:bookingDate,
    }
    fetch('http://localhost:3000/books',{
       method:"POST",
       headers:{
        "content-type":"application/json"
       },
       body:JSON.stringify(bookingUser)
    })
    .then(res=>res.json()) 
    .then(data=>{
     if(data.insertedId){
      toast("Booking Success")
       bookModalRef.current.close();
     }
    })
  }
  return (
    <div className=" w-7xl mx-auto py-50">
      <div className="md:flex gap-20">
        <div className="">
          <img
            src={detail.imageURL}
            className="h-full md:w-[600px] w-[400px] rounded-lg shadow-2xl"
          />
        </div>
        <div className="space-y-4">
          <h1 className="text-5xl font-bold opacity-85">{detail.category}</h1>
          <p className="md:text-xl text-sm font-semibold mt-5 opacity-80">
            {detail.description}
          </p>
          <div className="text-[#00aeef] text-xl font-semibold">
            ProviderName: {detail.providerName}
          </div>
          <div className="text-[#00aeef] text-xl font-semibold">
            serviceName: {detail.serviceName}
          </div>
          <div className="md:border-t border-gray-200"></div>
          <div className="flex gap-4">
            <button className="btn btn-primary text-xl font-bold">
              price: $ {detail.price}
            </button>

            <div>
              <button
                onClick={handleModal}
                className="btn btn-primary text-xl font-bold"
              >
                Book Now
              </button>

              <dialog ref={bookModalRef} className="modal">
                <div className="modal-box">
                  <h3 className="font-bold text-lg">Book Your Service</h3>
                  <p className="mt-2">
                    <span className="text-lg font-bold">ServiceName:</span>{" "}
                    {detail.serviceName}
                  </p>
                  <p className="mt-2">
                    <span className="text-lg font-bold">Price:</span>${" "}
                    {detail.price}
                  </p>
                  <div className="">
                    <form onSubmit={handleModalSubmit}>
                      <fieldset className="fieldset">
                        <label className="label">UserEmail</label>
                        <input
                          type="email"
                          className="input"
                          placeholder="Email"
                          defaultValue={users.email}
                          readOnly
                          name="email"
                        />
                        <label className="label">Booking Date</label>
                        <input
                          type="date"
                          className="input"
                          placeholder="bookingDate"
                          name="bookingDate"
                        />
                        <button type="submit" className="btn btn-primary mt-4">Booking Confirm</button>
                      </fieldset>
                      {/* if there is a button in form, it will close the modal */}
                    
                    </form>
                      <form method="dialog">
                        <button className="btn w-full btn-secondary">Close</button>
                      </form>
                  </div>
                </div>
              </dialog>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default ServicesDetails;
