import React from "react";

export default function Footer() {
  // Scroll to top functionality
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bottom-0 left-0 w-full  h-[167px] mx-auto bg-white flex items-center justify-center border-t border-gray-200">
      {/* Upward Arrow in Circle */}
      <div
        onClick={scrollToTop}
        className="absolute -top-5 left-1/2 transform -translate-x-1/2 cursor-pointer"
      >
        <div className="w-10 h-10  flex items-center justify-center hover:bg-gray-100 transition">
          <span className="text-4xl font-bold">↑</span>
        </div>
      </div>

      {/* Copyright */}
      <p className="w-full h-[117px] flex items-center justify-center text-gray-900 text-lg font-bold text-center opacity-100">
        © 2025 Pranay Agarwal. All rights reserved.
      </p>
    </footer>
  );
}
