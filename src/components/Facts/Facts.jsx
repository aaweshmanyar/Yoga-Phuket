import React from "react";
import CountUp from "react-countup";
import { facts } from "./Fact"; // Import the data from facts.js
import { FaUserTie, FaSmile, FaDumbbell, FaCalendarAlt } from "react-icons/fa"; // Importing some icons for added flair

const Facts = () => {
  // Icons array matching the facts data order
  const icons = [<FaUserTie />, <FaSmile />, <FaDumbbell />, <FaCalendarAlt />];

  return (
    <section className="section-sm lg:section-lg bg-gradient-to-r from-blue-500 via-teal-500 to-green-500 text-white py-12">
      <div className="container mx-auto flex flex-col lg:flex-row lg:gap-x-10 items-center">
        {/* Left section: Facts */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
          {facts.map((item, index) => {
            const { startNumber, endNumber, unit, title, desc } = item;
            return (
              <div
                className="bg-white/20 text-heading backdrop-blur-sm p-8 rounded-xl text-center shadow-xl transform hover:scale-105 transition duration-300 ease-in-out"
                key={index}
                data-aos="fade-up"
                data-aos-delay={`${index * 100}`}
              >
                <div className="text-4xl mb-4 text-heading">
                  {icons[index]} {/* Display corresponding icon */}
                </div>
                <h2 className="text-5xl font-extrabold mb-4 text-heading">
                  <CountUp
                    start={startNumber}
                    end={endNumber}
                    enableScrollSpy
                    className="text-heading"
                  />
                  {unit}+
                </h2>
                <h3 className="text-2xl font-semibold mb-2 text-heading">{title}</h3>
                <p className="text-sm font-light text-gray-200">{desc}</p>
              </div>
            );
          })}
        </div>

        {/* Right section: Heading */}
        <div className="flex-1 lg:pl-20 text-center lg:text-left mt-10 lg:mt-0">
          <h2
            className="text-4xl lg:text-5xl font-bold leading-tight mb-8"
            data-aos="fade-down"
            data-aos-delay="300"
          >
            Relax and Enjoy a Personalized Yoga Day With Us
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Facts;
