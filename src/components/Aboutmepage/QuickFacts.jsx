import React from "react";
import Img1 from "../../assets/Qimg1.jpg"; // Replace with your actual images
import Img2 from "../../assets/Qimg2.jpg";
import Img3 from "../../assets/Qimg3.jpg";

export default function QuickFacts() {
  return (
    <section className="py-12 text-center">
      {/* Heading */}
      <h2
        className="inline-block px-8 py-3 text-3xl font-bold text-[#1D3557] border border-black from-[#DCE35B] to-[#45B649] rounded-tl-[20px]  "
        style={{
          background:
            "linear-gradient(85.95deg, #FCFFD4 42.41%, #97997F 99.38%)",
        }}
      >
        Quick Facts
      </h2>

      {/* Images Grid */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-20">
        {/* Card 1 */}
        <div className="p-3 rounded-[20px] bg-pink-100 shadow-lg">
          <img
            src={Img1}
            alt="Family in Toronto"
            className="w-full h-[380px] object-cover rounded-[20px] transition-transform duration-300 ease-in-out
              hover:scale-105 hover:shadow-2xl hover:brightness-105"
          />
        </div>

        {/* Card 2 */}
        <div
          className="p-3 rounded-[20px] bg-blue-100 shadow-lg transition-transform duration-300 ease-in-out
              hover:scale-105 hover:shadow-2xl hover:brightness-105"
        >
          <img
            src={Img2}
            alt="On a bike"
            className="w-full h-[380px] object-cover rounded-[20px] transition-transform duration-300 ease-in-out
              hover:scale-105 hover:shadow-2xl hover:brightness-105"
          />
        </div>

        {/* Card 3 */}
        <div className="p-3 rounded-[20px] bg-yellow-100 shadow-lg">
          <img
            src={Img3}
            alt="Celebrating with daughter"
            className="w-full h-[380px] object-cover rounded-[20px] transition-transform duration-300 ease-in-out
              hover:scale-105 hover:shadow-2xl hover:brightness-105"
          />
        </div>
      </div>
    </section>
  );
}
