import React from "react";
import beginningsImg from "../../assets/beginningsimg.png";
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Beginnings() {
  return (
    <section
      id="about"
      className="w-full mx-auto px-6 py-16 bg-[#FAF3EB] rounded-xl mt-[20px]"
    >
      <h2
        style={{
          background:
            "linear-gradient(85.95deg, #FCFFD4 42.41%, #97997F 99.38%)",
        }}
        className="w-[300px] h-[60px] text-[#27677D] font-bold text-3xl sm:text-3xl md:text-5xl rounded-tl-[20px] rounded-tr-[12px] border border-[#244C62]/60 flex items-center gap-[10px] px-[30px] py-[50px] shadow ml-[100px] mt-[140px]"
      >
        About Me
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Image */}
        <div className="relative flex-shrink-0">
          <div className="p-4 rounded-[30px]">
            <img
              src={beginningsImg}
              alt="The Beginnings"
              className="w-[80vw] max-w-[439px] h-auto object-cover 
                rounded-tl-[80px] rounded-tr-[8px] 
                rounded-bl-[8px] rounded-br-[80px] 
                md:relative md:left-[150px]
                transition-transform duration-300 ease-in-out 
                hover:scale-105 hover:shadow-xl hover:brightness-105"
            />
          </div>
        </div>

        {/* Right Content */}
        <div>
          <div className="w-full md:w-[90%] max-w-xl text-center md:text-left md:top-[220px] ml-[-120px]">
            <h3 className="text-xl md:text-4xl lg:text-[44px] font-bold text-[#27677D]">
              <span
                className="block w-full md:w-[400px] h-[70px] px-[10px] py-2 
                  rounded-tl-[25px] rounded-br-[3px] border-[0.6px] 
                  bg-gradient-to-r from-[#FCFFD4] to-[#97997F] 
                  shadow-md text-center border-black
                  transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
              >
                The Beginnings
              </span>
            </h3>

            <p className="md:text-[24px] w-[700px] font-roboto font-semibold mt-[50px] leading-[24px] md:leading-[40px] text-black">
              Let’s be honest — no kid dreams of becoming a product, data and AI
              specialist. Astronaut? Sure. Rockstar? Obviously. But “someone who
              builds predictive models to guide executive decisions”? Not so
              much. Mine started, quite unexpectedly, with a broken school
              computer lab, a stack of Excel sheets, and an urge to figure out
              why nothing worked the way it was supposed to. That tiny itch — to
              untangle messy problems — turned into a full-blown obsession. Fast
              forward a few years, and I was neck-deep in Python scripts, SQL
              queries, and enough post-it notes to wallpaper a small house.
              Somewhere along the way, I realized: I didn’t just like finding
              answers. I liked asking the right questions even more.
            </p>
          </div>
        </div>
        <Link
          to="/Contact"
          className="fixed bottom-6 right-6 flex items-center gap-2 bg-[#C9972B] text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-[#b58624] z-50"
        >
          <FaPhoneAlt /> Reach Out
        </Link>
      </div>
    </section>
  );
}
