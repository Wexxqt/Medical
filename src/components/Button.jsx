import React from "react";

const Button = ({ styles }) => (
  <a href="https://e-catsulta.vercel.app/" target="_self" rel="noopener noreferrer">
    <button type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
      Book Now
    </button>
  </a>
);

export default Button;
