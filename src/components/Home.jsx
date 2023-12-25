import React from "react";
import Products from "./Products";
// import background from '';

function Home() {
  return (
    <div className="hero">
      <div className="card text-bg-dark">
        <img
          src='../../assets/img4.jpg'
          className="card-img"
          alt="Background"
          style={{ height: '600px'}}
        />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">
            <h5 className="card-title display-3 fw-bolder mb-0" style={{color:'#a86a12'}}>
              New Season Arrivals
            </h5>
            <p className="card-text fs-2 " style={{color:'#a86a12'}}>Check Out All The trends</p>
          </div>
        </div>
      </div>
      <Products/>
    </div>
  );
}

export default Home;
