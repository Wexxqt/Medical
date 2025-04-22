import { useState } from "react";
import styles from "../style";

// FAQ data - you can replace these with your actual questions and answers
const faqData = [
  {
    question: "What services does e-catsulta offer?",
    answer: "E-catsulta provides online medical and dental appointment booking services for Catanduanes State University Clinic. Our platform allows students and employees to easily schedule appointments, check doctor availability, and access healthcare services without long waits."
  },
  {
    question: "How do I book an appointment?",
    answer: "To book an appointment, simply log in to your account or register if you’re a new user. Once logged in, you can view the list of available doctors and choose a time slot that fits your schedule. After securing your appointment, all that’s left is to meet your doctor at the Catanduanes State University Infirmary and receive the medical assistance you need."
  },
  {
    question: "Can I cancel or reschedule my appointment?",
    answer: "No, once an appointment is scheduled, cancellations or rescheduling are not allowed, especially to avoid last-minute cancellations that can leave appointment slots unused. This policy ensures that the infirmary can manage time and resources efficiently and give fair access to medical services for all students and staff.  "
  },
  {
    question: "Is my medical information secure?",
    answer: "Yes, we take data security and privacy very seriously. All your medical information is encrypted and stored securely following industry-standard protocols. We comply with relevant data protection regulations and only authorized healthcare professionals can access your medical information."
  },
  {
    question: "What should I bring to my appointment?",
    answer: "Please bring a screenshot of your appointment QR code or a copy of your appointment code along with your valid University ID. If you don’t have your ID, you may present your Certificate of Enrollment as proof. The infirmary staff will scan your QR code or manually input your appointment code for verification before your consultation."
  }
];

// Accordion Item Component
const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200 dark:border-gray-700">
      <button
        className="flex justify-between items-center w-full py-5 px-4 text-left focus:outline-none focus:ring-2 focus:ring-light-secondary dark:focus:ring-secondary rounded-lg"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <h3 className="font-poppins font-medium text-lg text-light-text dark:text-white">
          {question}
        </h3>
        <span className={`w-6 h-6 flex items-center justify-center rounded-full ${isOpen ? "bg-light-secondary dark:bg-secondary text-white transform rotate-180" : "bg-gray-200 dark:bg-gray-700"} transition-all duration-300`}>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="16" 
            height="16" 
            fill="currentColor" 
            viewBox="0 0 16 16"
            className={`${isOpen ? "text-white transform rotate-180" : "text-light-text dark:text-white"} transition-transform duration-300`}
          >
            <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
          </svg>
        </span>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 py-4 px-6" : "max-h-0 py-0 px-6"}`}
        aria-hidden={!isOpen}
      >
        <p className="font-poppins text-light-dim-text dark:text-dimWhite leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
};

// Main FAQ Component
const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0); // Default first item open

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className={`${styles.paddingY}`}>
      <div className={`${styles.flexStart} flex-col`}>
        <div className="w-full">
          <h2 className={styles.heading2}>Frequently Asked Questions</h2>
          <p className={`${styles.paragraph} max-w-[700px] mt-5 mb-10`}>
            Find answers to common questions about e-catsulta and our services. 
            If you need further assistance, please contact our support team.
          </p>
          
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-2 mt-6">
            {faqData.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={index === openIndex}
                onClick={() => toggleFAQ(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ; 