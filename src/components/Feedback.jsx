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
      text: "Their work was absolutely amazing. The team delivered high-quality results on time, with excellent communication throughout the project.",
      name: "John Carter",
      job: "Project Manager",
    },
    {
      img: img2,
      text: "A very professional and skilled group. They understood my vision clearly and turned it into reality with precision and creativity.",
      name: "Sophia Miller",
      job: "Interior Designer",
    },
    {
      img: img3,
      text: "They provided excellent service from start to finish. The project was well-organized, and the final outcome exceeded my expectations.",
      name: "Michael Green",
      job: "Home Owner",
    },
    {
      img: img4,
      text: "Reliable and talented team. The quality of their construction and finishing is top-notch. I’ll definitely work with them again.",
      name: "Emma Brown",
      job: "Business Owner",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-10 md:gap-16">

        {/* TEXT SECTION */}
        <div className="order-2 md:order-1 flex flex-col justify-center text-center md:text-left">
          <div className="w-20 h-1 bg-orange-500 mx-auto md:mx-0 mb-4"></div>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Customer <span className="text-orange-500">Feedbacks</span>
          </h1>

          <p className="text-gray-600 mt-4 max-w-md mx-auto md:mx-0">
            Don't Just Take Our Word For It. Hear Directly From Our Valued Clients.
          </p>

          <button className="w-fit mx-auto md:mx-0 mt-6 border border-[#fea222] text-[#fea222] px-6 py-2 font-semibold transition-all duration-300 hover:bg-[#fea222] hover:text-white">
            SEE ALL
          </button>
        </div>

        {/* SLIDER SECTION */}
        <div className="order-1 md:order-2 w-full min-w-0">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 2500 }}
            loop={true}
            className="pb-10 w-full"
          >
            {feedbacks.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="p-5 md:p-6 bg-gray-50 border border-gray-200 rounded-xl shadow-md">

                  {/* Customer Image */}
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-20 h-20 md:w-24 md:h-24 mx-auto rounded-full object-cover border-4 border-orange-500 mb-4"
                  />

                  {/* Review */}
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4 text-center md:text-left">
                    {item.text}
                  </p>

                  {/* Name */}
                  <h3 className="font-bold text-gray-900 text-center md:text-left">
                    {item.name}
                  </h3>

                  {/* Job */}
                  <p className="text-sm text-gray-500 text-center md:text-left">
                    {item.job}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* SLIDER DOT COLOR */}
      <style>
        {`
          .swiper-pagination-bullet {
            background: #fea222 !important;
            opacity: 0.4;
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
