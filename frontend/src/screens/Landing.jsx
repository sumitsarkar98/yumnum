import React from "react";
import Card from "../components/Card"; // Optional if you want to reuse the Card component

const Landing = () => {
  return (
    <div className="landing container-fluid">
      {/* Slide 1: Hero Section */}
      <div
        id="landing1"
        className="landing-slides d-flex justify-content-center align-items-center text-center bg-danger text-white"
      >
        <div className="container">
          <h1 className="display-3 font-weight-bold">YumNum</h1>
          <h3 className="mt-4">
            Craving Something Delicious? We've Got You Covered!
          </h3>
        </div>
      </div>

      {/* Slide 2: Features or Cards */}
      <div id="landing2" className="landing-slides py-5 bg-white">
        <div className="container">
          <h2 className="text-center mb-4">Why Choose YumNum?</h2>
          <div className="row justify-content-center">
            <div className="col-12 col-md-4 mb-4">
              <Card
                title="Fast Delivery"
                description="We deliver your favorite meals in no time, so you never wait long!"
                buttonText="Learn More"
              />
            </div>
            <div className="col-12 col-md-4 mb-4">
              <Card
                title="Healthy Options"
                description="Our meals are designed to keep you healthy and satisfied."
                buttonText="View Menu"
              />
            </div>
            <div className="col-12 col-md-4 mb-4">
              <Card
                title="Affordable Prices"
                description="Enjoy high-quality meals without breaking the bank."
                buttonText="Order Now"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Slide 3: CTA or Info */}
      <div id="landing3" className="landing-slides py-5 text-center bg-light">
        <h2>Get Started Today!</h2>
        <p className="w-75 mx-auto mt-2">
          Whether you're hungry, lazy, or just craving that perfect bite—YumNum
          delivers your favorite dishes fast and fresh.
        </p>
        <a href="/home" className="btn btn-danger mt-3 px-2">
          Order Now
        </a>
      </div>
    </div>
  );
};

export default Landing;
