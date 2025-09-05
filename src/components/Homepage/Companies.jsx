import React from "react";

// Importing images
import Vendasta from "../../assets/vendasta.png";
import DataAI from "../../assets/dataimg.png";
import ActStudent from "../../assets/Actimg.png";
import CA from "../../assets/Caimg.png";
import IBM from "../../assets/Ibmimg.png";
import API from "../../assets/Apiimg.jpg";
import FortuneBrands from "../../assets/Fortuneimg.png";
import Sunnybrook from "../../assets/Sunnyimg.png";
import ATB from "../../assets/Atbimg.png";
import Divvy from "../../assets/divvyimg.png";
import FlightCentre from "../../assets/Flight.jpg";

const companies = [
  { logo: Vendasta, learning: "Leadership & Product Strategy" },
  { logo: DataAI, learning: "AI & Data Analytics" },
  { logo: ActStudent, learning: "Student Engagement" },
  { logo: CA, learning: "Accounting Automation" },
  { logo: IBM, learning: "Enterprise Solutions" },
  { logo: API, learning: "API Integration" },
  { logo: FortuneBrands, learning: "Brand Management" },
  { logo: Sunnybrook, learning: "Healthcare Innovations" },
  { logo: ATB, learning: "Financial Solutions" },
  { logo: Divvy, learning: "Expense Management" },
  { logo: FlightCentre, learning: "Travel Operations" },
];

const Companies = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center bg-[#FFF6E9] py-20 relative overflow-hidden">
      {/* Rain Effect */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        {Array.from({ length: 50 }).map((_, i) => (
          <span
            key={i}
            className="absolute text-gray-200 text-xl animate-fall"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              fontSize: `${Math.random() * 24 + 12}px`,
            }}
          >
            LEARNINGS
          </span>
        ))}
      </div>

      {/* First line: left-to-right */}
      <div className="flex gap-10 animate-marquee whitespace-nowrap z-10">
        {companies.slice(0, 6).map((c, index) => (
          <div key={index} className="flex flex-col items-center gap-2">
            <img
              src={c.logo}
              alt={`logo-${index}`}
              className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 object-contain rounded-full shadow-md hover:scale-105 transition"
            />
            <p className="text-center text-sm md:text-base font-semibold text-gray-700">
              {c.learning}
            </p>
          </div>
        ))}
      </div>

      {/* Second line: right-to-left */}
      <div className="flex gap-10 animate-marquee-reverse whitespace-nowrap z-10 mt-10">
        {companies
          .slice(6)
          .reverse()
          .map((c, index) => (
            <div key={index} className="flex flex-col items-center gap-2">
              <img
                src={c.logo}
                alt={`logo-rev-${index}`}
                className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 object-contain rounded-full shadow-md hover:scale-105 transition"
              />
              <p className="text-center text-sm md:text-base font-semibold text-gray-700">
                {c.learning}
              </p>
            </div>
          ))}
      </div>

      {/* Tailwind keyframes animation */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes marquee-reverse {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }
          .animate-marquee {
            display: flex;
            animation: marquee 25s linear infinite;
          }
          .animate-marquee-reverse {
            display: flex;
            animation: marquee-reverse 25s linear infinite;
          }
          @keyframes fall {
            0% { transform: translateY(-100%); opacity: 0; }
            50% { opacity: 0.5; }
            100% { transform: translateY(110%); opacity: 0; }
          }
          .animate-fall {
            animation: fall 7s linear infinite;
            white-space: nowrap;
          }
        `}
      </style>
    </div>
  );
};

export default Companies;
