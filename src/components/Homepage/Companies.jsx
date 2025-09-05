import React from "react";

// Importing images
import vendasta from "../../assets/vendasta.png";
import dataai from "../../assets/dataimg.png";
import actStudent from "../../assets/actimg.png";
import ca from "../../assets/caimg.png";
import ibm from "../../assets/Ibmimg.png";
import api from "../../assets/apiimg.jpg";
import fortuneBrands from "../../assets/fortuneimg.png";
import sunnybrook from "../../assets/sunnyimg.png";
import atb from "../../assets/atbimg.png";
import divvy from "../../assets/divvyimg.png";
import flightCentre from "../../assets/Flight.jpg";

const companies = [
  { logo: vendasta, learning: "Leadership & Product Strategy" },
  { logo: dataai, learning: "AI & Data Analytics" },
  { logo: actStudent, learning: "Student Engagement" },
  { logo: ca, learning: "Accounting Automation" },
  { logo: ibm, learning: "Enterprise Solutions" },
  { logo: api, learning: "API Integration" },
  { logo: fortuneBrands, learning: "Brand Management" },
  { logo: sunnybrook, learning: "Healthcare Innovations" },
  { logo: atb, learning: "Financial Solutions" },
  { logo: divvy, learning: "Expense Management" },
  { logo: flightCentre, learning: "Travel Operations" },
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
