import React from "react";
import line from "../assets/pattern-curved-line-1.svg";

const Solution = () => {
  return (
    <div className="py-32 flex justify-between">
      <div>
        <div className="flex flex-col w-[650px]">
          <img
            src={line}
            alt="decorative line"
            className="w-[290px] left-72 relative mb-4 z-10"
          />
          <h1 className="z-10 font-epilogue text-hXL leading-[78px] tracking-[-1px] text-dark-blue">
            A <b>super solution</b> for your <b>business.</b>
          </h1>
        </div>
        <p className="body-text w-[350px] py-10">
          Our marketing and sales automations help you scale your outreach to
          get more leads for your company.
        </p>
        <button className="request-btn bg-dark-blue text-pale hover:bg-gradient-to-br hover:from-purple hover:via-pink hover:to-orange">
          Request Beta Access
        </button>
      </div>
      <div className="z-0 flex absolute right-[20%]">
        <img src={require("../assets/image-hero-portrait.png")} alt="phone" />
        <div className="py-[70px] px-[80px]">
          <div className="py-[30px]">
            <div className="stat-value">2K+</div>
            <div className="stat-label">COMPANIES</div>
          </div>
          <div className="py-[30px]">
            <div className="stat-value">8</div>
            <div className="stat-label">LANGUAGES</div>
          </div>
          <div className="py-[30px]">
            <div className="stat-value">1.2M</div>
            <div className="stat-label">LEADS</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solution;
