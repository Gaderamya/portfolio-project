import { FaPhoneAlt } from "react-icons/fa";
import React from "react";
import portfolioimg1 from "../../assets/portfolioimg1.png";
import { Link } from "react-router-dom";

export default function Portfolio() {
  return (
    <section
      id="about"
      className="w-full mx-auto px-6 py-16  rounded-xl  overflow-x-hidden"
    >
      <div className="grid grid-cols-1 md:grid-cols-2  items-center">
        {/* Left Image */}
        <div className="relative flex justify-center md:justify-start mt-[130px]">
          <div className="p-4 rounded-[30px]">
            {/* Uncomment below and replace with your image */}
            <img
              src={portfolioimg1}
              alt="The Beginnings"
              className="w-full max-w-[478px] h-auto object-cover  ml-[120px]
             rounded-tl-[150%] rounded-tr-[150%] rounded-bl-[150%] rounded-br-[150%] border-[6px] border-[#838383] 
             shadow-[0_14px_16px_0_rgba(0,0,0,0.25)] transition-transform duration-300 ease-in-out
              hover:scale-105 hover:shadow-2xl hover:brightness-105"
            />
          </div>
        </div>

        {/* Right Content */}
        <div className="flex flex-col justify-spacebetween">
          {/* Heading */}
          <h3 className="text-xl md:text-4xl lg:text-[44px] font-bold text-[#27677D] mb-6">
            <span
              className="block w-full md:w-[400px] h-[70px] px-4 py-2 
              rounded-tl-[25px] rounded-br-[3px] border-[0.6px] 
              bg-gradient-to-r from-[#FCFFD4] to-[#97997F] 
              shadow-md text-center border-black transition-transform duration-300 ease-in-out
              hover:scale-105 hover:shadow-2xl hover:brightness-105"
            >
              Portfolio
            </span>
          </h3>

          {/* Paragraph */}
          <p className="md:text-[24px] font-roboto font-semibold leading-[28px] md:leading-[40px] text-black max-w-full md:max-w-[700px]">
            Explore how I’ve blended innovation and impact—professionally and
            personally. From leading data, AI, and product strategies at
            startups and Fortune 500s to building solutions that serve millions
            globally, my work is rooted in purpose. Outside the boardroom, I’ve
            launched education initiatives and served on advisory boards to
            create lasting social value.
          </p>
        </div>
      </div>
      <Link
        to="/Contact"
        className="fixed bottom-6 right-6 flex items-center gap-2 bg-[#C9972B] text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-[#b58624] z-50"
      >
        <FaPhoneAlt /> Reach Out
      </Link>
    </section>
  );
}
