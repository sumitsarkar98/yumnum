import React from "react";

const Card = ({ title, description, buttonText }) => {
  return (
    <div className="card p-2 p-lg-4 " style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a href="#" className="btn btn-danger px-2 mt-3">
          {buttonText}
        </a>
      </div>
    </div>
  );
};

export default Card;
