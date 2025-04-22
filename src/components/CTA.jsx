import styles from "../style";
import Button from "./Button";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const CTA = () => {
  const { isDarkMode } = useContext(ThemeContext);
  
  return (
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
      <div className="flex-1 flex flex-col">
        <h2 className={styles.heading2}>Schedule Your Visit Today!</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          View available slots and book your appointment with university healthcare professionals. 
          Free medical and dental services for all CatSU students and staff.
        </p>
      </div>

      <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
        <Button styles="w-full" />
      </div>
    </section>
  );
};

export default CTA;
