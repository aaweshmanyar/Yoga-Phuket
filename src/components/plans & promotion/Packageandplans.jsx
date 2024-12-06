import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Classes/Timetable.css";
import { Toast, ToastContainer } from "react-bootstrap";
import Logo from "../Classes/classesimg/demologo.png";

import MainLayout from "../../Layouts/MainLayout";

const Packageandplans = () => {
  const navigate = useNavigate();
  const [selectedPlan, setSelectedPlan] = useState(null);
  const plans = [
    {
      price: 599,
      title: 'Drop In',
      validity: 'Valid for 7 days',
      description: [
        'One Class Access',
        'Access Any 60-90 Minutes Classes',
        'Non Refundable',
      ],
    },
    {
      price: 999,
      title: '1 Day Pass',
      validity: 'Tourist package',
      description: [
        '2 + 1 Trial = 1499 THB',
        '4 + 1 Trial = 2250 THB',
        '6 + 1 Trial = 2399 THB',
      ],
    },
    {
      title: 'Private Class Pricing',
      price: 599,
      description: [
        '1 Class - 1000THB (1000THB/Class)',
        '5 Classes - 4500THB (900THB/Class)',
        '10 Classes - 8550THB (850THB/Class)',
      ],
    },
    {
      title: 'Duo Private Pricing',
      price: 599,
      description: [
        '1 Class - 1600THB (1600THB/Class)',
        '5 Classes - 7500THB (1500THB/Class)',
        '10 Classes - 14000THB (1400THB/Class)',
      ],
    },
  ];



  const handleSelectPlan = (plan) => {
    setSelectedPlan(plan); // Store the selected plan in state
  };

  React.useEffect(() => {
    if (selectedPlan) {
      navigate("/checkout", { state: { selectedPlan } });
    }
  }, [selectedPlan, navigate]); // Trigger navigation only when selectedPlan changes

  return (
    <MainLayout>
       <div className="bg-[#f6fcff] py-10 px-4 mt-[150px]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-lg shadow-lg flex flex-col justify-between p-8 text-center"
            style={{ width: '330px', height: '400px' }} // Adjust width and height to match the image
          >
            <div>
              <h2 className="text-xl font-semibold mb-2">{plan.title}</h2>
              <p className="text-5xl font-bold text-gray-800">THB {plan.price}</p>
              <p className="text-sm text-gray-500 mt-1 mb-6">{plan.validity}</p>
            </div>
            <button onClick={() => handleSelectPlan(plan)} className="w-full border-b  bg-green-300 text-white py-2 rounded-md font-semibold hover:bg-green-700 transition">
              Select
            </button>
            <div className="mt-6 ">
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
