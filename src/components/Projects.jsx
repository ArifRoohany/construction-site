import React from "react";
import project1 from "../assets/project1.jpeg";
import project2 from "../assets/project2.jpeg";
import project3 from "../assets/project3.jpeg";
import project4 from "../assets/project4.jpeg";
import { FiArrowRight } from "react-icons/fi";

export default function Projects() {
  const cards = [
    {
      img: project1,
      title: "Interiors Design",
      text: "Step In To A World Of Captivating Commercial Spaces Designed To Elevate Your Business",
      category: "Interior",
      date: "Aug 2025",
    },
    {
      img: project2,
      title: "Residential Building",
      text: "Crafting Modern Living Spaces With Top-Quality Materials And Elegant Designs",
      category: "Housing",
      date: "Sep 2025",
    },
    {
      img: project3,
      title: "Road Construction",
      text: "Delivering Durable Infrastructure With Precision Engineering And Innovation",
      category: "Infrastructure",
      date: "Oct 2025",
    },
    {
      img: project4,
      title: "Office Renovation",
      text: "Transforming Workspaces Into Productive, Modern, And Aesthetic Environments",
      category: "Renovation",
      date: "Nov 2025",
    },
  ];

  return (
    <section className="bg-[#1d1919] py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* =================== TOP ROW =================== */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">

          {/* LEFT COLUMN */}
          <div>
            <div className="mb-4">
              <div className="w-[100px] h-[4px] bg-[#fea222] mb-3"></div>
              <h2 className="text-3xl text-white md:text-4xl font-bold leading-tight">
                Recent Projects
              </h2>
            </div>

            <p className="text-lg text-white max-w-xl">
              Recent Projects Showcasing Our Craftsmanship And Innovation In Construction
            </p>
          </div>

          {/* RIGHT COLUMN - BUTTON */}
          <button className="mt-6 md:mt-0 border border-[#fea222] text-[#fea222] px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-[#fea222] hover:text-white">
            See All
          </button>
        </div>

        {/* =================== CARDS GRID =================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

          {cards.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition"
            >
              <div className="grid grid-cols-2">

                {/* IMAGE */}
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-full w-full object-cover"
                />

                {/* TEXT */}
                <div className="p-4 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.text}</p>
                  </div>

                  <div className="grid grid-cols-3 items-center mt-4">

                    {/* CATEGORY */}
                    <span className="text-sm font-semibold">{item.category}</span>

                    {/* DATE */}
                    <span className="text-sm flex items-center gap-2">
                      <span className="w-2 h-2 bg-[#fea222] rounded-full"></span>
                      {item.date}
                    </span>

                    {/* ARROW */}
                    <button
                      className="border border-[#fea222] text-[#fea222] p-2 rounded-md flex justify-center items-center transition-all duration-300 hover:bg-[#fea222] hover:text-white hover:translate-x-1"
                    >
                      <FiArrowRight size={20} />
                    </button>

                  </div>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
