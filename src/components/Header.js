import React from "react";


const Header = () => {
  return (
    <div>
      <div className="container">
        <div className="row ">
          <div className="col-6 sm-2 header-content">
            <h1 >Automate Manual Data Entry Using AI</h1>
            <p>
              Capture data from documents instantly. Reduce turn around times
              and the manual effort required.
            </p>

            <button className="btn btn-started">Get Started for free</button>

          </div>
          <div className="col-6">
            <img src="assets/header.jpeg" alt="header"/>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Header;
