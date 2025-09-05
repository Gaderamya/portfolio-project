import React from "react";
import schoolimg from "../../assets/schoolimg.png";
import day1img from "../../assets/1dayimg.jpg";
import universityimg from "../../assets/universityimg.jpg";

export default function MyEducation() {
  return (
    <section className="px-6 md:px-20  py-12 text-center bg-[#FFF6E9]">
      <h2
        class="inline-flex  items-center justify-center px-8 py-3 text-3xl font-bold text-[#1D3557] 
         border border-black rounded-tl-[20px] shadow-md
         bg-gradient-to-r from-[#FCFFD4] to-[#97997F]"
      >
        <span
          class="w-[244px] h-[60px] text-[#27677D] font-roboto font-bold text-[35px] 
            flex items-center justify-center"
        >
          My Education
        </span>
      </h2>

      {/* Specialties Section */}
      <div className="flex mt-[100px] ml-[40px] flex-col md:flex-row items-center md:items-start gap-12 max-w-10xl mx-auto mb-16">
        {/* Image */}
        <div className="md:w-1/2 flex justify-center">
          <div className="p-3 rounded-[20px]  ">
            <img
              src={schoolimg}
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
            Harvard Business School
          </h3>
          <p className="text-2xl leading-relaxed text-black md:text-[25px] ">
            Completed the Programme for Leadership Development at Harvard
            Business School with a focus on business, strategy, product,
            digitization, and AI. Awarded a scholarship from the HBS Fund for
            Leadership and Innovation.
          </p>
        </div>
      </div>

      <div className="flex mt-[100px] ml-[40px] flex-col md:flex-row items-center md:items-start gap-12 max-w-10xl mx-auto mb-16">
        {/* Text */}
        <div className="md:w-1/2 ml-[30px]">
          <h3 className="text-[36px] font-bold leading-[150%] mb-4">
            University of lowa
          </h3>
          <p className="text-2xl leading-relaxed text-black md:text-[24px] ">
            Earned an MBA in Business & Data Analytics from the University of
            Iowa with a 96% scholarship (MBA India Award). Served as Graduate
            Assistant in Admissions and Social Media Marketing, and actively
            contributed as a Student Leader, Advisory Board Member, and Prodigy
            Finance Ambassador.
          </p>
        </div>

        {/* Image */}
        <div className="md:w-1/2 flex justify-center">
          <div className="p-3 rounded-[20px] bg-pink-100  ">
            <img
              src={day1img}
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
          <div className="p-3 rounded-[20px] bg-blue-50   ">
            <img
              src={universityimg}
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
            Jawaharlal Nehru Technological University
          </h3>
          <p className="text-2xl leading-relaxed text-black md:text-[25px] ">
            Completed a Bachelor’s degree in Computer Science Engineering from
            Jawaharlal Nehru Technological University, graduated among the top
            three students in a class of 480. During this time, founded Ignite
            Ourselves, a student-led organization.
          </p>
        </div>
      </div>
    </section>
  );
}
