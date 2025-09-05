import Frame1 from "../../assets/Frame1.png";
import Frame2 from "../../assets/Frame2.png";
import Frame3 from "../../assets/Frame3.png";
import Frame4 from "../../assets/Frame4.png";
import vector from "../../assets/Vector.png";
import Frame6 from "../../assets/Frame6.png";
import vector2 from "../../assets/Vector2.png";
import Frame8 from "../../assets/Frame8.png";
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
    { bg: "#768A9B", icon: Frame1, label: "Achievement 1", img: Frame2 },
    { bg: "#A67873", icon: Frame3, label: "Achievement 2", img: Frame4 },
    { bg: "#5D8C7A", icon: vector, label: "Achievement 3", img: Frame6 },
    { bg: "#C6785B", icon: vector2, label: "Achievement 4", img: Frame8 },
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
