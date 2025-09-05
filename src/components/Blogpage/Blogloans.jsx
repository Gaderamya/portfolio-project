import React from "react";
import blogimg2 from "../../assets/blogimg2.png";
import blogimg3 from "../../assets/blogimg3.png";
import blogimg4 from "../../assets/blogimg4.png";

export default function ProfessionalExperience() {
  return (
    <section className="w-full bg-white py-12 px-6 md:px-16 lg:px-24">
      <div className=" flex flex-col lg:flex-row items-center lg:items-start gap-10">
        {/* Left Content */}
        <div className="flex-1">
          {/* Heading */}
          <h3 className="mt-20 font-roboto font-semibold text-[20px] md:text-[30px] leading-[30px] md:leading-[42px] text-transparent bg-clip-text bg-gradient-to-r from-black to-black">
            How I Paid Off My Student Loans Before Graduation – Featured on Chai
            & Coaching
          </h3>

          {/* Paragraph */}
          <p
            className="mt-4 w-[700px] font-poppins font-normal 
             text-base sm:text-xl md:text-[22px] 
             text-black-700 "
          >
            In this conversation with Chai & Coaching, I share how I managed to
            pay off my student loans before graduating—and the financial habits
            that made it possible. From earning my MBA in the U.S. to completing
            the PLD at Harvard and eventually settling in Canada, I offer
            real-world advice for international students looking to take control
            of their finances early.
          </p>

          {/* Button */}
          <button
            onClick={() =>
              window.open(
                "https://youtu.be/oph5_buhZ9A?si=wl_u58n9GxkbOVGC",
                "_blank"
              )
            }
            className="
    mt-6 inline-flex items-center justify-center gap-2
    w-[165px] h-[49px]
    bg-[#0D9276] 
    rounded-[40px] 
    border-[8px] border-[#0D92761A] 
    px-6 py-3 
    transition duration-200
    hover:bg-[#0b7a61] 
  "
          >
            <span
              className="
      font-roboto font-extrabold text-[13px] leading-[24px] 
      tracking-[0%] text-center text-white
    "
            >
              Watch Video
            </span>
          </button>
        </div>

        {/* Right Content - Image */}

        <div className="mt-10 flex-1 flex justify-center lg:justify-end">
          <div className=" h-[300px] overflow-hidden shadow-md">
            <img
              src={blogimg2}
              alt="Professional"
              className="w-full h-full object-cover transition-transform duration-300 ease-in-out
              hover:scale-105 hover:shadow-2xl hover:brightness-105"
            />
          </div>
        </div>
      </div>

      {/* card2 */}

      <div className=" w-full h-[550px] mt-[50px]  flex flex-col lg:flex-row items-center lg:items-start gap-10 bg-[#FFF6E9]">
        {/* Left Content */}
        <div className="mt-[120px] flex-1 flex justify-center ">
          <div className=" h-[300px] w-[500px] overflow-hidden shadow-md ml-[-50px]">
            <img
              src={blogimg3}
              alt="Professional"
              className="w-full h-full object-cover transition-transform duration-300 ease-in-out
              hover:scale-105 hover:shadow-2xl hover:brightness-105"
            />
          </div>
        </div>

        {/* Right Content - Image */}
        <div className="flex-1 mt-[60px]">
          {/* Heading */}
          <h3 className="mt-20 font-roboto font-semibold text-[20px] md:text-[30px] leading-[30px] md:leading-[42px] text-transparent bg-clip-text bg-gradient-to-r from-black to-black">
            The Rise of the CDAO: Turning Data into a Growth Engine
          </h3>

          {/* Paragraph */}
          <p
            className="mt-4 w-[700px] font-poppins font-normal 
             text-base sm:text-xl md:text-[22px] 
             text-black-700 "
          >
            As a data, AI and product leader, I’ve seen the Chief Data &
            Analytics Officer role evolve from managing systems to shaping
            strategy. In this article, I share why today’s CDAOs are key to
            driving growth, innovation, and competitive advantage—and how
            aligning data with decision-making is the game-changer most
            businesses still miss.
          </p>

          {/* Button */}
          <button
            onClick={() =>
              window.open(
                " https://www.linkedin.com/pulse/evolution-chief-data-analytics-officercdao-unlocking-pranay-agarwalhotzc/?trackingId=kdqbTIUwSJaiqSjynl3sbg%3D%3D ",
                "_blank"
              )
            }
            className="
    mt-6 inline-flex items-center justify-center gap-2
    w-[165px] h-[49px]
    bg-[#0D9276] 
    rounded-[40px] 
    border-[8px] border-[#0D92761A] 
    px-6 py-3 
    transition duration-200
    hover:bg-[#0b7a61] 
  "
          >
            <span
              className="
      font-roboto font-extrabold text-[13px] leading-[24px] 
      tracking-[0%] text-center text-white
    "
            >
              Read More
            </span>
          </button>
        </div>
      </div>

      {/* card3 */}
      <div className="w-full flex flex-col mt-[50px] lg:flex-row items-center  gap-10">
        {/* Left Content */}
        <div className="flex-1">
          {/* Heading */}
          <h3 className="mt-20 font-roboto font-semibold text-[20px] md:text-[30px] leading-[30px] md:leading-[42px] text-transparent bg-clip-text bg-gradient-to-r from-black to-black">
            From H1B to Canadian PR: My Journey from a U.S. MBA to Life in
            Canada
          </h3>

          {/* Paragraph */}
          <p
            className="mt-4 w-[700px] font-poppins font-normal 
             text-base sm:text-xl md:text-[22px] 
             text-black-700 "
          >
            In this video, I share my personal journey—from pursuing an MBA in
            the U.S. to navigating the H1B visa system, and eventually securing
            Canadian Permanent Residency.If you're an international student
            exploring long-term career and residency options after graduation,
            this journey offers practical insights and lessons you won’t find in
            brochures.
          </p>

          {/* Button */}
          <button
            onClick={() =>
              window.open(
                "Link: https://youtu.be/jq0sCkVRWG8?si=7wegM_4CtA1qgEAO ",
                "_blank"
              )
            }
            className="
    mt-6 inline-flex items-center justify-center gap-2
    w-[165px] h-[49px]
    bg-[#0D9276] 
    rounded-[40px] 
    border-[8px] border-[#0D92761A] 
    px-6 py-3 
    transition duration-200
    hover:bg-[#0b7a61] 
  "
          >
            <span
              className="
      font-roboto font-extrabold text-[13px] leading-[24px] 
      tracking-[0%] text-center text-white
    "
            >
              Watch Video
            </span>
          </button>
        </div>

        {/* Right Content - Image */}

        <div className="mt-10 flex-1 flex justify-center lg:justify-end">
          <div className=" h-[300px] overflow-hidden shadow-md">
            <img
              src={blogimg4}
              alt="Professional"
              className="w-full h-full object-cover transition-transform duration-300 ease-in-out
              hover:scale-105 hover:shadow-2xl hover:brightness-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
