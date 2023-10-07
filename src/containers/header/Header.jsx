import React from "react";
import "./header.css";
import ai from "../../assets/ai.jpeg";
const Header = () => {
  return (
    <div className="gpt__header section__padding" id="home">
      <div className="gpt__header-content">
        <h1 className="gradient__text">
          Let's Build Something amazing with GPT-3 OpenAI
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          repudiandae sequi placeat accusamus praesentium magnam in error magni
          culpa, voluptatum ea ipsum sit nostrum aliquid perferendis quo tenetur
          eum debitis.
        </p>
        <div className="gpt__header-content__input">
          <input type="email" placeholder="your email address" />
          <button type="button">Get started</button>
        </div>
      </div>
      <div className="gpt__header-image">
        <img src={ai} alt="ai" />
      </div>
    </div>
  );
};

export default Header;
