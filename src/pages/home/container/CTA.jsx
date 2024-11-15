import React from "react";
import { images } from "../../../constants";

const CTA = () => {
  return (
    <>
      <svg
        className="w-full h-auto max-h-40 translate-y-[1px]"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 2160 263"
      >
        <path
          fill="#0D2436"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M2160 262.5H0V0C360 80 720 120 1080 120C1440 120 1800 80 2160 0V262.5Z"
        ></path>
      </svg>

      <section className=" relative bg-dark-hard px-5">
        <div className="container grid grid-cols-12 mx-auto py-10 md:pb-20 lg:place-items-center">
          <div className="col-span-12 lg:col-span-6">
            <h2 className="text-white font-roboto font-bold text-2xl text-center mt-10 md:text-4xl md:text-center md:leading-normal lg:text-left lg:text-[28px]">
              Subscribe to our weekly newsletter
            </h2>
            <div className="w-full max-w-[494px] mt-12 space-y-3 mx-auto md:space-y-0 md:flex md:items-center md:space-x-2 lg:mx-0">
              <input
                type="text"
                className="px-4 py-3 rounded-lg w-full placeholder:text-dark-light"
                placeholder="Enter your E-mail address"
              />
              <button className="px-4 py-3 rounded-lg w-full bg-primary text-white font-bold md:w-fit md:whitespace-nowrap ">
                Get Started
              </button>
            </div>
            <p className="text-dark-light text-sm leading-7 mt-6 md:text-center md:text-base lg:text-left">
              <span className="font-bold italic text-[#B3BAC5] md:not-italic md:font-normal md:tetxt-dark-light">
                Get a weekly update
              </span>{" "}
              on health related ncontents and how to live a healthy life today,
              also some fun facts about about Physiology.
            </p>
          </div>
          <div className="col-span-12 hidden mt-[70px] md:block md:order-first lg:order-last lg:col-span-6">
            <div className="w-3/4 mx-auto relative ">
              <div className="w-1/2 h-1/2 bg-[#FC5A5A] rounded-lg absolute top-[10%] -right-[8%]" />
              <div className="w-1/2 h-1/2 bg-white opacity-[.06] rounded-lg absolute -bottom-[10%] -left-[8%]" />
              <div className="w-full bg-white p-3 z-[1] rounded-xl relative ">
                <img
                  src={images.CtaImage}
                  alt="Facebook"
                  className="w-full object-cover object-center h-auto md:h-52 lg:h-48 xl:h-60"
                />
                <div className="p-5">
                  <h2 className="font-roboto font-bold font text-xl text-dark-soft md:text-2xl lg:text-[28px]">
                    Follow us on our socials
                  </h2>
                  <p className="text-dark-light mt-3  text-sm md:text-lg text-center">
                    Be the first to see our post across our social medial
                    handles by following us and do not forget to turn on
                    notification bell
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CTA;
