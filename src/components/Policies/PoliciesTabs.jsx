import React, { useState } from "react";
import TermsConditions from "./TermsConditions";
import PrivacyPolicy from "./PrivacyPolicy";
import RefundPolicy from "./RefundPolicy";

const PoliciesTabs = () => {
  const [activeTab, setActiveTab] = useState("terms");

  return (
    <div className="container mx-auto p-6 max-w-4xl bg-white rounded-md shadow-lg">
      {/* Tabs Navigation */}
      <div className="flex justify-around mb-6 border-b-2 border-gray-300">
        <button
          onClick={() => setActiveTab("terms")}
          className={`py-2 px-4 text-lg font-semibold ${
            activeTab === "terms" ? "text-green-600 border-b-2 border-green-600" : "text-gray-500"
          }`}
        >
          Terms & Conditions
        </button>
        <button
          onClick={() => setActiveTab("privacy")}
          className={`py-2 px-4 text-lg font-semibold ${
            activeTab === "privacy" ? "text-green-600 border-b-2 border-green-600" : "text-gray-500"
          }`}
        >
          Privacy Policy
        </button>
        <button
          onClick={() => setActiveTab("refund")}
          className={`py-2 px-4 text-lg font-semibold ${
            activeTab === "refund" ? "text-green-600 border-b-2 border-green-600" : "text-gray-500"
          }`}
        >
          Refund Policy
        </button>
      </div>

      {/* Tab Content */}
      <div className="text-gray-700 p-4">
        {activeTab === "terms" && <TermsConditions />}
        {activeTab === "privacy" && <PrivacyPolicy />}
        {activeTab === "refund" && <RefundPolicy />}
      </div>
    </div>
  );
};

export default PoliciesTabs;
