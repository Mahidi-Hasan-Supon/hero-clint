import React from "react";

const AddService = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="w-7xl mx-auto py-5">
      <div className="card bg-base-100 w-96 mx-auto max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <fieldset className="fieldset">
              <label className="label">Service Name</label>
              <input
                type="name"
                name="serviceName"
                className="input"
                placeholder="Service Name"
              />
              <label className="label">Category</label>
              <select
                defaultValue="category"
                name="category"
                className="select"
              >
                <option disabled={true}>Electrical</option>
                <option>Electronics</option>
                <option>Plumbing</option>
                <option>Cleaning</option>
                <option>Painting</option>
                <option>Furniture</option>
                <option>Repair</option>
                <option>Outdoor</option>
              </select>

              <fieldset className="fieldset">
                <legend className="fieldset-legend">Description,</legend>
                <textarea
                  className="textarea h-24"
                  name="description"
                  placeholder="description"
                ></textarea>
              </fieldset>

              <label className="label">Image URL</label>
              <input
                type="photo"
                name="image"
                className="input"
                placeholder="Image URL"
              />

              <label className="label">Provider Name</label>
              <input
                type="name"
                name="providerName"
                className="input"
                placeholder="Provider Name,"
              />

              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Email"
              />

              <button className="btn btn-neutral mt-4">Login</button>
            </fieldset>
          </form>
        </div>
      </div>
      {/* <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
     
      </div>  */}
    </div>
  );
};

export default AddService;
