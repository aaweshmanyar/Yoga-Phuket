import React, { useState } from "react";
import { BsChevronRight } from "react-icons/bs";

const YogaPricingPlans = () => {
  const [index, setIndex] = useState(null); // No initial selection

  const pricing = [
    {
      title: "Group Class Pricing",
      plans: [
        { name: "Drop in: 599 THB" },
        { name: "5+1 Trial", price: "2400 THB", costPerClass: "(400 THB/Class)" },
        { name: "12+1 Trial", price: "4800 THB", costPerClass: "(370 THB/Class)" },
        { name: "21+1 Trial", price: "7700 THB", costPerClass: "(350 THB/Class)" },
        { name: "29+1 Trial", price: "9900 THB", costPerClass: "(330 THB/Class)" },
      ],
      buttonText: "Select Group Plan",
    },
    {
      title: "Tourist Package",
      plans: [
        { name: "1 Day pass = 799THB" },
        { name: "2+1 Trial", price: "1350 THB" },
        { name: "4+1 Trial", price: "2125 THB" },
      ],
      buttonText: "Select Tourist Plan",
    },
    {
      title: "Private Class Pricing",
      plans: [
        { name: "1 Class", price: "1200 THB" },
        { name: "5 Class", price: "5500 THB", costPerClass: "(1100 THB/Class)" },
        { name: "10 Class", price: "9990 THB", costPerClass: "(999 THB/Class)" },
        { name: "20 Class", price: "17980 THB", costPerClass: "(899 THB/Class)" },
      ],
      buttonText: "Select Private Plan",
    },
    {
      title: "Duo Private Pricing",
      plans: [
        { name: "1 Class", price: "1600 THB" },
        { name: "5 Class", price: "7500 THB", costPerClass: "(1500 THB/Class)" },
        { name: "10 Class", price: "14000 THB", costPerClass: "(1400 THB/Class)" },
      ],
      buttonText: "Select Duo Plan",
    },
  ];

  return (
    <section className="section-sm lg:section-lg from-green-300 to-white py-12 lg:py-16 mt-[120px]">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-10 lg:mb-14">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">
            AADI YOGA CENTER - Class Pricing Plans
          </h2>
          <p className="text-base lg:text-lg max-w-lg mx-auto mt-4 text-gray-600">
            Choose a class package and start your yoga journey today. We offer group and private classes, including options for tourists!
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {pricing.map((category, currentIndex) => (
            <div
              onClick={() => setIndex(currentIndex)} // Setting the clicked div's index
              className={`cursor-pointer relative border border-gray-200 shadow-md rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl ${index === currentIndex ? "bg-gradient-to-r from-green-400 to-green-300 text-white border-none" : "bg-white text-gray-800"
                }`}
              key={currentIndex}
            >
              {/* Header */}
              <div
                className={`text-center py-6 rounded-t-xl transition-colors duration-300 ${index === currentIndex ? "bg-green-500 text-white" : "bg-gray-100 text-heading"
                  }`}
              >
                <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
              </div>

              {/* Pricing Details */}
              <div className="px-6 py-6">
                <ul className="flex flex-col gap-4 mb-6">
                  {category.plans.map((plan, idx) => (
                    <li className="flex justify-between items-center p-4 border border-gray-200 rounded-md bg-white hover:bg-gray-50 text-heading" key={idx}>
                      <span>{plan.name}</span>
                      <span>
                        {plan.price}{" "}
                        {plan.costPerClass && (
                          <span className="text-sm text-gray-500">
                            {plan.costPerClass}
                          </span>
                        )}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Button */}
                <div className="absolute bottom-4 mt-4 left-0 right-0 px-6">
                  <button
                    className={`w-full py-3 rounded-2xl font-medium flex items-center justify-center transition-all duration-300 ${index === currentIndex
                        ? "bg-white text-heading"
                        : "border-green-600 border text-green-600 hover:bg-green-600 hover:text-heading"
                      }`}
                  >
                    {category.buttonText}
                    <BsChevronRight className="ml-2 text-lg" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default YogaPricingPlans;
