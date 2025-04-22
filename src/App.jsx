import styles from "./style";
import { Billing, Business, CardDeal, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero, FAQ } from "./components";
// Only import ThemeProvider if ThemeContext is not used elsewhere in this file
import { ThemeProvider } from "./context/ThemeContext"; 

// Simplified ThemedApp component
const ThemedApp = () => {
  // Removed useContext and conditional bgClass logic
  
  return (
    // Apply background and base text colors directly using dark: prefix
    // Added default text color for light mode and specific dark mode text color
    <div className={`bg-light-primary dark:bg-primary w-full overflow-hidden transition-colors duration-300 text-light-text dark:text-dimWhite`}>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          {/* Navbar likely needs internal dark: adjustments */}
          <Navbar />
        </div>
      </div>

      {/* Parent div now handles background color, removed redundant classes */}
      <div className={`${styles.flexStart}`}> 
        <div className={`${styles.boxWidth}`}>
           {/* Hero likely needs internal dark: adjustments */}
          <Hero />
        </div>
      </div>
      
       {/* Parent div now handles background color, removed redundant classes */}
      <div className={`${styles.paddingX} ${styles.flexCenter}`}> 
        <div className={`${styles.boxWidth}`}>
          {/* These components likely need internal dark: adjustments */}
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Clients />
          <FAQ />
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
  );
};

// Root App component remains the same
const App = () => (
  <ThemeProvider>
    <ThemedApp />
  </ThemeProvider>
);

export default App;
