import React from "react";
import logo from "../assets/logo.svg";

const Header = () => {
  return (
    <div className="flex justify-between">
      <img src={logo} alt="logo" className="h-8" />
      <button className="request-btn bg-pale text-dark-blue hover:bg-dark-blue hover:text-pale border-2 border-dark-blue">
        Request Beta Access
      </button>
    </div>
  );
};

export default Header;
