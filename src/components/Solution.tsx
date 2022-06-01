import React from "react";
import line from "../assets/pattern-curved-line-1.svg";

const Solution = () => {
  return (
    <div>
      <div className="py-32 phone:py-[50px] flex desktop:justify-between tablet:justify-between phone:flex-col">
        <div>
          <div className="flex flex-col tablet:w-[650px] desktop:w-[650px] phone:w-[90vw]">
            <img
              src={line}
              alt="decorative line"
              className="w-[290px] left-72 phone:left-[40vw] phone:w-[40vw] relative mb-4 z-10"
            />
            <h1 className="z-10 font-epilogue text-hXL leading-[78px] tracking-[-1px] phone:text-[10vw] text-dark-blue">
              A <b>super solution</b> for your <b>business.</b>
            </h1>
          </div>
          <p className="body-text tablet:w-[350px] desktop:w-[350px] py-10 text-dark-blue">
            Our marketing and sales automations help you scale your outreach to
            get more leads for your company.
          </p>
          <button className="request-btn bg-dark-blue text-pale hover:bg-gradient-to-br hover:from-purple hover:via-pink hover:to-orange">
            Request Beta Access
          </button>
        </div>
        <div className="z-0 flex absolute desktop:right-[15%] tablet:right-[5%] phone:hidden">
          <img src={require("../assets/image-hero-portrait.png")} alt="phone" />
          <div className="py-[70px] px-[80px] tablet:hidden desktop:block">
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
      <div className="hidden desktop:!hidden tablet:block phone:!hidden !flex justify-between px-[10%] pt-[130px]">
        <div className="flex flex-col text-center">
          <div className="stat-value">2K+</div>
          <div className="stat-label">COMPANIES</div>
        </div>
        <div className="flex flex-col text-center">
          <div className="stat-value">8</div>
          <div className="stat-label">LANGUAGES</div>
        </div>
        <div className="flex flex-col text-center">
          <div className="stat-value">1.2M</div>
          <div className="stat-label">LEADS</div>
        </div>
      </div>
    </div>
  );
};

export default Solution;
