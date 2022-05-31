import React from "react";
import facebook from "../assets/icon-facebook.svg";
import instagram from "../assets/icon-instagram.svg";
import twitter from "../assets/icon-twitter.svg";
import logo from "../assets/logo.svg";

const Footer = () => {
  return (
    <div className="flex justify-between mt-[120px]">
      <img src={logo} alt="logo" className="h-8" />
      <div className="body-text">Copyright - Suite</div>
      <div className="flex">
        <img src={facebook} alt="facebook icon" className="h-6 mx-[15px]" />
        <img src={twitter} alt="twitter icon" className="h-6 mx-[15px]" />
        <img src={instagram} alt="instagram icon" className="h-6 mx-[15px]" />
      </div>
    </div>
  );
};

export default Footer;
