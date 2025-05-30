import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Billing = () => {
  // Removed unused isDarkMode variable, assuming theme is handled via Tailwind dark: prefix now
  // const { isDarkMode } = useContext(ThemeContext);

  return (
    <section id="product" className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img src={bill} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

        {/* gradient start */}
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient dark:opacity-50" />
        <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient dark:opacity-50" />
        {/* gradient end */}
      </div>

      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Easily book your appointments <br className="sm:block hidden" /> & healthcare access.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          E-CATSULTA is an online appointment system designed to make healthcare services at Catanduanes State University Clinic
          more accessible and hassle-free. E-CATSULTA lets students and employees schedule visits, check doctor availability, and avoid long waits—anytime, anywhere.
        </p>

        <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
          {/* Commented out app store buttons - uncomment if needed */}
          {/* <img src={apple} alt="apple_store" className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer" /> */}
          {/* <img src={google} alt="google_play" className="w-[144.17px] h-[43.08px] object-contain cursor-pointer" /> */}
        </div>
      </div>
    </section>
  );
};

export default Billing;
