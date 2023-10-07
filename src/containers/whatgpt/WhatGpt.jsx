import React from "react";
import "./whatgpt.css";
import { Features } from "../../components";

const WhatGpt = () => {
  return (
    <div className="gpt__whatgpt section__margin" id="whatgpt">
      <div className="gpt__whatgpt-heading">
        <h1 className="gradient__text">
          The possibilities are beyond your Imagination
        </h1>
        <p>Explore the library</p>
      </div>
      <div className="gpt__whatgpt-container">
        <Features
          title="Chatbots"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. "
        />
        <Features
          title="Knowledge"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. "
        />
        <Features
          title="Education"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. "
        />
      </div>
    </div>
  );
};

export default WhatGpt;
