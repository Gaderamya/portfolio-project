import React from "react";
import AboutImg from "../../assets/Aboutmeimg.png";
import personalimg1 from "../../assets/personalimg1.png";
import personalimg2 from "../../assets/personalimg2.jpg";
import personalimg3 from "../../assets/personalimg3.jpg";
import personalimg4 from "../../assets/personalimg4.jpg";
import Footer from "../footer";

export default function ProfessionalExperience() {
  const expertiseData = [
    {
      img: personalimg1,
      title: "Adventure activities",
      description:
        "I’m always up for outdoor adventures that challenge me and fuel my curiosity.",
      // background : ""
      background: "#DCBBFF78",
    },
    {
      img: personalimg2,
      title: "Socializing",
      description:
        "I value social connections and love unwinding with friends through lively gatherings and events.",
      background: "#00FFF217",
    },
    {
      img: personalimg3,
      title: "Family bonding",
      description:
        "I deeply cherish quality time with family, which keeps me grounded and balanced.",
      background: "#FF3D003D",
    },
    {
      img: personalimg4,
      title: "Traveling",
      description:
        "I enjoy exploring new cultures and destinations to gain fresh perspectives and inspiration.",
      background: "#FFF8A4",
    },
  ];
  return (
    <>
      <section className="w-full bg-FFFBF4 py-12 px-6 md:px-16 lg:px-24">
        {/* Testimonials Section */}

        <h2
          style={{
            background:
              "linear-gradient(85.95deg, #FCFFD4 42.41%, #97997F 99.38%)",
          }}
          className="w-[400px] h-[60px] 
             text-[#27677D] font-bold 
             text-2xl sm:text-3xl md:text-4xl 
             rounded-tl-[20px] rounded-tr-[12px] border border-[#244C62]/60 
             flex items-center gap-[10px] 
             px-[30px] py-[10px] shadow"
        >
          Personal Interests
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 w-full max-w-[1390px] h-auto mt-5 mx-auto">
          {expertiseData.map((item, index) => (
            <div
              key={index}
              className="relative w-full max-w-[279px] h-[388px] rounded-[16px] p-2  border-b-4 border-black shadow-md transition hover:shadow-lg mx-auto"
              style={{ backgroundColor: item.background }}
            >
              {/* Floating Icon */}
              <div
                className="absolute top-2 left-2 flex items-center justify-center 
             w-[259px] h-[242px] rounded-[22px] border-[4px] 
             shadow-lg p-1 bg-white"
              >
                {item.img && (
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover rounded-[18px] transition-transform duration-300 ease-in-out
              hover:scale-105 hover:shadow-2xl hover:brightness-105"
                  />
                )}
              </div>

              {/* Title */}
              <h3 className="mt-[250px] text-[22px] font-bold text-[#282938] font-roboto">
                {item.title}
              </h3>

              {/* Description */}
              <p className="mt-2 text-[16px] font-bold text-black font-roboto tracking-normal">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>
      <div>
        <Footer />
      </div>
    </>
  );
}
