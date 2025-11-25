import React from "react";
import heroImg from "../assets/hero.png";

export default function Hero() {
  return (
    <section className="bg-[#1d1919] text-white min-h-screen flex items-center pt-24">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT COLUMN */}
        <div>
          <h1 className="larg-text md:text-5xl font-bold leading-tight">
            Crafting <br /> Architectural <br /> Wonders
          </h1>

          <p className="mt-4 text-gray-300 text-lg md:text-xl">
            Your Ideas & Dreams Are Transformed By Us Into Long-Lasting, Engineered Buildings
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <button className="bg-[#fea222] text-black link-text px-6 py-3 rounded-md font-semibold hover:bg-[#e4911d] transition">
              Contact Us
            </button>

            <button className="border border-[#fea222] link-text text-white px-6 py-3 rounded-md font-semibold hover:bg-[#fea222] hover:text-black transition">
              Free Consultation
            </button>
          </div>

          {/* Bullet */}
          <div className="mt-8 flex items-start gap-3">
            <span className="w-3 h-3 rounded-full bg-[#fea222] mt-1"></span>
            <p className="text-gray-200 text-lg">
              All Our Projects Are Created By Experts.
            </p>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex justify-center md:justify-end">
          <img
            src={heroImg}
            alt="Construction Hero"
            className="w-full max-h-full"
          />
        </div>

      </div>
    </section>
  );
}
