import React from "react";

export default function Programs() {
  return (
    <div className="container py-5">

      <h1 className="text-center mb-5">Our Programs</h1>

      <div className="row">

        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow">
            <div className="card-body text-center">
              <h4 className="card-title">Academy</h4>
              <p className="card-text">
                Intensive bootcamps and certification programs designed to
                train students and professionals in digital, cyber and
                technology risk management.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow">
            <div className="card-body text-center">
              <h4 className="card-title">Innovation & Incubation</h4>
              <p className="card-text">
                Research and development initiatives focused on future
                risk models, AI governance and digital resilience
                frameworks.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow">
            <div className="card-body text-center">
              <h4 className="card-title">Advisory Services</h4>
              <p className="card-text">
                Helping organisations implement cybersecurity and risk
                frameworks such as NIST, ISO 27001 and NIS2.
              </p>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}