import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../Layouts/MainLayout";

const Packageandplans = () => {
  const navigate = useNavigate();
  const [selectedPlan, setSelectedPlan] = useState(null);

  const plans = [
    {
      price: 599,
      title: "Drop In",
      validity: "Valid for 7 days",
      description: [
        "One Class Access",
        "Access Any 60-90 Minutes Classes",
        "Non Refundable",
      ],
    },
    {
      price: 999,
      title: "Tourist package",
      validity: "Valid for 7 days",
      description: [
        "2 + 1 Trial = 1499 THB",
        "4 + 1 Trial = 2250 THB",
        "6 + 1 Trial = 2399 THB",
      ],
    },
    {
      title: "Private Class Pricing",
      validity: "Valid for 3 to 6 months",
      defprice: 1000,
      description: [
        "1 Class - 1000THB (1000THB/Class)",
        "5 Classes - 4500THB (900THB/Class)",
        "10 Classes - 8550THB (850THB/Class)",
      ],
    },
    {
      title: "Duo Private Pricing",
      validity: "Valid for 3 to 6 months",
      defprice: 1600,
      description: [
        "1 Class - 1600THB (1600THB/Class)",
        "5 Classes - 7500THB (1500THB/Class)",
        "10 Classes - 14000THB (1400THB/Class)",
      ],
    },
  ];

  const handleSelectPlan = (plan) => {
    setSelectedPlan(plan);
  };

  useEffect(() => {
    if (selectedPlan) {
      navigate("/checkout", { state: { selectedPlan } });
    }
  }, [selectedPlan, navigate]);

  return (
    <MainLayout>
      <div className="bg-[#f6fcff] py-10 px-4 mt-[150px]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg shadow-lg flex flex-col justify-between p-8 text-center"
            >
              <div>
                {plan.price ? (
                  <>
                    <h2 className="text-xl font-semibold mb-2">{plan.title}</h2>
                    <p className="text-5xl font-bold text-gray-800">
                      THB {plan.price}
                    </p>
                    <p className="text-sm text-gray-500 mt-1 mb-6">
                      {plan.validity}
                    </p>
                  </>
                ) : (
                  <>
                    <p className="text-5xl font-bold text-gray-800 mb-2">
                      {plan.title}
                    </p>
                   
                  </>
                )}
              </div>
              <button
                onClick={() => handleSelectPlan(plan)}
                className="w-full bg-green-300 text-white py-2 rounded-md font-semibold hover:bg-green-700 transition"
              >
                Select
              </button>
              <div className="mt-6">
                <ul className="text-gray-700 text-sm leading-7">
                  {plan.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default Packageandplans;