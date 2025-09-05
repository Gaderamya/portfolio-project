import React from "react";
import specImage from "../../assets/specimg.png";
import posttimeImage from "../../assets/posttimeimg.jpg";
import stratimg from "../../assets/stratimg.jpg"; // Replace with your actual imagestratimg

export default function Hometown() {
  return (
    <section className="px-6 md:px-20 py-16">
      {/* Home Town Section */}
      <div
        className="w-[1260px] h-[238px] opacity-100 mx-auto mb-16 text-center"
        style={{ transform: "rotate(0deg)" }}
      >
        <h2 className="text-5xl md:text-4xl font-bold mb-6">
          Home town - Toronto, Ontario, Canada,
        </h2>
        <p className="text-2xl leading-relaxed text-black md:text-[25px] ">
          Based in Toronto, Ontario, I bring a global perspective to data AI and
          product while staying grounded in Canada’s vibrant tech ecosystem.
          With years of experience helping organizations—from startups to
          Fortune 500s—make smarter, data-driven decisions, I combine strategic
          insight with real-world impact. Whether I’m building AI-driven models
          or aligning product roadmaps, I take pride in delivering solutions
          that matter—locally and worldwide.
        </p>
      </div>

      {/* Specialties Section */}
      <div className="flex mt-[100px] ml-[40px] flex-col md:flex-row items-center md:items-start gap-12 max-w-10xl mx-auto mb-16">
        {/* Image */}
        <div className="md:w-1/2 flex justify-center">
          <div className="p-3 rounded-[20px]  ">
            <img
              src={specImage}
              alt="Me"
              className="w-[460px] h-[300px] object-cover 
          rounded-tl-[60px] rounded-tr-[60px] 
          rounded-bl-[60px] rounded-br-[60px] transition-transform duration-300 ease-in-out
              hover:scale-105 hover:shadow-2xl hover:brightness-105"
            />
          </div>
        </div>

        {/* Text */}
        <div className="md:w-1/2 ml-[-120px]">
          <h3 className="text-[36px] font-bold leading-[150%] mb-4">
            Specialties
          </h3>
          <p className="text-2xl leading-relaxed text-black md:text-[25px] ">
            Turning messy ideas into clear strategies — it satisfies both my
            inner builder and my need for things to make logical sense (at all
            times). Hobbies: Lifting my own bodyweight, plating like a
            MasterChef finalist (minus the drama), and feeding friends meals
            they think I ordered in. I didn’t. I’m just that good.
          </p>
        </div>
      </div>

      <div className="flex mt-[100px] ml-[40px] flex-col md:flex-row items-center md:items-start gap-12 max-w-10xl mx-auto mb-16">
        {/* Text */}
        <div className="md:w-1/2 ml-[30px]">
          <h3 className="text-[36px] font-bold leading-[150%] mb-4">
            Favourite Pastime
          </h3>
          <p className="text-2xl leading-relaxed text-black md:text-[25px] ">
            My ideal day? BBQ tongs in one hand, beer in the other, surrounded
            by laughter and the occasional burnt cottage cheese sausage.
          </p>
        </div>

        {/* Image */}
        <div className="md:w-1/2 flex justify-center">
          <div className="p-3 rounded-[20px] bg-pink-100  ">
            <img
              src={posttimeImage}
              alt="Me"
              className="w-[460px] h-[390px] object-cover 
          rounded-tl-[60px] rounded-tr-[60px] 
          rounded-bl-[60px] rounded-br-[60px] transition-transform duration-300 ease-in-out
              hover:scale-105 hover:shadow-2xl hover:brightness-105"
            />
          </div>
        </div>
      </div>

      <div className="flex mt-[50px] ml-[-30px] flex-col md:flex-row items-center md:items-start gap-12 max-w-10xl mx-auto mb-16">
        {/* Image */}
        <div className="md:w-1/2 flex justify-center">
          <div className="p-3 rounded-[20px] bg-blue-100   ">
            <img
              src={stratimg}
              alt="Me"
              className="w-[460px] h-[420px] object-cover 
          rounded-tl-[60px] rounded-tr-[60px] 
          rounded-bl-[60px] rounded-br-[60px] transition-transform duration-300 ease-in-out
              hover:scale-105 hover:shadow-2xl hover:brightness-105"
            />
          </div>
        </div>

        {/* Text */}
        <div className="md:w-1/2 ml-[-120px] mt-[40px]">
          <h3 className="text-[36px] font-bold leading-[150%] mb-4">
            If I Weren’t a Strategist
          </h3>
          <p className="text-2xl leading-relaxed text-black md:text-[25px] ">
            If I weren’t a strategist, I’d be reverse-engineering cities or
            building tiny houses in the woods—maybe both. I’ve always been drawn
            to systems that shape human experience, whether it’s urban networks
            or minimalist living. For me, it’s all about solving meaningful
            problems with empathy and intention.
          </p>
        </div>
      </div>
    </section>
  );
}
