import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import aboutImg from "../../assets/Aboutmeimg.png";
import person1 from "../../assets/person1.png";
import person2 from "../../assets/person2.jpg";
import person3 from "../../assets/person3.jpg";
import person4 from "../../assets/person4.jpg";
import person5 from "../../assets/person5.jpg";
import Footer from "../footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function AboutSection() {
  const [visible, setVisible] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".fade-in");
      const temp = [];
      elements.forEach((el, idx) => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) temp.push(idx);
      });
      setVisible(temp);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const testimonials = [
    {
      text: "Pranay’s strategic mindset, data expertise, and collaborative approach drive impactful results—an asset in BI, Product, or Data & AI.",
      name: "Samantha Poons",
      title: "ATB Financial - Product Person",
      img: person1,
      bg: "bg-purple-100",
    },
    {
      text: "During his time as my manager at Vendasta, I admired Pranay’s professionalism, steady leadership, and unwavering support—a true mark of a genuine leader.",
      name: "Paige Sutherland",
      title: "7Shifts - Product Marketing",
      img: person2,
      bg: "bg-blue-100",
    },
    {
      text: "Pranay greatly influenced my growth, guiding me in Tableau and Salesforce while sharpening my problem-solving and data skills. His leadership makes him an exceptional asset to any organization.",
      name: "Randy Mims",
      title: "ACT - Scrum Master",
      img: person3,
      bg: "bg-pink-100",
    },
    {
      text: "Pranay stands out for asking the right strategic questions, reframing problems, and delivering smarter solutions—making him a trusted, impactful partner for any leader.",
      name: "Simmy Ziv-el",
      title: "FineTune by Prometric - Chief Strategy Officer",
      img: person4,
      bg: "bg-green-100",
    },
    {
      text: "I’ve known Pranay for over three years, seeing him rise from intern to Director while earning an MBA and completing Harvard’s leadership program—ranking in the top 5% for initiative, analytics, and leadership.",
      name: "Jim Larimore",
      title: "EdTech Consultant",
      img: person5,
      bg: "bg-yellow-100",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <>
      <section className="relative w-full bg-[#FFFBF4] py-12 px-6 md:px-16 lg:px-24 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#FFF6E9] to-[#E3F6F5] opacity-30 animate-pulse-slow -z-10"></div>

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-10">
          {/* Left Content */}
          <div className="flex-1">
            <h2
              style={{
                background:
                  "linear-gradient(85.95deg, #FCFFD4 42.41%, #97997F 99.38%)",
              }}
              className="w-[300px] h-[60px] text-[#27677D] font-bold text-2xl sm:text-3xl md:text-4xl rounded-tl-[20px] rounded-tr-[12px] border border-[#244C62]/60 flex items-center gap-[10px] px-[30px] py-[10px] shadow"
            >
              About Me
            </h2>

            <p className="mt-8 w-[700px] font-poppins font-semibold text-xl md:text-[28px] text-black-700 leading-8 sm:leading-9 md:leading-10">
              I'm a Data, AI, and Product Leader based in North America. Since
              2007, I’ve helped businesses make smarter, faster decisions
              through data-driven strategies. I specialize in blending product
              vision with actionable insights powered by AI and analytics.
              Whether mapping out growth or decoding patterns, I turn complexity
              into clarity. When I’m not deep in data, I’m exploring new places
              with my daughter—my favorite co-adventurer.
            </p>

            <button
              onClick={() => (window.location.href = "/about")}
              className="mt-6 inline-flex items-center justify-center gap-2 w-[165px] h-[49px] bg-[#0D9276] rounded-[40px] border-[8px] border-[#0D92761A] px-6 py-3 transition duration-200 hover:bg-[#0b7a61]"
            >
              <span className="font-roboto font-extrabold text-[13px] leading-[24px] tracking-[0%] text-center text-white">
                About Me
              </span>
              <span className="w-[20px] h-[18px] flex items-center justify-center rotate-[-40deg] text-white">
                →
              </span>
            </button>
          </div>

          {/* Right Content - Image */}
          <div className="mt-10 flex-1 flex justify-center lg:justify-end">
            <div className="w-[450px] h-[570px] overflow-hidden shadow-md rounded-2xl transform transition duration-700 hover:scale-105 animate-fade-up">
              <img
                src={aboutImg}
                alt="Professional"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <h2
          style={{
            background:
              "linear-gradient(85.95deg, #FCFFD4 42.41%, #97997F 99.38%)",
          }}
          className="w-[300px] h-[60px] text-[#27677D] font-bold text-2xl sm:text-3xl md:text-4xl rounded-tl-[20px] rounded-tr-[12px] border border-[#244C62]/60 flex items-center gap-[10px] px-[30px] py-[10px] shadow mt-20"
        >
          Testimonials
        </h2>

        <div className="mt-8">
          <Slider {...settings}>
            {testimonials.map((item, idx) => (
              <div key={idx} className="px-4">
                <div
                  className={`fade-in ${
                    visible.includes(idx)
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  } ${
                    item.bg
                  } p-6 rounded-lg shadow-md border border-gray-400 transition-all duration-700 transform hover:scale-105`}
                >
                  <div className="flex text-teal-700 mb-4 gap-1 text-2xl">
                    {"★★★★★"}
                  </div>
                  <p className="text-[#1C1E53] mb-6 font-roboto text-lg leading-6">
                    {item.text}
                  </p>
                  <div className="flex items-center gap-3">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-12 h-12 rounded-full border border-black object-cover"
                    />
                    <div>
                      <p className="font-bold text-gray-900">{item.name}</p>
                      <p className="font-bold text-sm text-gray-600">
                        {item.title}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      <Footer />

      {/* Tailwind Animations */}
      <style>
        {`
          @keyframes fadeUp {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-up {
            animation: fadeUp 1s ease forwards;
          }
          .animate-pulse-slow {
            animation: pulse 6s ease-in-out infinite;
          }
        `}
      </style>
    </>
  );
}
