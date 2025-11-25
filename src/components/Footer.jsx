import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-[#0d0d0d] text-white pt-16 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
{/* ===== COLUMN 1 ===== */}
<div>
  <h1 className="text-2xl font-bold text-[#fea222] mb-4">Hewadwall</h1>

  <p className="text-gray-300 leading-relaxed mb-6">
    We provide professional construction and building solutions with years of experience, 
    delivering high-quality designs, renovations, and structural projects for our clients.
  </p>

  {/* Social Icons */}
  <div className="flex items-center gap-4 mt-4">
    <a href="#" className="text-gray-300 hover:text-[#fea222] transition text-2xl">
      <i className="fa-brands fa-facebook"></i>
    </a>
    <a href="#" className="text-gray-300 hover:text-[#fea222] transition text-2xl">
      <i className="fa-brands fa-instagram"></i>
    </a>
    <a href="#" className="text-gray-300 hover:text-[#fea222] transition text-2xl">
      <i className="fa-brands fa-twitter"></i>
    </a>
    <a href="#" className="text-gray-300 hover:text-[#fea222] transition text-2xl">
      <i className="fa-brands fa-linkedin"></i>
    </a>
  </div>
</div>


        {/* ===== COLUMN 2 ===== */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-300 hover:text-[#fea222] transition">Home</a></li>
            <li><a href="#" className="text-gray-300 hover:text-[#fea222] transition">About Us</a></li>
            <li><a href="#" className="text-gray-300 hover:text-[#fea222] transition">Services</a></li>
            <li><a href="#" className="text-gray-300 hover:text-[#fea222] transition">Projects</a></li>
            <li><a href="#" className="text-gray-300 hover:text-[#fea222] transition">Contact</a></li>
          </ul>
        </div>

        {/* ===== COLUMN 3 ===== */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Our Services</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-300 hover:text-[#fea222] transition">Construction</a></li>
            <li><a href="#" className="text-gray-300 hover:text-[#fea222] transition">Renovation</a></li>
            <li><a href="#" className="text-gray-300 hover:text-[#fea222] transition">Architecture Design</a></li>
            <li><a href="#" className="text-gray-300 hover:text-[#fea222] transition">Interior Design</a></li>
            <li><a href="#" className="text-gray-300 hover:text-[#fea222] transition">Building Maintenance</a></li>
          </ul>
        </div>

        {/* ===== COLUMN 4 ===== */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Support</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-300 hover:text-[#fea222] transition">FAQ</a></li>
            <li><a href="#" className="text-gray-300 hover:text-[#fea222] transition">Privacy Policy</a></li>
            <li><a href="#" className="text-gray-300 hover:text-[#fea222] transition">Terms & Conditions</a></li>
            <li><a href="#" className="text-gray-300 hover:text-[#fea222] transition">Customer Support</a></li>
            <li><a href="#" className="text-gray-300 hover:text-[#fea222] transition">Help Center</a></li>
          </ul>
        </div>

      </div>

      {/* ===== COPYRIGHT ROW ===== */}
      <div className="text-center text-gray-400 text-sm mt-12 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Hewadwall — All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;