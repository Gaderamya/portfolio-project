import React from "react";
import nutImage from "../../assets/nut.png"; // <-- replace with your image path

const AboutMeSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-8 md:px-20 py-16 gap-10">
      {/* Left Side - Text */}

      <div className="w-[789px] h-[388px]  left-[102px]">
        <h2 className="w-[709px] h-[54px] font-roboto font-medium text-[36px] leading-[150%] tracking-[0] opacity-100 relative left-[3px] mt-[40px]">
          Me in a Nutshell
        </h2>

        <p className="md:text-[28px] w-[895px] font-roboto mt-[10px] leading-[24px] md:leading-[40px] text-black">
          I’m a Product Person and AI nerd who accidentally turned curiosity
          into a career. I’ve lived, studied and worked in 7 countries across 3
          continents, built things with data, broke a few dashboards, and
          somehow made it all look intentional. Most of my job involves turning
          chaos into clarity, asking “why” too many times, and making charts
          that actually mean something. When I’m not doing that, I’m upside down
          in a yoga pose, trying to keep my plants alive, or quietly judging
          poorly labeled pie charts.
        </p>
      </div>

      {/* Right Side - Image */}
      <div className="md:w-1/2 flex justify-center">
        <div className=" p-3 rounded-[20px]">
          <img
            src={nutImage}
            alt="Me"
            className="w-[90%] max-w-[450px] h-auto object-cover 
              rounded-tl-[80px] rounded-tr-[8px] 
              rounded-bl-[8px] rounded-br-[80px]
              transition-transform duration-300 ease-in-out
              hover:scale-105 hover:shadow-2xl hover:brightness-105"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
