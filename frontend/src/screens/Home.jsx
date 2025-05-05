import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="main"></div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
