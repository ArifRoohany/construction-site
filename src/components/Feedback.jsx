// src/components/CustomerFeedback.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import img1 from "../assets/feedback1.jpeg";
import img2 from "../assets/feedback2.jpeg";
import img3 from "../assets/feedback3.jpeg";
import img4 from "../assets/feedback4.jpeg";

export default function CustomerFeedback() {
  const feedbacks = [
    {
      img: img1,
      text: "Their work was absolutely amazing. The team delivered high-quality results on time, with excellent communication throughout the project. Highly recommended!",
      name: "John Carter",
      job: "Project Manager",
    },
    {
      img: img2,
      text: "A very professional and skilled group. They understood my vision clearly and turned it into reality with precision and creativity. Great experience overall.",
      name: "Sophia Miller",
      job: "Interior Designer",
    },
    {
      img: img3,
      text: "They provided excellent service from start to finish. The project was well-organized, and the final outcome exceeded my expectations. Truly outstanding.",
      name: "Michael Green",
      job: "Home Owner",
    },
    {
      img: img4,
      text: "Reliable, dedicated, and highly talented team. The quality of their construction and finishing is top-notch. I’ll definitely work with them again.",
      name: "Emma Brown",
      job: "Business Owner",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">

        {/* ================= RIGHT SIDE TEXT ================= */}
        <div className="order-2 md:order-1 flex flex-col justify-center">
          {/* Horizontal line */}
          <div className="w-20 h-1 bg-orange-500 mb-4"></div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Customer <span className="text-orange-500">Feedbacks</span>
          </h1>

          {/* Subtitle */}
          <p className="text-gray-600 mt-4 max-w-md">
            Don't Just Take Our Word For It. Hear Directly From Our Valued Client.
          </p>
           <button className="w-fit mt-6 md:mt-4 border border-[#fea222] text-[#fea222] px-6 py-2  font-semibold transition-all duration-300 hover:bg-[#fea222] hover:text-white">
  SEE ALL
</button>

        </div>

        {/* ================= LEFT SIDE SLIDER ================= */}
        <div className="order-1 md:order-2">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            loop={true}
            className="pb-10"
          >
            {feedbacks.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="p-6 bg-gray-50 border border-gray-200 rounded-xl shadow-md">
                  
                  {/* Customer Image */}
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-24 h-24 rounded-full object-cover border-4 border-orange-500 mb-4"
                  />

                  {/* Paragraph */}
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {item.text}
                  </p>

                  {/* Name */}
                  <h3 className="font-bold text-gray-900">{item.name}</h3>

                  {/* Job */}
                  <p className="text-sm text-gray-500">{item.job}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* PAGINATION COLOR OVERRIDE */}
      <style>
        {`
        .swiper-pagination-bullet {
          background: #fea222 !important;
          opacity: 0.5;
        }
        .swiper-pagination-bullet-active {
          background: #fea222 !important;
          opacity: 1;
        }
        `}
      </style>
    </section>
  );
}
