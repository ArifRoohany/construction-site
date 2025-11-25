import React from "react";

export default function PageHeader({ title, subtitle, bgImage }) {
  return (
    <section
      className="relative w-full h-[60vh] md:h-[50vh] bg-center bg-cover flex items-center justify-center"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* CONTENT */}
      <div className="relative text-center text-white px-4 animate-fadeDown">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-wide drop-shadow-lg">
          {title}
        </h1>

        <p className="mt-3 text-lg md:text-xl opacity-80 max-w-2xl mx-auto">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
