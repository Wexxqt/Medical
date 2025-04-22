import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Button = ({ styles }) => {
  const { isDarkMode } = useContext(ThemeContext);
  
  return (
    <a 
      href="https://book-ecatsulta.com/" 
      target="_self" 
      rel="noopener noreferrer"
      aria-label="Book your appointment now"
    >
      <button 
        type="button" 
        className={`py-4 px-8 font-poppins font-medium text-[18px] ${isDarkMode ? "text-primary" : "text-white"} bg-blue-gradient rounded-[10px] outline-none ${styles} hover:shadow-lg transition-all duration-300 hover:scale-105`}
      >
        Book Appointment
      </button>
    </a>
  );
};

export default Button;
