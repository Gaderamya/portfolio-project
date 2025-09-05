import React from "react";
import aimlimg1 from "../../assets/aimlimg1.jpg"; // Replace with your actual images
import aimlimg2 from "../../assets/aimlimg2.jpg";
import aimlimg3 from "../../assets/aimlimg3.jpg";
import aimlimg4 from "../../assets/aimlimg4.png";
import aimlimg5 from "../../assets/aimlimg5.jpg";

export default function AIMLdata() {
  return (
    <section className="bg-[#FFFBF4] w-full overflow-x-hidden  min-h-[2472px] px-6 md:px-20 py-16 mx-auto">
      {/* Home Town Section */}
      <div className="text-center mb-16">
        <h2
          class="inline-flex  items-center justify-center px-8 py-3 text-3xl font-bold text-[#1D3557] 
         border border-black rounded-tl-[20px] shadow-md
         bg-gradient-to-r from-[#FCFFD4] to-[#97997F]"
        >
          <span
            class="w-[804px] h-[60px] text-[#27677D] font-roboto font-bold text-[35px] 
            flex items-center justify-center"
          >
            How I Got into Product Strategy, AI & ML Data
          </span>
        </h2>
        <p className="text-2xl md:text-[25px] mt-[50px] leading-relaxed text-black max-w-8xl mt-[20px] mx-auto">
          I started off like many others — with a Computer Science degree and a
          dream to build things that mattered. Over time, “things” turned into
          products, “mattered” turned into measurable impact on improving human
          lives, and my curiosity turned into a full-time career in analytics
          and product strategy. From working at Fortune 120 companies like IBM
          and Broadcom, to helping a Canadian tech company raise $120 million in
          growth capital, I’ve always sat at the crossroads of data, decisions,
          and direction. And while spreadsheets and dashboards are fun (yes,
          really), what drives me is making data useful — not just accurate. I
          care about the so what — the part where data gets translated into a
          smarter product, a better user experience, or a more strategic
          business move. Add a pinch of AI, a few predictive models, and some
          generative experimentation — and you’ve got my happy place.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-20 mt-[100px]">
          {/* Card 1 */}
          <div className="p-3 rounded-[20px] bg-pink-100 shadow-lg">
            <img
              src={aimlimg1}
              alt="Family in Toronto"
              className="w-full h-[380px] object-cover rounded-[20px] transition-transform duration-300 ease-in-out
              hover:scale-105 hover:shadow-2xl hover:brightness-105"
            />
          </div>

          {/* Card 2 */}
          <div className="p-3 rounded-[20px] bg-blue-100 shadow-lg">
            <img
              src={aimlimg2}
              alt="On a bike"
              className="w-full h-[380px] object-cover rounded-[20px] transition-transform duration-300 ease-in-out
              hover:scale-105 hover:shadow-2xl hover:brightness-105"
            />
          </div>

          {/* Card 3 */}
          <div className="p-3 rounded-[20px] bg-yellow-100 shadow-lg">
            <img
              src={aimlimg3}
              alt="Celebrating with daughter"
              className="w-full h-[380px] object-cover rounded-[20px] transition-transform duration-300 ease-in-out
              hover:scale-105 hover:shadow-2xl hover:brightness-105"
            />
          </div>
        </div>
      </div>

      <h2>
        <span
          class="w-[804px] h-[60px] font-roboto font-bold text-[35px] 
            "
        >
          What I’m Doing Now
        </span>
      </h2>
      <p className="text-2xl md:text-[25px]  leading-relaxed text-black max-w-8xl mt-[20px] mx-auto">
        I lead AI Innovation & Enterprise Analytics at ATB Financial, a $40B
        institution. I’ve built automation that hit 98% efficiency gains, scaled
        enterprise data systems, and turned machine learning into business
        outcomes (not just PowerPoint slides). I also sit on the Harvard
        Business Review Advisory Council, because let’s be honest — learning
        never stops. Oh, and once upon a time, I started a school in India. It
        ran for 13 years. Still proud of that one.
      </p>
      <div
        className="p-3 rounded-[30px] relative"
        style={{ top: "100px", left: "201px" }}
      >
        <img
          src={aimlimg4}
          alt="Celebrating with daughter"
          className="w-[865px] h-[470px] object-cover rounded-[30px] transition-transform duration-300 ease-in-out
              hover:scale-105 hover:shadow-2xl hover:brightness-105"
        />
      </div>

      <div className="flex mt-[200px] ml-[40px] flex-col md:flex-row items-center md:items-start gap-12 max-w-10xl mx-auto mb-16">
        {/* Text */}
        <div className="md:w-1/2 ml-[30px] ">
          <p className="text-3xl leading-relaxed  text-black md:text-[25px] mt-[100px] ">
            My first “real” product strategy It wasn’t glamorous. Or planned. I
            was asked to make sense of a failing platform and ended up
            redesigning it for 800,000 users. What started as a data clean-up
            turned into a roadmap revamp. The result? 15x value delivery. And a
            massive respect for cross-functional teams who actually talk to each
            other. That’s when I realized: data’s cool, but people and process
            —they’re the game changers.
          </p>
        </div>

        {/* Image */}
        <div className="md:w-1/2 flex justify-center ">
          <div className="p-3 rounded-[20px] bg-blue-50  ">
            <img
              src={aimlimg5}
              alt="Me"
              className="w-[370px] h-[550px] object-cover 
                      rounded-tl-[60px] rounded-tr-[60px] 
                      rounded-bl-[60px] rounded-br-[60px] transition-transform duration-300 ease-in-out
              hover:scale-105 hover:shadow-2xl hover:brightness-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
