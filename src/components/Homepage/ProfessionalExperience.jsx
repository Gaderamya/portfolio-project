import React, { useEffect, useState } from "react";
import profileimg from "../../assets/group2.png";

export default function ProfessionalExperience() {
  const [visible, setVisible] = useState(false);

  // Simple scroll detection to trigger animation
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("professional-section");
      if (section) {
        const top = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (top < windowHeight - 100) setVisible(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="professional-section"
      className="w-full bg-white py-12 px-6 md:px-16 lg:px-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-10">
        {/* Left Content */}
        <div
          className={`flex-1 transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Title */}
          <h2
            style={{
              background:
                "linear-gradient(85.95deg, #FCFFD4 42.41%, #97997F 99.38%)",
            }}
            className="w-[500px] h-[60px] text-[#244C62] font-bold text-2xl sm:text-3xl md:text-4xl rounded-tl-[20px] rounded-tr-[12px] border border-[#244C62]/60 flex items-center gap-[10px] px-[30px] py-[10px] shadow"
          >
            Professional Experience
          </h2>

          {/* Heading */}
          <h3 className="mt-4 font-roboto font-semibold text-[24px] md:text-[30px] leading-[30px] md:leading-[42px] text-transparent bg-clip-text bg-gradient-to-r from-black to-black">
            Enterprise AI & Data Transformation That Drives Results
          </h3>

          {/* Paragraph */}
          <p className="mt-8 w-[700px] font-poppins font-normal text-base sm:text-xl md:text-[28px] text-black-700 leading-8 sm:leading-9 md:leading-10">
            I architect enterprise-scale data ecosystems and AI/ML platforms
            that transform how B2B companies, B2C organizations, and marketplace
            platforms compete and grow. Over 15+ years, I've delivered
            measurable P&L transformation through advanced analytics, predictive
            modeling, and data-driven operational optimization across Health
            Tech, EdTech, Information Technology, and Travel sectors — proving
            that strategic data implementation creates sustainable competitive
            advantage regardless of business model or industry vertical.
          </p>

          {/* Button */}
          <button
            onClick={() => (window.location.href = "/portfolio")}
            className="mt-6 inline-flex items-center justify-center gap-2 w-[165px] h-[49px] bg-[#0D9276] rounded-[40px] border-[8px] border-[#0D92761A] px-6 py-3 transition duration-200 hover:bg-[#0b7a61]"
          >
            <span className="font-roboto font-extrabold text-[13px] leading-[24px] tracking-[0%] text-center text-white">
              Know More
            </span>
            <span className="w-[20px] h-[18px] flex items-center justify-center rotate-[-40deg] text-white">
              →
            </span>
          </button>
        </div>

        {/* Right Content - Image */}
        <div
          className={`mt-10 flex-1 flex justify-center lg:justify-end transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="w-[450px] h-[570px] overflow-hidden shadow-md transform hover:scale-105 transition duration-500">
            <img
              src={profileimg}
              alt="Professional"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
