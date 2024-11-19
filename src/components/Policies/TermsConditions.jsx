import React from "react";
import MainLayout from "../../Layouts/MainLayout";
import Contact from "../Contact/Contact";

const TermsConditions = () => {
  return (
    <MainLayout>
      <div className="bg-white p-8 md:p-12 lg:p-16 max-w-3xl mx-auto my-8 rounded-lg shadow-md mt-[150px]">
        <h2 className="text-3xl font-bold mb-6 text-green-700 text-center">
          Terms & Conditions
        </h2>
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>
            <strong className="text-green-800">1. Terms Accepted:</strong> By using this website or participating in our programs, workshops, or yoga sessions, you accept these terms and conditions. Please refrain from using our services if you disagree.
          </p>
          <p>
            <strong className="text-green-800">2. Health Disclaimer:</strong> Yoga involves physical activities that can lead to injury. By participating, you agree to do so at your own risk and assess your own health and fitness suitability. Please consult a doctor if you have any health concerns before starting.
          </p>
          <p>
            <strong className="text-green-800">3. Property Rights:</strong> All content on our website, including text, photos, and videos, is our property. Reproduction or redistribution without permission is prohibited.
          </p>
          <p>
            <strong className="text-green-800">4. Changes to Classes and Services:</strong> We reserve the right to modify or cancel classes, workshops, or services with adequate notice. Any major changes will be communicated in advance.
          </p>
          <p>
            <strong className="text-green-800">5. Liability Restrictions:</strong> We are not responsible for any loss, illness, or harm arising from using our services. While our instructors provide guidance, you are responsible for practicing safely according to your own abilities.
          </p>
          <p>
            <strong className="text-green-800">6. Terms Modifications:</strong> We may revise these terms periodically. Continued use of our services implies acceptance of any modifications.
          </p>
        </div>
      </div>
      <Contact/>
    </MainLayout>
  );
};

export default TermsConditions;
