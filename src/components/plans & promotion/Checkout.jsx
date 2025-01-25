import React, { useState } from "react";
import { FaLock } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import MainLayout from "../../Layouts/MainLayout";
import './Checkout.css'

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { selectedPlan } = location.state || {};

  const [email, setEmail] = useState("");
  const [isStep2Open, setIsStep2Open] = useState(false);
  const [sessionCount, setSessionCount] = useState(1);
  const [selectedOption, setSelectedOption] = useState("");
  const [price, setPrice] = useState(selectedPlan?.price || 0);
  const [isLoading, setIsLoading] = useState(false); // State for loader

  const handleIncrement = () => setSessionCount((prevCount) => prevCount + 1);
  const handleDecrement = () => {
    if (sessionCount > 1) setSessionCount((prevCount) => prevCount - 1);
  };

  const calculateTotalPrice = () => Number(price) * sessionCount;

  const handleContinue = () => {
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }
    setIsStep2Open(true);
  };

  const handleDropdownChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedOption(selectedValue);
    const priceMatch = selectedValue.match(/(\d+)\s*THB/);
    if (priceMatch) {
      setPrice(parseInt(priceMatch[1], 10));
    }
  };

  const loadRazorpayScript = () => {
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => reject(false);
      document.body.appendChild(script);
    });
  };

  const handlePayment = async () => {
    const amount = calculateTotalPrice();
    setIsLoading(true); // Start loader
    try {
      const isScriptLoaded = await loadRazorpayScript();
      if (!isScriptLoaded) {
        alert("Razorpay SDK failed to load. Are you online?");
        setIsLoading(false); // Stop loader
        return;
      }

      const trimmedDescription = selectedOption
        ? selectedOption.split("Trial")[0].trim()
        : selectedPlan.description;

      const response = await fetch(
        "https://api.aadiyogacenterphuket.com/payment/checkout",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email,
            amount,
            sessionCount,
            planName: selectedPlan.title,
            validity: selectedPlan.validity,
            description: trimmedDescription,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to create payment order");
      }

      const options = {
        key: data.key_id,
        amount: data.amount,
        currency: data.currency,
        name: "Aadi Yoga Center Phuket",
        description: "Purchase Subscription Plan",
        order_id: data.orderId,
        handler: function (response) {
          alert(`Payment Successful\nPayment ID: ${response.razorpay_payment_id}`);
          setIsLoading(false); // Stop loader
          navigate("/normalclass", { state: { email, amount } });
        },
        prefill: { email },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.error("Error during payment:", error);
      alert("An error occurred during payment. Please try again.");
      setIsLoading(false); // Stop loader
    }
  };

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
          <h1 className="text-2xl font-semibold mb-6 text-gray-700">Checkout</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
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

              {isStep2Open && (
                <div>
                  <h2 className="text-lg font-semibold mb-4 mt-4">Additional Info</h2>
                  <p className="mb-4">
                    Thank you for choosing the <strong>{selectedPlan.title}</strong> plan.
                    Proceed to the payment section to complete your order.
                  </p>
                  <button
                    onClick={handlePayment}
                    className="w-full bg-green-300 text-white py-2 rounded hover:bg-green-500 flex items-center justify-center"
                    disabled={isLoading} // Disable button while loading
                  >
                    {isLoading ? (
                      <span className="loader mr-2"></span> // Show loader
                    ) : (
                      "Proceed to Payment"
                    )}
                  </button>
                </div>
              )}
            </div>

            <div className="bg-gray-100 border border-gray-300 p-6 rounded">
              <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>

              {(selectedPlan.title === "Tourist package" ||
                selectedPlan.title === "Private Class Pricing" ||
                selectedPlan.title === "Duo Private Pricing") && (
                <div className="mb-6">
                  <label className="block text-sm font-semibold mb-2">Choose an option</label>
                  <select
                    value={selectedOption}
                    onChange={handleDropdownChange}
                    className="w-full p-2 border border-gray-300 rounded"
                  >
                    <option value="">Select</option>
                    {selectedPlan.description.map((option, index) => (
                      <option key={index} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              <div className="mb-6">
                <p className="text-sm"><strong>Plan:</strong> {selectedPlan.title}</p>
                <p className="text-sm"><strong>Price:</strong> THB {price}</p>
                <p className="text-sm"><strong>Sessions:</strong> {sessionCount}</p>
              </div>

              <div className="flex items-center border-t border-gray-300 pt-4">
                <p className="text-sm">Adjust Sessions:</p>
                <button onClick={handleDecrement} className="ml-4 px-3 py-1 bg-gray-200 text-gray-600 rounded">-</button>
                <span className="px-4">{sessionCount}</span>
                <button onClick={handleIncrement} className="px-3 py-1 bg-gray-200 text-gray-600 rounded">+</button>
              </div>

              <p className="mt-4 text-lg font-bold">Total Price: THB {calculateTotalPrice()}</p>

              <div className="mt-8">
                <div className="flex items-center text-green-600 mb-4">
                  <FaLock className="mr-2" />
                  <h2 className="text-lg font-semibold">Secure Checkout</h2>
                </div>
                <ul className="text-sm list-disc ml-6 text-gray-600">
                  <li>
                    <strong>Data Usage:</strong> Collected data helps us process
                    payments, respond to inquiries, and provide personalized services.
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
