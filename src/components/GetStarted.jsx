import styles from "../style";
import { arrowUp } from "../assets";
// No longer need ThemeContext import as we're using Tailwind's dark: prefix
// import { useContext } from "react";
// import { ThemeContext } from "../context/ThemeContext";

const GetStarted = () => {
  // No longer need isDarkMode as we're using Tailwind's dark: prefix
  // const { isDarkMode } = useContext(ThemeContext);
  
  return (
    <a 
      href="https://e-catsulta.vercel.app/" 
      target="_self" 
      rel="noopener noreferrer"
      aria-label="Book your appointment now"
      className="hover:scale-105 transition-transform duration-300"
    >
      <div className={`${styles.flexCenter} w-[160px] h-[160px] rounded-full bg-blue-gradient p-[2px] cursor-pointer shadow-lg`}>
        {/* Replace conditional logic with dark: prefix */}
        <div className={`${styles.flexCenter} flex-col bg-white dark:bg-primary w-[100%] h-[100%] rounded-full`}>
          <div className={`${styles.flexStart} flex-row`}>
            <p className="font-poppins font-medium text-[20px] leading-[23.4px]">
              <span className="text-gradient">Book</span>
            </p>
            <img src={arrowUp} alt="arrow" className="w-[23px] h-[23px] object-contain" />
          </div>
          
          <p className="font-poppins font-medium text-[20px] leading-[23.4px]">
            <span className="text-gradient">Appointment</span>
          </p>
        </div>
      </div>
    </a>
  );
};

export default GetStarted;
