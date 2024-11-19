import React from "react";
import MainLayout from "../../Layouts/MainLayout";
import Contact from "../Contact/Contact";

const PrivacyPolicy = () => {
  return (
    <MainLayout>
      <div className="bg-white p-8 md:p-12 lg:p-16 max-w-3xl mx-auto my-8 rounded-lg shadow-md mt-[150px]">
        <h2 className="text-3xl font-bold mb-6 text-green-700 text-center">
          Privacy Policy
        </h2>
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>
            <strong className="text-green-800">1. Information Gathering:</strong> 
            We collect personal data, such as your name, contact information, and health details, only when necessary to process reservations and enhance your experience on our platform.
          </p>
          <p>
            <strong className="text-green-800">2. Data Usage:</strong> 
            Collected data helps us process payments, respond to inquiries, and provide personalized services. Health information is solely used to guide safe yoga practice.
          </p>
          <p>
            <strong className="text-green-800">3. Information Sharing:</strong> 
            Personal information is not shared with external parties unless necessary to deliver services, comply with legal requirements, or protect our rights.
          </p>
          <p>
            <strong className="text-green-800">4. Security Measures:</strong> 
            We implement industry-standard security measures to protect your data. However, due to inherent risks in internet systems, we cannot guarantee absolute security.
          </p>
          <p>
            <strong className="text-green-800">5. Cookies and Analytics:</strong> 
            Our website uses cookies to enhance user experience and analyze site traffic. By using our website, you consent to this practice.
          </p>
        </div>
      </div>
      <Contact/>
    </MainLayout>
  );
};

export default PrivacyPolicy;
