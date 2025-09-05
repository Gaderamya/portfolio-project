import React from "react";
import myVideo from "../../assets/yogavideo.mp4";
import yogaimg2 from "../../assets/yogaimg2.png";
// import Footer from "./components/Footer";
import Footer from "../footer";

export default function Yoga() {
  return (
    <>
      <section className="bg-[#FFF6E9] w-full overflow-x-hidden mt-[50px] min-h-[1930px] px-6 md:px-20 py-16 mx-auto">
        {/* Section Title */}
        <h2>
          <span className=" font-roboto font-bold text-[35px] mx-auto">
            The Yoga of It All
          </span>
        </h2>

        {/* Paragraph */}
        <p className="text-2xl md:text-[25px]  leading-relaxed text-black max-w-8xl mt-[20px] mx-auto">
          I meditate. I stretch. I breathe through stakeholder meetings. Yoga
          isn’t just a wellness thing — it’s my mental operating system. It
          helps me see patterns, stay curious, and actually listen. It’s
          probably why I lead with calm, especially when the data’s messy or the
          strategy’s unclear. Curiosity. Empower. Impact. That’s the mantra — on
          and off the
        </p>
        <div
          className="p-3 rounded-[30px] relative"
          style={{ top: "50px", left: "401px" }}
        >
          <video
            src={myVideo} // replace with your video import or URL
            className="w-[465px] h-[570px] object-cover rounded-[30px] transition-transform duration-300 ease-in-out
              hover:scale-105 hover:shadow-2xl hover:brightness-105"
          ></video>
        </div>

        <div className="flex mt-[200px] ml-[40px] flex-col md:flex-row items-center md:items-start gap-12 max-w-10xl mx-auto mb-16">
          {/* Text */}

          <h2 className="text-center">
            <span className="block w-[524px] h-[108px] font-roboto font-medium text-[36px] leading-[150%] mx-auto">
              Takeaways from the Ride <br /> Recommended Books
            </span>
          </h2>

          <div className="md:w-1/2 ml-[-450px]">
            <p className="text-3xl leading-relaxed  text-black md:text-[25px] mt-[120px] ">
              1. Good to great<br></br> 2. ⁠competing in the age of AI <br></br>{" "}
              3. ⁠think fast think slow<br></br> 4. ⁠The cold start problem{" "}
              <br></br> 5. ⁠working backwards
            </p>
          </div>
          {/* Image */}
          <div className="md:w-1/2 flex justify-center ">
            <div className="p-3 rounded-[20px] ml-[-160px]  ">
              <img
                src={yogaimg2}
                alt="Me"
                className="w-[370px] h-[550px] object-cover transition-transform duration-300 ease-in-out
              hover:scale-105 hover:shadow-2xl hover:brightness-105"
              />
            </div>
          </div>
        </div>

        <div className="flex ml-[40px] flex-col md:flex-row items-center md:items-start gap-12 max-w-10xl mx-auto mb-16">
          <h2 className="text-center">
            <span className="block w-[524px] h-[108px] font-roboto font-medium text-[36px] leading-[150%] mx-auto">
              Lessons from the Field
            </span>
          </h2>

          <div className="md:w-1/2 ml-[-450px]">
            <p className="text-3xl leading-relaxed  text-black md:text-[25px] mt-[50px] ">
              ● Start with people, not platforms <br></br> ● Insight is useless
              unless it’s acted on <br></br> ● AI is only as smart as your
              questions <br></br> ● Never underestimate a team that shares memes
              and metrics <br></br> ● Quiet leadership speaks the loudest
            </p>
          </div>
        </div>
      </section>
      <div>
        <Footer />
      </div>
    </>
  );
}
