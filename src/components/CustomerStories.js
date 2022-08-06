import React from "react";
import { Link } from "react-router-dom";

const CustomerStories = () => {
  return (
    <div className="customer__img">
      <p className="customer__content">Loved by customers across the globe</p>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <img src="assets/divy.png" alt="customer-stories" />
            <img src="assets/divy.png" alt="customer-stories" />
            <img src="assets/divy.png" alt="customer-stories" />
            <img src="assets/divy.png" alt="customer-stories" />
            <img src="assets/divy.png" alt="customer-stories" />
            <img src="assets/divy.png" alt="customer-stories" />
            <img src="assets/divy.png" alt="customer-stories" />
          </div>
          <div className="col-12">
            <img src="assets/divy.png" alt="customer-stories" />
            <img src="assets/divy.png" alt="customer-stories" />
            <img src="assets/divy.png" alt="customer-stories" />
            <img src="assets/divy.png" alt="customer-stories" />
            <img src="assets/divy.png" alt="customer-stories" />
            <img src="assets/divy.png" alt="customer-stories" />
            <img src="assets/divy.png" alt="customer-stories" />
          </div>
        </div>
        <a href ="/stories" className="stories-link">Read Customer Stories</a>
      </div>
    </div>
  );
};

export default CustomerStories;
