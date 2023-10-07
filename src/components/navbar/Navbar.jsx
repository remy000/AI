import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./navbar.css";
import logo from "../../assets/logo.svg";

const Menu = () => (
  <>
    <p>
      <a href="#Home">Home</a>
    </p>
    <p>
      <a href="#whatgpt">What is GPT</a>
    </p>
    <p>
      <a href="#possibility">Open Ai</a>
    </p>
    <p>
      <a href="#feature">Case Study</a>
    </p>
    <p>
      <a href="#blog">Library</a>
    </p>
  </>
);
function Navbar() {
  const [ToggleMenu, setToogleMenu] = useState(false);
  return (
    <div className="gpt__navbar">
      <div className="gpt__navbar-links">
        <div className="gpt__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="gpt__navbar-links_container">
          <Menu />
        </div>
        <div className="gpt__navbar-sign">
          <p>Log in</p>
          <button type="button">Sign in</button>
        </div>
        <div className="gpt__navbar-menu">
          {ToggleMenu ? (
            <RiCloseLine
              color="#fff"
              size={27}
              onClick={() => setToogleMenu(false)}
            />
          ) : (
            <RiMenu3Line
              color="#fff"
              size={27}
              onClick={() => setToogleMenu(true)}
            />
          )}
          {ToggleMenu && (
            <div className="gpt__navbar-menu_container scale-up-center">
              <div className="gpt__navbar-menu_container-links">
                <Menu />
                <div className="gpt__navbar-menu_container-links-sign">
                  <p>login</p>
                  <button type="button">Sign in</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
