import React from "react";

const PrivacyPolicy = () => (
  <div className="max-w-3xl mx-auto py-12 px-6 bg-white text-gray-800 dark:bg-gray-900 dark:text-gray-100 rounded-2xl shadow-lg transition-colors duration-300">
    <h1 className="text-4xl font-bold mb-10 text-center text-green-600 dark:text-green-400">
      Privacy Policy
    </h1>

    <section className="mb-10">
      <h2 className="text-2xl font-semibold mb-3 text-green-500 dark:text-green-300">Introduction</h2>
      <p className="text-base leading-relaxed">
        E-CATSULTA is an online health service platform developed for Catanduanes State University. We are committed to protecting the privacy and personal data of all users including students, faculty, and staff. This privacy policy outlines how we collect, use, and safeguard your information.
      </p>
    </section>

    <section className="mb-10">
      <h2 className="text-2xl font-semibold mb-3 text-green-500 dark:text-green-300">Information We Collect</h2>
      <ul className="list-disc pl-6 space-y-2 text-base">
        <li>Full name and university ID number</li>
        <li>Personal email address</li>
        <li>Health information and appointment details</li>
        <li>Google account information (name, email) for authentication</li>
      </ul>
    </section>

    <section className="mb-10">
      <h2 className="text-2xl font-semibold mb-3 text-green-500 dark:text-green-300">How We Use Your Information</h2>
      <ul className="list-disc pl-6 space-y-2 text-base">
        <li>To authenticate and verify authorized users through Google OAuth</li>
        <li>To manage health service appointments</li>
        <li>To improve and maintain the performance of the E-CATSULTA system</li>
      </ul>
    </section>

    <section className="mb-10">
      <h2 className="text-2xl font-semibold mb-3 text-green-500 dark:text-green-300">Data Security</h2>
      <p className="text-base leading-relaxed">
        All personal and health-related data are stored securely in our system and are accessible only to authorized health personnel. We use encryption and secure login mechanisms to protect your data against unauthorized access.
      </p>
    </section>

    <section className="mb-10">
      <h2 className="text-2xl font-semibold mb-3 text-green-500 dark:text-green-300">Third-Party Services</h2>
      <p className="text-base leading-relaxed">
        We use Google OAuth to authenticate users. No data is shared with third-party services beyond what is necessary for login and system operation. We do not sell or disclose user data for commercial purposes.
      </p>
    </section>

    <section className="mb-10">
      <h2 className="text-2xl font-semibold mb-3 text-green-500 dark:text-green-300">Your Rights</h2>
      <p className="text-base leading-relaxed">
        You have the right to request access to, correct, or delete your personal data. For any requests or concerns regarding your data, please contact the system administrator or the CatSU Infirmary.
      </p>
    </section>

    <section className="mb-10">
      <h2 className="text-2xl font-semibold mb-3 text-green-500 dark:text-green-300">Changes to This Policy</h2>
      <p className="text-base leading-relaxed">
        We may update this privacy policy periodically to reflect system updates or regulatory changes. Any changes will be posted on this page with a revised effective date.
      </p>
    </section>

    <section>
      <h2 className="text-2xl font-semibold mb-3 text-green-500 dark:text-green-300">Contact Us</h2>
      <p className="text-base leading-relaxed">
        For any privacy-related questions or concerns, please contact us at <a href="mailto:csu.infirmary@catanduanes.edu.ph" className="text-green-600 dark:text-green-500 underline">csu.infirmary@catanduanes.edu.ph</a>.
      </p>
    </section>
  </div>
);

export default PrivacyPolicy;
