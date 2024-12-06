import React, { useState } from "react";
import { FaLock } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import MainLayout from "../../Layouts/MainLayout";

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { selectedPlan } = location.state || {}; // Get the selected plan from state

  const [email, setEmail] = useState(""); // Store email input
  const [isStep2Open, setIsStep2Open] = useState(false); // Toggle Step 2 visibility
  const [sessionCount, setSessionCount] = useState(1); // Default session count is 1
  const [startDate, setStartDate] = useState(new Date()); // Default start date

  // Increment session count
  const handleIncrement = () => setSessionCount((prevCount) => prevCount + 1);

  // Decrement session count (minimum is 1)
  const handleDecrement = () => {
    if (sessionCount > 1) setSessionCount((prevCount) => prevCount - 1);
  };

  // Calculate the total price
  const calculateTotalPrice = () => Number(selectedPlan.price) * sessionCount;

  // Step 1: Proceed to Step 2
  const handleContinue = () => {
    if (email.trim() === "") {
      alert("Please enter a valid email.");
    } else {
      setIsStep2Open(true);
    }
  };

  // Redirect if no plan is selected
  if (!selectedPlan) {
    return (
      <div className="text-center mt-10">
        <p>No plan selected. Please go back and select a plan.</p>
        <button
          className="mt-4 bg-green-300 text-white py-2 px-4 rounded hover:bg-green-500"
          onClick={() => navigate("/plans")}
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <MainLayout>
      <div className="bg-gray-50 py-10 px-4 mt-[150px]">
        <div className="max-w-5xl mx-auto bg-white shadow-lg p-6 rounded-lg">
          {/* Header */}
          <h1 className="text-2xl font-semibold mb-6 text-gray-700">
            Checkout
          </h1>
          <p className="border-b-2 border-gray-300 mb-6"></p>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Section */}
            <div>
              {/* Customer Details */}
              <div className="border-b border-gray-300 pb-6 mb-6">
                <h2 className="text-lg font-semibold mb-2 text-gray-700">
                  1. Customer Details
                </h2>
                <p className="bg-[#dcdcdc] text-heading text-sm px-4 py-2 rounded mb-2">
                  Already have an account?{" "}
                  <a
                    href="/signin"
                    className="text-blue-600 font-bold underline hover:text-blue-800"
                  >
                    Log in
                  </a>{" "}
                  for a faster checkout.
                </p>
                <p className="text-sm text-gray-600  text-center mt-4 mb-4">
                  {" "}
                  ------------- Or continue as guest -------------
                </p>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded mb-4"
                />
                <button
                  onClick={handleContinue}
                  className="w-full bg-green-300 text-white py-2 rounded hover:bg-green-500"
                >
                  Continue
                </button>
              </div>

              {/* Additional Info */}
              {isStep2Open && (
                <div>
                  <h2 className="text-lg font-semibold mb-4">
                    Additional Info
                  </h2>
                  <p className="mb-4">
                    Thank you for choosing the{" "}
                    <strong>{selectedPlan.title}</strong> plan. Proceed to the
                    payment section to complete your order.
                  </p>
                  <button
                    onClick={() =>
                      alert("Payment Gateway Integration Placeholder")
                    }
                    className="w-full bg-green-300 text-white py-2 rounded hover:bg-green-500"
                  >
                    Proceed to Payment
                  </button>
                </div>
              )}
            </div>

            {/* Right Section */}
            <div className="bg-gray-100 border border-gray-300 p-6 rounded">
              {/* Order Summary */}
              <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>

              {/* Start Date */}
              <div className="mt-6 mb-8">
                <label className="text-sm font-semibold block mb-2">
                  Choose a start date *
                </label>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>

              <div className="mb-6">
                <p className="text-sm">
                  <strong>Plan:</strong> {selectedPlan.title}
                </p>
                <p className="text-sm">
                  <strong>Price:</strong> THB {selectedPlan.price}
                </p>
                <p className="text-sm">
                  <strong>Sessions:</strong> {sessionCount}
                </p>
              </div>

              {/* Adjust Sessions */}
              <div className="flex items-center border-t border-gray-300 pt-4">
                <p className="text-sm">Adjust Sessions:</p>
                <button
                  className="ml-4 px-3 py-1 bg-gray-200 text-gray-600 rounded hover:bg-gray-300"
                  onClick={handleDecrement}
                >
                  -
                </button>
                <span className="px-4">{sessionCount}</span>
                <button
                  className="px-3 py-1 bg-gray-200 text-gray-600 rounded hover:bg-gray-300"
                  onClick={handleIncrement}
                >
                  +
                </button>
              </div>

              {/* Total Price */}
              <p className="mt-4 text-lg font-bold">
                Total Price: THB {calculateTotalPrice()}
              </p>

              {/* Secure Checkout */}
              <div className="mt-8">
                <div className="flex items-center text-green-600 mb-4">
                  <FaLock className="mr-2" />
                  <h2 className="text-lg font-semibold">Secure Checkout</h2>
                </div>
                <ul className="text-sm list-disc ml-6 text-gray-600">
                  <li>
                    <strong>Data Usage:</strong> Collected data helps us process
                    payments, respond to inquiries, and provide personalized
                    services.
                  </li>
                  <li className="mt-2">
                    <strong>Refund Processing:</strong> Approved refunds are
                    returned within 5-7 business days.
                  </li>
                  <li className="mt-2">
                    <strong>Cancellation:</strong> Contact support to cancel a
                    reservation or subscription.
                  </li>
                  <li className="mt-2">
                    Transactions are secure and data is protected.
                  </li>
                  <li className="mt-2">
                    Additional charges or taxes will be shown before payment.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Checkout;
