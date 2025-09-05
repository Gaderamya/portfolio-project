// 📂 File: PrinciplesList.jsx

import React from "react";
import Actimg1 from "../../assets/Actimg.png";
import Flightimg1 from "../../assets/Flight.jpg";
import Dataimg1 from "../../assets/Dataimg.png";
import Atbimg1 from "../../assets/Atbimg.png";
import vendastaimg1 from "../../assets/vendasta.png";

export default function PrinciplesList() {
  return (
    <div className=" min-h-[1800px] bg-[#FFF6E9] flex justify-center items-start py-10 px-4 ">
      <div className="w-full max-w-[1440px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Card 1 */}
        <div className="relative w-full min-h-screen">
          <div className="absolute top-[42px] left-[100px] w-[998.688px] h-[349.214px] flex items-center gap-6 rounded-lg  p-6">
            {/* Logo circle */}

            <div className=" w-full min-h-screen ">
              <div
                className="absolute  top-[15px] left-[100px]  w-[160px] h-[160px] rounded-full shadow-[0_0_60px_60px_#ECCE9E] overflow-hidden flex items-center 
              justify-center border border-black rotate-[15.55deg]"
              >
                <img
                  src={Actimg1}
                  alt="Act"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Colored bar */}

            <div className=" w-full min-h-screen">
              <div
                className="
      absolute 
      top-[207px] 
      left-[1px] 
      w-[1000px] 
      h-[55px] 
      rounded-[60px] 
      border-[5px] border-[#FF72AD] 
      bg-[#F8C8DC] 
      flex items-center px-6 shadow-md 
      rotate-[5.55deg]
    "
              >
                <span
                  className="
      absolute 
      top-[8px] 
      left-[264.19px] 
      w-[621px] 
      h-[48px] 
      text-[32px] 
      leading-[100%] 
      font-[Poppins] 
      font-normal 
      tracking-[0%] 
      break-words
      text-gray-800
      
    "
                >
                  Have Backbone: Disagree and Commit
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2 */}

        <div className="relative w-full min-h-screen ">
          {/* Principles Card */}
          <div
            className="
      absolute
      top-[397px] 
      left-[341px] 
      w-[998.688px] 
      h-[343.607px] 
      flex 
      flex-col sm:flex-row 
      items-center 
      gap-6 
      rounded-lg 
      p-6 
    "
          >
            {/* Logo Circle */}

            <div className=" w-full min-h-screen ">
              <div
                className="absolute  top-[-10px] left-[300px]  w-[160px] h-[160px] rounded-full shadow-[0_0_60px_60px_#ECCE9E] overflow-hidden flex items-center 
              justify-center border border-black rotate-[15.55deg]"
              >
                <img
                  src={Flightimg1}
                  alt="Act"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Colored Bar */}

            <div className=" w-full min-h-screen">
              <div
                className="
      absolute 
      top-[207px] 
      left-[-400px] 
      w-[1000px] 
      h-[55px] 
      rounded-[60px] 
      border-[8px] border-[#FFB26D] 
      bg-[#FFDAB9] 
      flex items-center py-6 shadow-md 
      rotate-[-10.55deg]
    "
              >
                <span
                  className="
      absolute 
      top-[8px] 
      left-[264.19px] 
      w-[621px] 
      h-[48px] 
      text-[32px] 
      leading-[100%] 
      font-[Poppins] 
      font-normal 
      tracking-[0%] 
      break-words
      text-gray-800
      
    "
                >
                  Hire and Develop the best
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3 */}

        <div className="relative w-full min-h-screen">
          <div className="absolute top-[620px] left-[-650px] w-[998.688px] h-[349.214px] flex items-center gap-6 rounded-lg  p-6">
            {/* Logo circle */}

            <div className=" w-full min-h-screen ">
              <div
                className="absolute  top-[150px] left-[100px]  w-[160px] h-[160px] rounded-full shadow-[0_0_60px_60px_#ECCE9E] overflow-hidden flex items-center 
              justify-center border border-black rotate-[15.55deg]"
              >
                <img
                  src={Dataimg1}
                  alt="Act"
                  className="w-full h-[40px] object-cover"
                />
              </div>
            </div>

            {/* Colored bar */}

            <div className=" w-full min-h-screen">
              <div
                className="
      absolute 
      top-[345px] 
      left-[1px] 
      w-[1000px] 
      h-[55px] 
      rounded-[60px] 
      border-[5px] border-[#FFEE50] 
      bg-[#FFFACD] 
      flex items-center px-6 shadow-md 
      rotate-[5.55deg]
    "
              >
                <span
                  className="
      absolute 
      top-[8px] 
      left-[264.19px] 
      w-[621px] 
      h-[48px] 
      text-[32px] 
      leading-[100%] 
      font-[Poppins] 
      font-normal 
      tracking-[0%] 
      break-words
      text-gray-800
      
    "
                >
                  Invent and Simplify
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="relative w-full min-h-screen ">
          {/* Principles Card */}
          <div
            className="
      absolute
      top-[1050px] 
      left-[-300px] 
      w-[998.688px] 
      h-[343.607px] 
      flex 
      flex-col sm:flex-row 
      items-center 
      gap-6 
      rounded-lg 
      p-6 
    "
          >
            {/* Logo Circle */}

            <div className=" w-full min-h-screen ">
              <div
                className="absolute  top-[-10px] left-[300px]  w-[160px] h-[160px] rounded-full shadow-[0_0_60px_60px_#ECCE9E] overflow-hidden flex items-center 
              justify-center border border-black rotate-[15.55deg]"
              >
                <img
                  src={Atbimg1}
                  alt="Act"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Colored Bar */}

            <div className=" w-full min-h-screen">
              <div
                className="
      absolute 
      top-[220px] 
      left-[-450px] 
      w-[1000px] 
      h-[55px] 
      rounded-[60px] 
      border-[8px] border-[#61FF61] 
      bg-[#C1E1C1] 
      flex items-center py-6 shadow-md 
      rotate-[-10.55deg]
    "
              >
                <span
                  className="
      absolute 
      top-[8px] 
      left-[264.19px] 
      w-[621px] 
      h-[48px] 
      text-[32px] 
      leading-[100%] 
      font-[Poppins] 
      font-normal 
      tracking-[0%] 
      break-words
      text-gray-800
      
    "
                >
                  Hire and Develop the best
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Card 5 */}

        <div className="relative w-full min-h-screen">
          <div className="absolute top-[480px] left-[80px] w-[998.688px] h-[349.214px] flex items-center gap-6 rounded-lg  p-6">
            {/* Logo circle */}

            <div className=" w-full min-h-screen ">
              <div
                className="absolute  top-[150px] left-[100px]  w-[160px] h-[160px] rounded-full shadow-[0_0_60px_60px_#ECCE9E] overflow-hidden flex items-center 
              justify-center border border-black rotate-[15.55deg]"
              >
                <img
                  src={vendastaimg1}
                  alt="Act"
                  className="w-full h-[40px] object-cover"
                />
              </div>
            </div>

            {/* Colored bar */}

            <div className=" w-full min-h-screen">
              <div
                className="
      absolute 
      top-[345px] 
      left-[1px] 
      w-[1000px] 
      h-[55px] 
      rounded-[60px] 
      border-[10px] border-[#0af9f9ff] 
      bg-[#AEEEEE] 
      flex items-center py-6 shadow-md 
      rotate-[5.55deg]
    "
              >
                <span
                  className="
      absolute 
      top-[8px] 
      left-[264.19px] 
      w-[621px] 
      h-[48px] 
      text-[32px] 
      leading-[100%] 
      font-[Poppins] 
      font-normal 
      tracking-[0%] 
      break-words
      text-gray-800
      
    "
                >
                  Dive Deep
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
