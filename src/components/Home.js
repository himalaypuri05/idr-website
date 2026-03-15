import React from "react";

export default function Home() {
  return (
    <>
    
    {/* Hero Section */}
    <section className="bg-dark text-light text-center p-5">
      <div className="container">
        <h1 className="display-4 fw-bold">
          Advancing the Future of Digital Risk
        </h1>

        <p className="lead mt-3">
          The Institute of Digital Risk (IDR) trains and deploys the next 
          generation of digital risk practitioners, combining academic 
          collaboration with real-world industry practice.
        </p>

        <button className="btn btn-warning btn-lg mt-3">
          Explore Programs
        </button>
      </div>
    </section>


    {/* About Preview Section */}
    <section className="container py-5">
      <h2 className="text-center mb-4">About IDR</h2>

      <p className="text-center">
        The Institute of Digital Risk (IDR) is an industry-led training and
        deployment institute focused on digital, cyber and technology risk
        roles in regulated and high-consequence environments.
      </p>

      <p className="text-center">
        By connecting academic insight with real-world projects and industry
        frameworks, IDR prepares professionals to manage emerging risks in
        areas such as cybersecurity, AI governance and technology resilience.
      </p>
    </section>


    {/* Service Pillars */}
    <section className="bg-light py-5">
      <div className="container">
        <h2 className="text-center mb-5">Our Model</h2>

        <div className="row">

          <div className="col-md-4">
            <div className="card shadow-sm">
              <div className="card-body text-center">
                <h5 className="card-title">Academy</h5>
                <p className="card-text">
                  Bootcamps and training programs designed for students
                  and professionals looking to build careers in digital
                  and cyber risk.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow-sm">
              <div className="card-body text-center">
                <h5 className="card-title">Innovation & Incubation</h5>
                <p className="card-text">
                  Developing new intellectual property, risk models and
                  governance frameworks for emerging technologies like AI.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow-sm">
              <div className="card-body text-center">
                <h5 className="card-title">Advisory Services</h5>
                <p className="card-text">
                  Helping organisations implement risk frameworks such as
                  NIST, ISO 27001 and other modern cybersecurity standards.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    </>
  );
}