import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-1 py-3 px-md-4">
      <div className="container-fluid">
        {/* Brand */}
        <NavLink
          to="/"
          className="navbar-brand d-flex align-items-center gap-2"
        >
          <i className="fa-solid fa-seedling"></i>
          <span>YumNum</span>
        </NavLink>

        {/* Toggler for mobile */}
        <button
          className="navbar-toggler shadow-none border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span
            className="navbar-toggler-icon"
            style={{ filter: "brightness(0) invert(1)" }}
          ></span>
        </button>

        {/* Collapsible Nav Items */}
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <div className="nav-options navbar-nav gap-3">
            <NavLink to="/addrestaurants" className="btn nav-btn">
              Add Restaurants
            </NavLink>
            <NavLink to="/login" className="btn nav-btn">
              Login
            </NavLink>
            <NavLink to="/signup" className="btn nav-btn me-4">
              Signup
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
