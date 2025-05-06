import { useContext } from "react";
import styles from "../style";
import { discount, robot, bill } from "../assets";
import GetStarted from "./GetStarted";
import { ThemeContext } from "../context/ThemeContext";

const Hero = () => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className={isDarkMode ? "text-white font-semibold" : "text-light-text font-semibold"}>CatSU Health Services</span>{" "}
            <span className={isDarkMode ? "text-white" : "text-light-text"}>👨‍⚕️👩‍⚕️</span> 
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className={`flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] ${isDarkMode ? "text-white" : "text-light-text"} ss:leading-[100.8px] leading-[75px]`}>
            Book Your <br className="sm:block hidden" />{""}
            <span className="text-gradient">Medical Appointment</span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>

        <h1 className={`flex-1 font-poppins font-semibold ss:text-[68px] text-[48px] ${isDarkMode ? "text-white" : "text-light-text"} ss:leading-[100.8px] leading-[75px]`}>
          Today
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Access free medical and dental services at Catanduanes State University Clinic. 
          Skip the wait and schedule your appointment now!
        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img 
          src={robot} 
          alt="medical services" 
          className="w-[100%] h-[100%] relative z-[5]" 
          loading="lazy"
          aria-label="Medical appointment booking interface" 
        />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
