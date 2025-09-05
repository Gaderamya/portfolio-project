import React from "react";
import portfolioimg2 from "../../assets/portfolioimg2.png";
import portfolioimg3 from "../../assets/portfolioimg3.png";
import portfolioimg4 from "../../assets/portfolioimg4.png";
import portfolioimg5 from "../../assets/portfolioimg5.png";
import portfolioimg6 from "../../assets/portfolioimg6.png";
import Footer from "../footer";

export default function ProfessionalEx() {
  return (
    <>
      <section className="px-6 md:px-20  py-12 text-center bg-[#FFF6E9]">
        <h2
          class="inline-flex  items-center justify-center px-8 py-3 text-3xl font-bold text-[#1D3557] 
         border border-black rounded-tl-[20px] shadow-md
         bg-gradient-to-r from-[#FCFFD4] to-[#97997F]"
        >
          <span
            class="w-[444px] h-[60px] text-[#27677D] font-roboto font-bold text-[35px] 
            flex items-center justify-center"
          >
            Professional Experience
          </span>
        </h2>

        {/* Specialties Section */}
        <div
          className="flex mt-[100px] ml-[40px] flex-col md:flex-row items-center md:items-start gap-12 max-w-10xl mx-auto mb-16
      justify-spacebetween"
        >
          {/* Image */}

          <div className="md:w-1/2 flex justify-center">
            <div className="p-3 rounded-[24px]">
              <img
                src={portfolioimg2}
                alt="Me"
                className="w-full max-w-[424px] h-[383px] object-cover 
                 rounded-tl-[8px] rounded-tr-[8px] 
                 rounded-bl-[8px] rounded-br-[8px] transition-transform duration-300 ease-in-out
              hover:scale-105 hover:shadow-2xl hover:brightness-105"
              />
            </div>
          </div>

          {/* Text */}
          <div className="md:w-1/2 ml-[-120px]">
            <h3 className="text-[36px] font-bold leading-[150%] mb-4">
              Data, Al & Product
            </h3>
            <h4 className="text-[20px] mt-[-20px] ">
              Data, Al & Product . 2022 - Present
            </h4>

            <p className="md:text-[24px] mt-[30px] font-roboto md:leading-[40px] text-black max-w-full md:max-w-[700px]">
              Led and scaled a $200M ARR BI platform with 250+ dashboards,
              boosting business value 15x. Delivered executive analytics,
              ensured data compliance, and modernized CIAM with AI-driven
              prototypes like RAG agents and autonomous chatbots.
            </p>
          </div>
        </div>

        <div className="flex mt-[100px] ml-[40px] flex-col md:flex-row items-center md:items-start gap-12 max-w-10xl mx-auto mb-16">
          {/* Text */}
          <div className="md:w-1/2 ml-[120px]">
            <h3 className="text-[36px] font-bold leading-[150%] mb-4">
              Data, Al & Product
            </h3>
            <h4 className="text-[20px] mt-[-20px] ">Vendasta · 2020 - 2022</h4>

            <p className="md:text-[24px] mt-[30px] font-roboto md:leading-[40px] text-black max-w-full md:max-w-[700px]">
              Led BI at Vendasta, delivering 150+ dashboards and driving a 35%
              EBIT boost. Identified $1.5M in demand gaps, integrated Stripe for
              new revenue, and empowered 57K+ partners and 5.5M SMBs with
              actionable insights
            </p>
          </div>
          {/* Image */}

          <div className="md:w-1/2 flex justify-center">
            <div className="p-3 rounded-[24px]">
              <img
                src={portfolioimg3}
                alt="Me"
                className="w-full max-w-[424px] h-[283px] object-cover 
                 rounded-tl-[8px] rounded-tr-[8px] 
                 rounded-bl-[8px] rounded-br-[8px] transition-transform duration-300 ease-in-out
              hover:scale-105 hover:shadow-2xl hover:brightness-105"
              />
            </div>
          </div>
        </div>

        <div className="flex mt-[50px] ml-[-30px] flex-col md:flex-row items-center md:items-start gap-12 max-w-10xl mx-auto mb-16">
          {/* Image */}
          <div className="md:w-1/2 flex justify-center">
            <div className="p-3 rounded-[20px]  ">
              <img
                src={portfolioimg4}
                alt="Me"
                className="w-full max-w-[424px] h-[283px] object-cover 
                 rounded-tl-[8px] rounded-tr-[8px] 
                 rounded-bl-[8px] rounded-br-[8px] transition-transform duration-300 ease-in-out
              hover:scale-105 hover:shadow-2xl hover:brightness-105"
              />
            </div>
          </div>

          {/* Text */}
          <div className="md:w-1/2 ml-[-120px]">
            <h3 className="text-[36px] font-bold leading-[150%] mb-4">
              Data, Al & Product
            </h3>
            <h4 className="text-[20px] mt-[-20px] ">ACT . 2016 - 2020</h4>

            <p className="md:text-[24px] mt-[30px] font-roboto md:leading-[40px] text-black max-w-full md:max-w-[700px]">
              Led analytics for a $20M global business across 160+ countries,
              improving B2B sales efficiency by 40% and revenue by 50% through
              strategic modeling. Boosted marketing ROI by 20% and mentored MBA
              teams to drive executive insights.
            </p>
          </div>
        </div>

        <div className="flex mt-[50px] ml-[-30px] flex-col md:flex-row items-center md:items-start gap-12 max-w-10xl mx-auto mb-16">
          {/* Image */}

          {/* Text */}
          <div className="md:w-1/2 ml-[120px]">
            <h3 className="text-[36px] font-bold leading-[150%] mb-4">
              Data, Al & Product
            </h3>
            <h4 className="text-[20px] mt-[-20px] ">
              CA Technologies . 2011 - 2016
            </h4>

            <p className="md:text-[24px] mt-[30px] font-roboto md:leading-[40px] text-black max-w-full md:max-w-[700px]">
              Led gap analysis to enhance product suite, boosting NPS by 12%.
              Turned user pain points into 40+ product solutions and streamlined
              deployment to increase retention by 20%.
            </p>
          </div>

          <div className="md:w-1/2 flex justify-center">
            <div className="p-3 rounded-[20px]   ">
              <img
                src={portfolioimg5}
                alt="Me"
                className="w-full max-w-[424px] h-[283px] object-cover 
                 rounded-tl-[8px] rounded-tr-[8px] 
                 rounded-bl-[8px] rounded-br-[8px] transition-transform duration-300 ease-in-out
              hover:scale-105 hover:shadow-2xl hover:brightness-105"
              />
            </div>
          </div>
        </div>

        <div className="flex mt-[50px] ml-[-30px] flex-col md:flex-row items-center md:items-start gap-12 max-w-10xl mx-auto mb-16">
          {/* Image */}
          <div className="md:w-1/2 flex justify-center">
            <div className="p-3 rounded-[20px]   ">
              <img
                src={portfolioimg6}
                alt="Me"
                className="w-full max-w-[424px] h-[283px] object-cover 
                 rounded-tl-[8px] rounded-tr-[8px] 
                 rounded-bl-[8px] rounded-br-[8px] transition-transform duration-300 ease-in-out
              hover:scale-105 hover:shadow-2xl hover:brightness-105"
              />
            </div>
          </div>

          {/* Text */}
          <div className="md:w-1/2 ml-[-120px]">
            <h3 className="text-[36px] font-bold leading-[150%] mb-4">
              Data, Al & Product
            </h3>
            <h4 className="text-[20px] mt-[-20px] ">IBM . 2007 - 2011</h4>

            <p className="md:text-[24px] mt-[30px] font-roboto md:leading-[40px] text-black max-w-full md:max-w-[700px]">
              Received IBM’s Bravo Award for driving agile development, boosting
              sales efficiency, and reducing order rejections by 50%. Built
              C/C++ automation tools that cut testing time by 80% and improved
              resource utilization by 20%.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
