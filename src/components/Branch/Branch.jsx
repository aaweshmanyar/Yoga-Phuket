import React from "react";
import MainLayout from "../../Layouts/MainLayout";
import Contact from "../Contact/Contact";
import image from './branch.png';

const Branch = () => {
  return (
    <MainLayout>
      <section className="bg-pink-500 py-12 text-white mt-0 bg-gradient-to-b from-green-200 to-white">
        {/* Banner Section */}
        <div className="relative h-[300px] md:h-[400px] lg:h-[500px] w-full mb-12">
          <img
            src={image}
            alt="Aadi Yoga Center"
            className="w-full h-full object-cover"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold uppercase text-[#000000b6]">Coming Soon</h1>
          </div>
        </div>

        {/* Branch Information */}
        <div className="container mx-auto px-4 ">
          <div className="flex flex-col lg:flex-row justify-between items-start space-y-8 lg:space-y-0">
            {/* Branch Details */}
            <div className="lg:w-1/2 ">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-heading">AADI YOGA CENTER</h1>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 text-heading">PHUKET BRANCH</h2>
              <p className="text-base md:text-lg lg:text-xl mb-6 leading-relaxed text-heading">
                Our newest branch is opening soon in the heart of Phuket,
                offering state-of-the-art facilities and serene spaces for yoga
                enthusiasts.
              </p>
              <p className="text-base md:text-lg mb-2 font-medium text-heading">Contact: +66 963140218</p>
              <p className="text-lg md:text-xl font-bold text-yellow-300 text-heading">Launching Soon...</p>
            </div>

            {/* Address and Timings */}
            <div className="lg:w-1/3 text-right lg:text-left bg-[#000] text-white p-6 rounded-lg shadow-lg">
              <p className="mb-4 text-lg md:text-xl font-bold ">123 Main Street, Patong, Phuket 83150</p>
              <div className="mt-4">
                <p className="font-bold text-lg md:text-xl">Monday - Friday</p>
                <p className="text-base md:text-lg">07:00 - 21:00</p>
              </div>
              <div className="mt-4">
                <p className="font-bold text-lg md:text-xl">Saturday - Sunday</p>
                <p className="text-base md:text-lg">07:00 - 16:00</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Contact/>
    </MainLayout>
  );
};

export default Branch;
