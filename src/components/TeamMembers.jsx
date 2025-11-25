// src/components/TeamMembers.jsx
import React from "react";

import team1 from "../assets/team1.jpeg";
import team2 from "../assets/team2.jpeg";
import team3 from "../assets/team3.jpeg";
import team4 from "../assets/team4.jpeg";
import team5 from "../assets/team5.jpeg";
import team6 from "../assets/team6.jpeg";

export default function TeamMembers() {
  const team = [
    { img: team1, name: "Michael Johnson", role: "Senior Engineer" },
    { img: team2, name: "Emily Carter", role: "Architect Designer" },
    { img: team3, name: "Daniel Smith", role: "Project Coordinator" },
    { img: team4, name: "Isabella Brown", role: "Interior Designer" },
    { img: team5, name: "William Davis", role: "Construction Manager" },
    { img: team6, name: "Sophia Wilson", role: "Site Supervisor" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* ================= TOP ROW ================= */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16">

          {/* LEFT SIDE TEXT */}
          <div>
            {/* Top orange line */}
            <div className="w-20 h-1 bg-[#fea222] mb-4"></div>

            {/* Title */}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Team Members
            </h2>

            {/* Subtitle */}
            <p className="text-gray-600 mt-3 max-w-md">
              Meet The Collaborative Minds Of Our Construction Team
            </p>
          </div>

          {/* RIGHT SIDE BUTTON */}
          <button className="w-fit mt-6 md:mt-0 border border-[#fea222] text-[#fea222] px-6 py-3 font-semibold transition-all duration-300 hover:bg-[#fea222] hover:text-white">
            SEE ALL
          </button>
        </div>

        {/* ================= TEAM CARDS ================= */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="flex items-center bg-gray-50 border border-gray-200 p-5 rounded-xl shadow-sm hover:shadow-md transition"
            >
              {/* LEFT IMAGE */}
              <img
                src={member.img}
                alt={member.name}
                className="w-20 h-20 rounded-full object-cover border-4 border-[#fea222] mr-4"
              />

              {/* RIGHT TEXT */}
              <div>
                <h3 classname="text-xl font-bold text-gray-900">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-600">{member.role}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
