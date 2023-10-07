import React from "react";
import "./feature.css";
import { Features } from "../../components";

const FeatureData = [
  {
    title: "Become Active",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo iste quasi explicabo ullam saepe.",
  },
  {
    title: "Improving end Distrust",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo iste quasi explicabo ullam saepe.",
  },
  {
    title: "Welcome to AI world",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo iste quasi explicabo ullam saepe.",
  },
];

const Feature = () => {
  return (
    <div className="gpt__feature section__padding">
      <div className="gpt__feature-heading">
        <h1 className="gradient__text">
          The Future is now and you just need to Realize it.
        </h1>
        <p>request Early Access</p>
      </div>
      <div className="gpt__feature-container">
        {FeatureData.map((item, index) => {
          return (
            <Features
              title={item.title}
              text={item.text}
              key={item.title + index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Feature;
