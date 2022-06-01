import React from "react";
import line from "../assets/pattern-curved-line-2.svg";

const QuoteCard = () => {
  return (
    <div className="bg-dark-blue rounded-2xl desktop:mt-56 tablet:mt-[400px] desktop:h-[540px] tablet:h-[900px] z-10 relative">
      <div className="tablet:flex-col flex tablet:top-[-250px] relative tablet:text-center">
        <img
          src={require("../assets/image-jeremy-large.png")}
          alt="Jeremy"
          className="relative desktop:left-[10%] desktop:top-[-50px] h-[590px] w-[361px] tablet:mx-auto"
        />
        <img
          src={line}
          alt="decorative line"
          className="h-[50px] w-[50px] tablet:mx-auto ml-[13%] desktop:mt-[130px] tablet:mt-[50px]"
        />
        <div className="px-[6%] py-[80px]">
          <h2 className="small-heading">
            It just <b>works.</b>
          </h2>
          <p className="quote text-pale py-[50px]">
            "I really like how it is an all-in-one solution that handles many of
            the tasks that you would normally need separate tools to do the same
            job. This thing is a miracle worker."
          </p>
          <div className="font-epilogue text-[18px] font-bold tracking-[-0.2px] text-pale">
            JEREMY ROBINSON
          </div>
          <div className="font-epilogue text-[16px] tracking-[2.5px] text-pale">
            CMO, FYLO
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuoteCard;
