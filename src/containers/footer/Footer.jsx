import React from "react";
import "./footer.css";
import gptlogo from "../../assets/logo.svg";

const Footer = () => {
  return (
    <div className="gpt__footer section__padding">
      <div className="gpt__footer-heading">
        <h1 className="gradient__text">
          Do you want to step in Future before Others?
        </h1>
      </div>
      <div className="gpt__footer-btn">
        <p>Request Early Access</p>
      </div>
      <div className="gpt__footer-links">
        <div className="gpt_-footer-links_logo">
          <img src={gptlogo} alt="logo" />
          <p>Kigali Rwanda, All Right Reserved</p>
        </div>
        <div className="gpt__footer-links_div">
          <h3>Links</h3>
          <p>Overons</p>
          <p>Social media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className="gpt__footer-links_div">
          <h3>Company</h3>
          <p>Terms & Conditions</p>
          <p>privacy policy</p>
          <p>Contacts</p>
        </div>

        <div className="gpt__footer-links_div">
          <h3>Get i touch</h3>
          <p>Kigali, Rwanda, Remy</p>
          <p>0788665544</p>
          <p>info@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
