import frame1 from "../../assets/frame1.png";
import frame2 from "../../assets/frame2.png";
import frame3 from "../../assets/frame3.png";
import frame4 from "../../assets/frame4.png";
import vector from "../../assets/vector.png";
import frame6 from "../../assets/frame6.png";
import vector2 from "../../assets/vector2.png";
import frame8 from "../../assets/frame8.png";

import { useEffect, useState } from "react";

export default function StatsSection() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("stats-section");
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          setVisible(true);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const cards = [
    { bg: "#768A9B", icon: frame1, label: "Achievement 1", img: frame2 },
    { bg: "#A67873", icon: frame3, label: "Achievement 2", img: frame4 },
    { bg: "#5D8C7A", icon: vector, label: "Achievement 3", img: frame6 },
    { bg: "#C6785B", icon: vector2, label: "Achievement 4", img: frame8 },
  ];

  return (
    <section
      id="stats-section"
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 px-6 md:px-16 py-10 place-items-center"
    >
      {cards.map((card, i) => (
        <div
          key={i}
          tabIndex={0} // keyboard focusable
          role="button" // accessibility
          aria-label={card.label}
          className={`flex flex-col items-center justify-center 
            w-[90%] sm:w-[260px] md:w-[280px] h-[220px] sm:h-[250px] 
            rounded-[20px] text-white text-center shadow-md gap-4
            transform transition duration-500 hover:scale-105 hover:shadow-xl focus:ring-4 focus:ring-white/40 outline-none
            ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          style={{
            backgroundColor: card.bg,
            transitionDelay: `${i * 0.2}s`,
          }}
        >
          <img
            src={card.icon}
            alt={`${card.label} icon`}
            className="w-[60px] h-[60px] md:w-[70px] md:h-[70px]"
          />
          <img
            src={card.img}
            alt={`${card.label} value`}
            className="w-[100px] h-[90px] md:w-[120px] md:h-[110px] object-contain"
          />
        </div>
      ))}
    </section>
  );
}
