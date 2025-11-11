import React, { useRef } from "react";
import { useLoaderData } from "react-router";

const ServicesDetails = () => {
  const details = useLoaderData();
  const detail = details.result;
  console.log(detail);
  const bookModalRef = useRef(null)
  const handleModal=()=>{
    bookModalRef.current.showModal()
  }
  return (
    <div className=" w-7xl mx-auto py-50 border border-amber-200">
      <div className="flex gap-20">
        <div className="">
          <img
            src={detail.imageURL}
            className="h-full w-[600px] rounded-lg shadow-2xl"
          />
        </div>
        <div className="space-y-4">
          <h1 className="text-5xl font-bold opacity-85">{detail.category}</h1>
          <p className="text-xl font-semibold mt-5 opacity-80">
            {detail.description}
          </p>
          <div className="text-[#00aeef] text-xl font-semibold">
            ProviderName: {detail.providerName}
          </div>
          <div className="text-[#00aeef] text-xl font-semibold">
            serviceName: {detail.serviceName}
          </div>
          <div className="border-t border-gray-200"></div>
          <div className="flex gap-4">
            <button className="btn btn-primary text-xl font-bold">
              price: $ {detail.price}
            </button>

            <div>
              <button onClick={handleModal} className="btn btn-primary text-xl font-bold">
                Book Now
              </button>
              {/* Open the modal using document.getElementById('ID').showModal() method */}
              <button
                className="btn"
                onClick={() =>
                  document.getElementById("my_modal_1").showModal()
                }
              >
                open modal
              </button>
              <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                  
                  <h3 className="font-bold text-lg">Hello!</h3>
                  <p className="py-4">
                    Press ESC key or click the button below to close
                  </p>
                  <div className="modal-action">
                    <form method="dialog">
                      {/* if there is a button in form, it will close the modal */}
                      <button className="btn">Close</button>
                    </form>
                  </div>
                </div>
              </dialog>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesDetails;
