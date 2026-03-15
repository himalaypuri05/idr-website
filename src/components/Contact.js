import React from "react";

export default function Contact() {
  return (
    <div className="container py-5">

      <h1 className="text-center mb-4">Register Your Interest</h1>

      <p className="text-center mb-5">
        Interested in our programs or partnerships? Send us a message.
      </p>

      <div className="row justify-content-center">

        <div className="col-md-6">

          <form>

            <div className="mb-3">
              <label className="form-label">Name</label>
              <input type="text" className="form-control" required />
            </div>

            <div className="mb-3">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" required />
            </div>

            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea className="form-control" rows="4"></textarea>
            </div>

            <button className="btn btn-warning w-100">
              Submit
            </button>

          </form>

        </div>

      </div>

    </div>
  );
}