import React from "react";
import "./features.css";
const Features = ({ title, text }) => {
  return (
    <div className="gpt__features-container_feature">
      <div className="gpt__features-container_feature-title">
        <div />
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Features;
