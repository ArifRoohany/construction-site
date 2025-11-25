import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa"; // ✅ Import the arrow icon

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when scrolling down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-50 px-3 py-4 bg-[#fea222] text-white shadow-lg 
                  hover:bg-[#fcb414] transition-all duration-300 
                  ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"}`}
      aria-label="Go to top"
    >
      <FaArrowUp className="text-xl" /> {/* ✅ Use react-icons component */}
    </button>
  );
};

export default GoToTop;
