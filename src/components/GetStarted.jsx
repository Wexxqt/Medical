import styles from "../style";
import { arrowUp } from "../assets";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

<<<<<<< HEAD
const GetStarted = () => {
  const { isDarkMode } = useContext(ThemeContext);
  
  return (
    <a 
      href="https://e-catsulta.vercel.app/" 
      target="_self" 
      rel="noopener noreferrer"
      aria-label="Book your appointment now"
      className="hover:scale-105 transition-transform duration-300"
    >
      <div className={`${styles.flexCenter} w-[160px] h-[160px] rounded-full bg-blue-gradient p-[2px] cursor-pointer shadow-lg`}>
        <div className={`${styles.flexCenter} flex-col ${isDarkMode ? "bg-primary" : "bg-white"} w-[100%] h-[100%] rounded-full`}>
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
=======
const GetStarted = () => (
  <a href="https://book-ecatsulta.com/" target="_self" rel="noopener noreferrer">
  <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>
    <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
      <div className={`${styles.flexStart} flex-row`}>
        <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
          <span className="text-gradient">Book</span>
        </p>
        <img src={arrowUp} alt="arrow-up" className="w-[23px] h-[23px] object-contain" />
>>>>>>> f4212e68f4090fb5af96fd4c9f5321a21110baa0
      </div>
    </a>
  );
};

export default GetStarted;
