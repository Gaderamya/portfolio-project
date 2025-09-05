import { FaPhoneAlt } from "react-icons/fa";
import profile from "../../assets/image.png";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between px-6 md:px-16 lg:px-24 py-10 gap-10 md:gap-[60px]">
      {/* Left: Profile Image */}
      <div className="relative flex-shrink-0 mt-[130px]">
        <div className="p-10 rounded-[30px] transform transition duration-1000 ease-out hover:scale-105 animate-fadeIn">
          <img
            src={profile}
            alt="Pranay Agarwal"
            className="w-[80vw] max-w-[439px] h-auto object-cover 
                 rounded-tl-[80px] rounded-tr-[8px] 
                 rounded-bl-[8px] rounded-br-[80px] 
                 md:relative md:left-[150px]"
          />
        </div>
      </div>

      {/* Right: Text Content */}
      <div className="relative md:absolute w-full md:w-[90%] max-w-xl text-center md:text-left space-y-4 md:top-[220px] md:left-[810px]">
        <h2 className="text-2xl md:text-[32px] text-[#525C6B] font-roboto font-bold leading-[150%] text-gray-800">
          Hello, I’m
        </h2>

        <h3 className="text-xl md:text-4xl lg:text-[44px] font-bold text-[#489982ff]">
          <span
            className="block w-full md:w-[350px] h-[60px] px-[10px] py-2 
               rounded-tl-[25px] rounded-br-[3px] border-[0.6px] 
               bg-gradient-to-r from-[#FCFFD4] to-[#97997F] 
               shadow-md text-center border-black"
          >
            Pranay Agarwal
          </span>
        </h3>

        <h3 className="font-roboto font-bold text-[24px] md:text-[30px] leading-[30px] md:leading-[42px] text-transparent bg-clip-text bg-gradient-to-r from-[#3E4153] to-[#525C6B]">
          P&L Transformation Executive | Data, AI & Product Leader |
          Harvard-Trained
        </h3>

        <p className="text-[18px] md:text-[24px] font-roboto font-semibold leading-[24px] md:leading-[30px] text-black">
          I work with C-suite teams to turn fragmented data into AI-powered
          ecosystems that drive faster decisions, uncover new revenue streams,
          and build lasting market leadership. Turned around a failing business
          by driving 375% revenue growth, cutting costs by 60%, and lifting
          EBITDA by 35%—all in just 18 months.
        </p>

        <p className="text-[18px] md:text-[24px] text-[#D95264] font-medium font-roboto">
          Let&apos;s discuss how I can replicate these results for your
          organization.
        </p>

        {/* Call Button (Main CTA) */}
        <Link
          to="/contact"
          target="_self"
          rel="noopener noreferrer"
          aria-label="Schedule a call"
          className="inline-flex items-center justify-center gap-[10px] 
             w-full md:w-[239px] h-[60px] rounded-full 
             bg-[#C9972B] text-white font-semibold text-[20px] 
             px-[24px] py-[12px] 
             border-[8px] border-[#0D92761A] 
             shadow-lg hover:bg-[#b58624] focus:ring-4 focus:ring-[#C9972B]/50 transition"
        >
          Schedule a call <FaPhoneAlt />
        </Link>

        {/* Floating Contact Button (Support/Reach Out) */}
        <Link
          to="/contact"
          target="_self"
          rel="noopener noreferrer"
          aria-label="Reach Out via contact page"
          className="fixed bottom-6 right-6 flex items-center gap-2 
             bg-[#C9972B] text-white font-semibold px-6 py-3 
             rounded-full shadow-lg hover:bg-[#b58624] 
             focus:ring-4 focus:ring-[#C9972B]/50 z-50 transition"
        >
          <FaPhoneAlt /> Reach Out
        </Link>
      </div>
    </section>
  );
}
