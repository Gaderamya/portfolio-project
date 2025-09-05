import React, { useEffect, useState } from "react";
import strategyImg from "../../assets/strategyicon.png";
import productImg from "../../assets/producticon.png";
import kpiImg from "../../assets/kpiicon.png";
import dataImg from "../../assets/dataicon.png";
import skillimg2 from "../../assets/skillsimg3.png";

const Expertise = () => {
  const expertiseData = [
    {
      img: strategyImg,
      title: "Strategy & Direction",
      description:
        "I create product strategies aligned with business goals and user needs, ensuring long-term growth.",
    },
    {
      img: productImg,
      title: "Product-Market Fit & Forecasting",
      description:
        "I validate products against real-world needs to ensure relevance, adoption, and value.",
    },
    {
      img: kpiImg,
      title: "KPI & Performance Tracking",
      description:
        "I track key metrics to drive continuous improvement and align with business performance goals.",
    },
    {
      img: dataImg,
      title: "Data-Driven Decision Making",
      description:
        "I convert complex data into clear insights, helping teams make informed decisions with confidence.",
    },
  ];

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("expertise-section");
      if (section) {
        const top = section.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) setVisible(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="expertise-section"
      className="w-full min-h-screen flex flex-col items-center justify-start bg-white pt-[100px] overflow-hidden"
    >
      {/* Section Heading */}
      <h2 className="h-[48px] text-[#27677D] font-roboto font-bold text-[42px] leading-[150%] opacity-100 flex items-center justify-center mb-4">
        My Expertise
      </h2>

      <h1 className="w-[672px] h-[60px] text-[36px] font-bold text-[#27677D] bg-gradient-to-r from-[#FCFFD4] to-[#97997F] px-[35px] py-[20px] rounded-tl-[20px] border border-[#27677D] shadow-md flex items-center justify-center mb-12">
        Product Strategist & Data Analyst
      </h1>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 w-[1390px] relative">
        {expertiseData.map((item, index) => (
          <div
            key={index}
            className={`relative w-[316px] h-[323px] bg-[#FFE5B4] rounded-xl p-6 transition-transform duration-700 shadow-lg hover:scale-105 hover:shadow-2xl ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: `${index * 150}ms` }}
          >
            {/* Floating Icon */}
            <div className="absolute top-1 left-2 w-[96px] h-[70px] flex items-center justify-center rounded-[10.67px] border-[#27677D] p-[13.33px] bg-white shadow-[0px_0px_16px_0px_#0000001A] hover:shadow-[0_0_20px_5px_#27677D] transition-all duration-500">
              <img
                src={item.img}
                alt={item.title}
                className="w-30 h-30 sm:w-30 sm:h-30 md:w-30 md:h-24 object-cover"
              />
            </div>

            {/* Title with typewriter effect */}
            <h3 className="mt-[90px] w-[290px] h-[50px] text-[30px] font-bold text-[#282938] font-roboto">
              <span className="overflow-hidden border-r-2 border-[#27677D] whitespace-nowrap animate-type">
                {item.title}
              </span>
            </h3>

            {/* Description */}
            <p className="w-[278px] h-[72px] mt-[65px] text-[16px] font-bold font-['Roboto'] tracking-[0%] opacity-100">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      {/* Background Image */}
      <div className="relative w-[1300px] h-[923px] ml-[40px] overflow-hidden rounded-[16px] mt-16">
        <img
          src={skillimg2}
          alt="Celebration by the water"
          className="w-full h-full object-cover bg-[#EBCD9B]"
        />
      </div>

      {/* Tailwind keyframes for typewriter */}
      <style>
        {`
          @keyframes type {
            from { width: 0 }
            to { width: 100% }
          }
          .animate-type {
            display: inline-block;
            white-space: nowrap;
            overflow: hidden;
            animation: type 2s steps(30) forwards;
          }
        `}
      </style>
    </section>
  );
};

export default Expertise;
