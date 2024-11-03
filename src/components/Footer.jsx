import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { images } from "../constants";

const Footer = () => {
  return (
    <section className="bg-dark-hard">
      <footer className="container mx-auto grid grid-cols-10 px-5 py-10 gap-y-10 gap-x-5 md:pt-20 md:grid-cols-12 lg:grid-cols-10 lg:gap-x-10">
        <div className="col-span-5  md:col-span-4 lg:col-span-2">
          <h3 className="text-dark-light font-bold md:text-lg">Products</h3>
          <ul className="text-[#959EAD] text-sm mt-5 space-y-4 md:text-base">
            <li>
              {" "}
              <a href="/">Landing Page</a>
            </li>
            <li>
              {" "}
              <a href="/">Fearures</a>
            </li>
            <li>
              {" "}
              <a href="/">Documentations</a>
            </li>
            <li>
              {" "}
              <a href="/">Pricing</a>
            </li>
          </ul>
        </div>
        <div className="col-span-5 md:col-span-4 lg:col-span-2">
          <h3 className="text-dark-light font-bold md:text-lg">Services</h3>
          <ul className="text-[#959EAD] text-sm mt-5 space-y-4">
            <li>
              {" "}
              <a href="/">Landing Page</a>
            </li>
            <li>
              {" "}
              <a href="/">Fearures</a>
            </li>
            <li>
              {" "}
              <a href="/">Documentations</a>
            </li>
            <li>
              {" "}
              <a href="/">Pricing</a>
            </li>
          </ul>
        </div>
        <div className="col-span-5 md:col-span-4 md:col-start-5 lg:col-span-2 lg:col-start-auto">
          <h3 className="text-dark-light font-bold md:text-lg">Physiology</h3>
          <ul className="text-[#959EAD] text-sm mt-5 space-y-4">
            <li>
              {" "}
              <a href="/">Landing Page</a>
            </li>
            <li>
              {" "}
              <a href="/">Fearures</a>
            </li>
            <li>
              {" "}
              <a href="/">Documentations</a>
            </li>
            <li>
              {" "}
              <a href="/">Pricing</a>
            </li>
          </ul>
        </div>
        <div className="col-span-5 md:col-span-4 lg:col-span-2">
          <h3 className="text-dark-light font-bold md:text-lg">More</h3>
          <ul className="text-[#959EAD] text-sm mt-5 space-y-4">
            <li>
              {" "}
              <a href="/">Landing Page</a>
            </li>
            <li>
              {" "}
              <a href="/">Fearures</a>
            </li>
            <li>
              {" "}
              <a href="/">Documentations</a>
            </li>
            <li>
              {" "}
              <a href="/">Pricing</a>
            </li>
          </ul>
        </div>
        <div className="col-span-10 md:order-first md:col-span-4 lg:col-span-2">
          <img
            className="w-20 rounded-full border-2 border-white mx-auto md:mx-0 md:rounded-none md:w-28"
            src={images.frank}
            alt=""
          />
          <p className="text-sm text-dark-light text-center mt-4 md:text-left md:text-base">
            <span>&#169;</span>
            Developed by{" "}
            <span className="font-bold text-[#B3BAC5] md:not-italic md:font-normal md:tetxt-dark-light">
              Neoryte
            </span>
            , 300L Physiology student.
          </p>
          <ul className="flex justify-center items-center mt-5 space-x-4 text-gray-300 md:justify-start">
            <li>
              <a href="https://x.com/neoryte"></a>{" "}
              <FaXTwitter className="w-6 h-auto" />
            </li>
            <li>
              <a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"></a>
              <FaLinkedin className="w-6 h-auto" />
            </li>
          </ul>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
