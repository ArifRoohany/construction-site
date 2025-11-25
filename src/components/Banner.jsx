// src/components/Banner.jsx
import React from "react";
import bannerImg from "../assets/banner.png"; // add your banner image here

export default function Banner() {
  return (
    <section className="bg-[#252222]">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* ================= LEFT SIDE TEXT ================= */}
        <div>
          {/* Orange line */}
          <div className="w-20 h-1 bg-[#fea222] mb-4"></div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            Let’s Build Together
          </h1>

          {/* Subtitle */}
          <p className="text-white mt-4 max-w-md leading-relaxed">
            Contact Us If You Have Anything In Your Mind, We Will Help You Build
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-6">
            {/* CONTACT US BUTTON */}
            <button className="bg-[#fea222] text-black font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:opacity-90">
              Contact Us
            </button>

            {/* FREE CONSULTATION BUTTON */}
            <button className="border border-[#fea222] text-[#fea222] font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:bg-[#fea222] hover:text-white">
              Free Consultation
            </button>
          </div>
        </div>

        {/* ================= RIGHT SIDE IMAGE ================= */}
        <div className="flex justify-center">
          <img
            src={bannerImg}
            alt="Build Together"
            className="w-full object-cover"
          />
        </div>

      </div>
    </section>
  );
}
