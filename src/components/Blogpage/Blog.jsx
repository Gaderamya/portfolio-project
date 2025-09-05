// src/components/BlogHeader.jsx
import React from "react";
import blogimg1 from "../../assets/blogimg1.png";
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Blog = () => (
  <section className="bg-white min-h-screen flex flex-col  p-8">
    {/* Blog badge */}
    <h3 className="text-xl md:text-4xl lg:text-[44px] font-bold text-[#27677D] mb-6 mt-[130px]">
      <span
        className="block w-full md:w-[200px] h-[70px] px-4 py-2 
              rounded-tl-[25px] rounded-br-[3px] border-[0.6px] 
              bg-gradient-to-r from-[#FCFFD4] to-[#97997F] 
              shadow-md text-center border-black"
      >
        Blog
      </span>
    </h3>

    <div className="absoulate flex flex-col md:flex-row w-full max-w-[1068px] h-[173px] mt-[40px] ml-[214px] space-y-4 md:space-y-0 md:space-x-6">
      {/* Heading */}
      <div className="bg-white rounded shadow  flex-1 flex items-center">
        <h1 className="text-[40px] font-roboto font-semibold leading-[1.1] text-black">
          We didn’t just finish a program — we closed a defining chapter.
        </h1>
      </div>

      {/* Paragraph */}
      <div className="flex-1 flex items-center">
        <p className="text-gray-700 text-[22px] leading-relaxed ">
          July 2024, out on the water, surrounded by people who challenged and
          inspired each other, we celebrated what we’d built, what we’d learned,
          and what comes next.
        </p>
      </div>
    </div>

    {/* Group photo */}

    <div className="relative w-[1050px] h-[423px] ml-[215px]  overflow-hidden rounded-[16px] shadow-10xl ">
      <img
        src={blogimg1} // Replace with your image path
        alt="Celebration by the water"
        className="w-full h-full object-cover 
             shadow-[0_60px_16px_0_rgba(0,0,0,0.25)] transition-transform duration-300 ease-in-out
              hover:scale-105 hover:shadow-2xl hover:brightness-105"
      />
    </div>
    <Link
      to="/Contact"
      className="fixed bottom-6 right-6 flex items-center gap-2 bg-[#C9972B] text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-[#b58624] z-50"
    >
      <FaPhoneAlt /> Reach Out
    </Link>

    {/* </div> */}
  </section>
);

export default Blog;
