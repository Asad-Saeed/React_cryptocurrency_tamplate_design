import React from "react";

function HeroSection() {
  return (
    <>
      <header
        className="hero py-5 d-flex flex-row align-content-center"
        style={{
          backgroundImage: 'url("images/herobg.png")',
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="p-sm-5 container-fluid text-center bg-image row">
          <div className="mask col-md-5 col-sm-12">
            <div className="d-flex justify-content-left align-items-center h-100">
              <div className="text-white text-left">
                <h1 className="mb-3 ml-md-5 display-4">
                  The Best Trade Cryptocurrency Assets
                </h1>

                <button
                  className="btn btn-md ml-md-5 "
                  style={{
                    backgroundColor: "#FFAE02",
                    color: "#FFFFFF",
                    fontWeight: 500,
                    lineHeight: "30px",
                  }}
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-7 "></div>
        </div>
      </header>
    </>
  );
}

export default HeroSection;
