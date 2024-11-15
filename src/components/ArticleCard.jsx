import React from "react";
import { BsCheckLg } from "react-icons/bs";

import { images } from "../constants";

const ArticleCard = ({ className }) => {
  return (
    <div
      className={`rounded-xl overflow-hidden shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] ${className}`}
    >
      <img
        src={images.ecg}
        alt="ECG machine"
        className="w-full object-cover object-center h-auto md:h-52 lg:h-48 xl:h-60"
      />
      <div className="p-5">
        <h2 className="font-roboto font-bold font text-xl text-dark-soft md:text-2xl lg:text-[28px]">
          Understanding Electrocardiogram (ECG)
        </h2>
        <p className="text-dark-light mt-3  text-sm md:text-lg">
          The heart’s electrical activity is crucial for its function, and
          understanding this electrical activity is vital for diagnosing various
          heart conditions.
        </p>
        <div className="flex justify-between flex-nowrap items-center mt-6">
          <div className="flex items-center gap-x-2 md:gap-x-2.5">
            <img
              className="rounded-full border-2 border-blue-500 w-9 h-9 md:w-10 md:h-10"
              src={images.franky}
              alt="Poster"
            />
            <div className="flex flex-col">
              <h4 className="font-bold italic text-dark-soft text-sm md:text-base">
                Neoryte
              </h4>
              <div className="flex items-center gap-x-2">
                <span className="bg-[#36B37E] w-fit opacity-20 p-1.5 rounded-full">
                  {" "}
                  <BsCheckLg className="w-1.5 h-1.5 text[#36B37E]" />{" "}
                </span>
                <span className="italic text-dark-light text-xs md:text-sm">
                  Verified
                </span>
              </div>
            </div>
          </div>
          <span className="font-bold text-dark-light italic text-sm md:text-base">
            20 Oct
          </span>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
