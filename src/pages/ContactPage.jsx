// src/components/Contact.jsx
import React from 'react';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PageHeader from "../components/PageHeader";
import servicesBg from "../assets/pageheader.jpg";
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  return (
    <>
      <Navbar/>
      <PageHeader
        title="Contact Us"
        subtitle="We Build Your Dreams Into Reality"
        bgImage={servicesBg}
      />
    
      <section className="py-16">
        <div className="bg-gray-100 max-w-7xl mx-auto shadow-2xl ps-5 rounded-2xl grid md:grid-cols-2 gap-12">

          {/* LEFT SIDE - Contact Info */}
          <div>
            <h2 className="text-3xl font-bold mb-4 pt-3 text-[#1d1919]">Get In Touch</h2>
            <p className="mb-8">
              We are here to help you with your construction needs. Reach out to us anytime for support.
            </p>

            <div className="space-y-6">
              {/* Location */}
              <div className="flex items-start gap-4">
                <FaMapMarkerAlt className="text-[#fea222] text-2xl mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Our Location</h3>
                  <p className="text-gray-600">123 Main Street</p>
                  <p className="text-gray-600">City, Country</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <FaEnvelope className="text-[#fea222] text-2xl mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Email Us</h3>
                  <p className="text-gray-600">info@example.com</p>
                  <p className="text-gray-600">support@example.com</p>
                </div>
              </div>

              {/* Call */}
              <div className="flex items-start gap-4">
                <FaPhone className="text-[#fea222] text-2xl mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Call Us</h3>
                  <p className="text-gray-600">+123 456 7890</p>
                  <p className="text-gray-600">+098 765 4321</p>
                </div>
              </div>
            </div>

            <hr className="my-8 border-gray-300" />

            <h3 className="text-lg font-semibold text-gray-800 mb-4">Follow Our Social Media</h3>
            <div className="flex gap-4 pb-5">
              <a href="#" className="bg-[#1d1919] text-white p-3 rounded-full hover:bg-[#fea222] transition"><FaFacebookF /></a>
              <a href="#" className="bg-[#1d1919] text-white p-3 rounded-full hover:bg-[#fea222] transition"><FaTwitter /></a>
              <a href="#" className="bg-[#1d1919] text-white p-3 rounded-full hover:bg-[#fea222] transition"><FaLinkedinIn /></a>
              <a href="#" className="bg-[#1d1919] text-white p-3 rounded-full hover:bg-[#fea222] transition"><FaInstagram /></a>
            </div>
          </div>

          {/* RIGHT SIDE - Contact Form */}
          <div className="bg-white p-8 rounded-ee-2xl rounded-e-2xl shadow-lg">
            <h2 className="text-3xl font-bold mb-6 text-[#1d1919]">Send Us A Message</h2>

            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input type="text" placeholder="Name" className="w-full border px-4 py-2 rounded-md focus:border-[#fea222] focus:border-0 focus:outline-none focus:ring-2 focus:ring-[#fea222]" />
                <input type="text" placeholder="Company" className="w-full border px-4 py-2 rounded-md focus:border-[#fea222] focus:border-0 focus:outline-none focus:ring-2 focus:ring-[#fea222]" />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <input type="text" placeholder="Phone" className="w-full border px-4 py-2 rounded-md focus:border-[#fea222] focus:border-0 focus:outline-none focus:ring-2 focus:ring-[#fea222]" />
                <input type="email" placeholder="Email" className="w-full border px-4 py-2 rounded-md focus:border-[#fea222] focus:border-0 focus:outline-none focus:ring-2 focus:ring-[#fea222]" />
              </div>
              <input type="text" placeholder="Subject" className="w-full border px-4 py-2 rounded-md  focus:border-[#fea222] focus:border-0 focus:outline-none focus:ring-2 focus:ring-[#fea222]" />
              <textarea placeholder="Message" className="w-full border px-4 py-2 rounded-md focus:border-[#fea222] focus:border-0 focus:outline-none focus:ring-2 focus:ring-[#fea222] h-32 resize-none"></textarea>
              <button type="submit" className="w-full bg-[#fea222] text-black py-3 rounded-md font-semibold hover:bg-[#e4911d] transition">Submit</button>
            </form>
          </div>

        </div>
      </section>

      {/* MAP SECTION ================================================= */}
      <section className="mt-12">
        <div className="w-full h-96">
          <iframe
            title="Company Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.086823321392!2d-122.40100068468115!3d37.79381237975625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064c5eaf4f7%3A0x63b9f85f0c593ebf!2s123%20Main%20St%2C%20San%20Francisco%2C%20CA%2094105!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      <Footer/>
    </>
  );
}

export default Contact;
