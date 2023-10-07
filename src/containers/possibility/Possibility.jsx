import React from "react";
import "./possibility.css";
import Possibilityimage from "../../assets/possibility.png";

const Possibility = () => {
  return (
    <div
      className="gpt__possibility section__padding gradient__bg"
      id="possibility"
    >
      <div className="gpt__possibility-image">
        <img src={Possibilityimage} alt="possibility" />
      </div>
      <div className="gpt__possibility-content">
        <h4>Request Early Access</h4>
        <h1 className="gradient__text">
          The possibilities are Beyond Our Imagination
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
          tempora placeat dolorem odit libero, optio deleniti sit velit voluptas
          deserunt explicabo dolore laboriosam maxime consequuntur
          necessitatibus voluptate eligendi possimus facilis?
        </p>
        <h4>request for early access </h4>
      </div>
    </div>
  );
};

export default Possibility;
