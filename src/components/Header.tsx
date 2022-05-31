import React from "react";
import logo from "../assets/logo.svg";

const Header = () => {
  return (
    <div className="flex justify-between">
      <img src={logo} alt="logo" className="h-8" />
      <button className="request-btn">Request Beta Access</button>
    </div>
  );
};

export default Header;
