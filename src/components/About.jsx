import React from "react";
import gallery1 from "../assets/gallery1.jpeg";
import gallery2 from "../assets/gallery2.jpeg";
import gallery3 from "../assets/gallery3.jpeg";
import gallery4 from "../assets/gallery4.jpeg";

export default function About() {
  // آرایه داده برای Status Row
  const stats = [
    { number: "600+", text: "Worked With Big Companies" },
    { number: "800+", text: "Projects Completed Successfully" },
    { number: "99%", text: "We Stand With 99% Success Rate" },
  ];

  return (
    <section className="py-20">
      {/* MAIN ROW */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT COLUMN - GALLERY */}
        <div className="grid grid-cols-2 gap-4">
          {[gallery1, gallery2, gallery3, gallery4].map((img, index) => (
            <div key={index} className="overflow-hidden rounded-lg">
              <img
                src={img}
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover transform transition duration-500 hover:scale-110"
              />
            </div>
          ))}
        </div>

        {/* RIGHT COLUMN - TEXT */}
        <div>
          {/* Small Header with horizontal line */}
          <div className="flex items-center mb-2">
            <div className="w-[100px] h-0.5 bg-[#fea222] mr-3"></div>
            <span className="text-[#fea222] font-semibold uppercase">About Us</span>
          </div>

          {/* Large Header */}
          <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-snug">
            Take A Glimpse Into Our Construction Voyage
          </h2>

          {/* Paragraph */}
          <p className="text-lg md:text-xl">
            A Trailblazer In The Construction Industry. Our Journey Is One Of Passion, Dedication, And A Relentless Pursuit Of Excellence.
          </p>
        </div>
      </div>

      {/* STATS ROW */}
      <div className="max-w-7xl mx-auto px-6 mt-16 grid md:grid-cols-3 gap-6 text-center">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-[#1d1919] p-6 rounded-lg shadow-lg hover:shadow-xl transition"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-[#fea222] mb-2">{stat.number}</h1>
            <p className="text-gray-300 text-lg md:text-xl">{stat.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
