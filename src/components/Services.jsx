import React from "react";
import serviceImg1 from "../assets/service1.jpg";
import serviceImg2 from "../assets/service2.jpeg";
import serviceImg3 from "../assets/service3.jpeg";
import serviceImg4 from "../assets/service4.jpeg";
import serviceImg5 from "../assets/service5.jpeg";
import serviceImg6 from "../assets/service6.jpeg";

export default function Services() {
  // داده‌ها برای کارت‌ها (بعداً می‌توانید متن‌ها را تغییر دهید)
  const services = [
    { img: serviceImg1, title: "Residential", text: "Design And Construction Of Custom Homes, Villas, Apartments, And Townhouses" },
    { img: serviceImg2, title: "Commercial", text: "Building Offices, Retail Spaces And Resturants, Warehouses, Commercial Structures" },
    { img: serviceImg3, title: "Renovations", text: "Quality Refurbishment, Renovaition, And Modernization Of Your Existing Properties" },
    { img: serviceImg4, title: "LandScaping", text: "Creating Beautiful Outdoor Landscapes, Gardense, And Creational Areas" },
    { img: serviceImg5, title: "Interiors Designs", text: "Design And Construction Of Office Interiors, Retail Stores, And Commercial Spaces" },
    { img: serviceImg6, title: "Structural Repair", text: "Fully Strengthening And Repairing Your Existing Structures For Safety And Longevity" },
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER ROW */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          {/* Left Column */}
          <div className="md:flex md:items-center md:gap-4 mb-4 md:mb-0">
            <div className="w-[100px] h-0.5 bg-[#fea222] mr-3 hidden md:block"></div>
            <h2 className="text-3xl md:text-4xl font-bold">Our Services</h2>
          </div>
          <p className="md:ml-6 md:flex-1 mt-2 md:mt-0">
            Take A Look At The Variety Of Our Services We Provide To Make Your Dreams A Reality
          </p>

          {/* Right Column */}
          <button className="bg-[#fea222] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#e4911d] transition mt-4 md:mt-0">
            See All
          </button>
        </div>

        {/* SERVICES CARDS ROW */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition flex flex-col items-center text-center p-6"
            >
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
              <p className="mb-4">{service.text}</p>
              <button className="bg-[#fea222] text-white px-4 py-2 rounded-md font-semibold hover:bg-[#e4911d] transition">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
