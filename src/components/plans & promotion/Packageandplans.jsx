import React from "react";
import { useEffect, useState } from "react";
import "../Classes/Timetable.css";
import { Toast, ToastContainer } from "react-bootstrap";
import Logo from "../Classes/classesimg/demologo.png";

import MainLayout from "../../Layouts/MainLayout";

const Packageandplans = () => {
  const [showToast, setShowToast] = useState(true);
  useEffect(() => {
    setTimeout(() => setShowToast(false), 10000);
  }, []);
  return (
    <MainLayout>
      <div className="mt-[160px] mb-[120px] px-4 sm:px-8 lg:px-16">
        {/* Info Box */}
       {/* Bootstrap Toast Notification */}
       <ToastContainer position="top-end" className="p-3 fixed mt-8">
          <Toast
            show={showToast} // Conditionally render the Toast
            onClose={() => setShowToast(false)} // Close on click of X button
            delay={5000} // Duration before it auto-closes (optional)
            autohide // Auto-hide after delay
          >
            <Toast.Header>
              <img
                src={Logo} // Use your image URL here
                className="rounded me-2 object-cover w-5 h-5"
                alt="Instructor"
              />
              <strong className="me-auto">Aadiyogacenter Phuket</strong>
              <small>Now</small>
            </Toast.Header>
            <Toast.Body>
            We are working on this Package & Plans section. If you want to book
            these plans, please contact our yoga instructor through the WhatsApp
            contact below. Thank you 🙏
            </Toast.Body>
          </Toast>
        </ToastContainer>

        {/* Plan Cards */}
        <div className="flex flex-wrap justify-center gap-8 mt-8 px-14">
          {/* Plan Card 1 */}
          <div className="bg-white shadow-lg border border-gray-300 rounded-lg w-full max-w-sm p-6">
            <p className="text-2xl font-bold text-gray-800 text-center mb-4">
              DROP IN
            </p>
            <h1 className="text-4xl font-extrabold text-center text-green-600 mb-2">
              THB 599
            </h1>
            <p className="text-center text-gray-500 mb-4">Valid for 7 days</p>
            <button className="w-full bg-green-300 hover:bg-green-600 text-white font-bold py-2 rounded-md transition duration-300 ease-in-out mb-4">
              Contact us
            </button>
            <div className="text-center space-y-2">
              <p className="text-gray-700">One Class Access</p>
              <p className="text-gray-500">
                Perfect for those who want flexibility in their schedule.
              </p>
              <p className="text-gray-500">
                No commitment required. Access to any scheduled class.
              </p>
              <p className="font-bold text-red-500">Non-Refundable</p>
            </div>
          </div>

          {/* Plan Card 2 */}
          <div className="bg-white shadow-lg border border-gray-300 rounded-lg w-full max-w-sm p-6">
            <p className="text-2xl font-bold text-gray-800 text-center mb-4">
              1 Day Pass
            </p>
            <h1 className="text-4xl font-extrabold text-center text-green-600 mb-2">
              999 THB
            </h1>
            <p className="text-center text-gray-500 mb-4">Tourist Package</p>
            <button className="w-full bg-green-300 hover:bg-green-600 text-white font-bold py-2 rounded-md transition duration-300 ease-in-out mb-4">
            Contact us
            </button>
            <div className="text-center space-y-2">
              <p className="text-gray-700">2 + 1 Trial = 1499 THB</p>
              <p className="text-gray-500">4 + 1 Trial = 2250 THB</p>
              <p className="text-gray-500">6 + 1 Trial = 2399 THB</p>
            </div>
          </div>

          {/* Plan Card 3 */}
          <div className="bg-white shadow-lg border border-gray-300 rounded-lg w-full max-w-sm p-6">
            <h1 className="text-4xl font-extrabold text-center text-green-600 mb-16">
              Private Class Pricing
            </h1>
            <button className="w-full bg-green-300 hover:bg-green-600 text-white font-bold py-2 rounded-md transition duration-300 ease-in-out mb-4">
            Contact us
            </button>
            <div className="text-center space-y-2">
              <p className="text-gray-700">1 Class - 1000THB (1000THB/Class)</p>
              <p className="text-gray-700">5 Classes - 4500THB (900THB/Class)</p>
              <p className="text-gray-500">10 Classes - 8550THB (850THB/Class)</p>
            </div>
          </div>

          {/* Plan Card 4 */}
          <div className="bg-white shadow-lg border border-gray-300 rounded-lg w-full max-w-sm p-6">
            <h1 className="text-4xl font-extrabold text-center text-green-600 mb-16">
              Duo Private Pricing
            </h1>
            <button className="w-full bg-green-300 hover:bg-green-600 text-white font-bold py-2 rounded-md transition duration-300 ease-in-out mb-4">
            Contact us
            </button>
            <div className="text-center space-y-2">
              <p className="text-gray-700">1 Class - 1600THB (1600THB/Class)</p>
              <p className="text-gray-700">5 Classes - 7500THB (1500THB/Class)</p>
              <p className="text-gray-500">10 Classes - 14000THB (1400THB/Class)</p>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Packageandplans;
