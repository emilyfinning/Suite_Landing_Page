import React from "react";
import line from "../assets/pattern-curved-line-2.svg";

const QuoteCard = () => {
  return (
    <div className="bg-dark-blue rounded-2xl mt-56 flex h-[540px] z-10 relative">
      <img
        src={require("../assets/image-jeremy-large.png")}
        alt="Jeremy"
        className="relative left-[10%] top-[-50px] h-[590px]"
      />
      <img
        src={line}
        alt="decorative line"
        className="h-[50px] ml-[13%] mt-[130px]"
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
  );
};

export default QuoteCard;
