import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const FeatureCard = ({ icon, title, content, index }) => {
  const { isDarkMode } = useContext(ThemeContext);
  
  return (
    <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card transition-all duration-300`}>
      <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} ${isDarkMode ? "bg-dimBlue" : "bg-green-50"} shadow-md`}>
        <img src={icon} alt={title} className="w-[50%] h-[50%] object-contain" />
      </div>
      <div className="flex-1 flex flex-col ml-3">
        <h4 className={`font-poppins font-semibold ${isDarkMode ? "text-white" : "text-light-text"} text-[18px] leading-[23.4px] mb-1`}>
          {title}
        </h4>
        <p className={`font-poppins font-normal ${isDarkMode ? "text-dimWhite" : "text-light-dim-text"} text-[16px] leading-[24px]`}>
          {content}
        </p>
      </div>
    </div>
  );
};

const Business = () => {
  const { isDarkMode } = useContext(ThemeContext);
  
  return (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Book your appointment <br className="sm:block hidden" /> in three easy steps.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Our streamlined booking process ensures you can quickly connect with healthcare professionals at Catanduanes State University Clinic.
        </p>

        <Button styles={`mt-10`} />
      </div>

      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Business;
