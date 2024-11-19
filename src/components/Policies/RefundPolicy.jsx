import React from "react";
import MainLayout from "../../Layouts/MainLayout";
import Contact from "../Contact/Contact";

const RefundPolicy = () => {
  return (
    <MainLayout>
      <div className="bg-white p-8 md:p-12 lg:p-16 max-w-3xl mx-auto my-8 rounded-lg shadow-md mt-[150px]">
        <h2 className="text-3xl font-bold mb-6 text-green-700 text-center">
          Refund Policy
        </h2>
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>
            <strong className="text-green-800">1. Refunds for Classes and Workshops:</strong> 
            To receive a refund for classes or workshops, cancellation requests must be made at least 24 hours in advance. Cancellations made less than 24 hours prior may qualify for a credit but are not refundable.
          </p>
          <p>
            <strong className="text-green-800">2. Subscription Refunds:</strong> 
            Monthly membership cancellations made before the next billing cycle incur no additional charges. However, charges from the current cycle are non-refundable.
          </p>
          <p>
            <strong className="text-green-800">3. Refund Processing:</strong> 
            Approved refunds are returned to the original payment method within 5-7 business days.
          </p>
          <p>
            <strong className="text-green-800">4. Cancellation Process:</strong> 
            To cancel a reservation or subscription, please contact our support team. Cancellations are effective from the following billing cycle.
          </p>
        </div>
      </div>
      <Contact/>
    </MainLayout>
  );
};

export default RefundPolicy;
