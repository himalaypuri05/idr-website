import React from "react";

export default function Community() {
  return (
    <div className="container py-5">

      <h1 className="text-center mb-4">Our Community</h1>

      <p className="lead text-center">
        The IDR community includes students, early-career professionals,
        industry practitioners and organisations committed to building
        stronger digital risk capabilities.
      </p>

      <div className="row mt-5">

        <div className="col-md-4 text-center">
          <h4>Students</h4>
          <p>
            University students preparing for careers in cybersecurity,
            digital governance and technology risk management.
          </p>
        </div>

        <div className="col-md-4 text-center">
          <h4>Professionals</h4>
          <p>
            Early-career professionals seeking upskilling in emerging
            digital and AI risk domains.
          </p>
        </div>

        <div className="col-md-4 text-center">
          <h4>Industry Partners</h4>
          <p>
            Organisations from sectors such as financial services,
            technology and critical infrastructure.
          </p>
        </div>

      </div>

    </div>
  );
}