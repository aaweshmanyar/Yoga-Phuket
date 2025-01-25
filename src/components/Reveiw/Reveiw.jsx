import React from "react";
import flower from './flower.png';

const Review = () => {
  return (
    <div 
      className="py-10 px-4 relative text-white  bg-no-repeat bg-cover bg-center z-0 rounded-md"
      // style={{ 
      //   backgroundColor: 'rgb(37 134 117)', 
      //   backdropFilter: 'brightness(0.7)' // Optional: Adds a slight overlay for readability 
      // }}

      // bg-gradient-to-r from-green-200 to-green-300
    >
      {/* Flower Image Positioned in Top-Left */}
      <img 
        src={flower} 
        alt="flower decoration" 
        className="absolute top-0 left-0 w-24 h-24 md:w-48 md:h-48 opacity-90" 
        style={{ objectFit: 'contain', transform: 'translate(-15%, -15%)' }}
      />

      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Heading Section */}
        <h2 className="text-3xl font-extrabold mb-6">
          Testimonial
        </h2>
        <p className="text-lg mb-10 text-heading">
          Discover what people are saying about Aadi Yoga Center, their
          experiences, and how we helped them on their journey to wellness.
        </p>

        {/* Google Review Widget */}
        <div
          className="w-full rounded-xl shadow-lg border border-white bg-opacity-70"
          class="elfsight-app-4040321e-ae60-4bc4-8196-54c6371759a0" data-elfsight-app-lazy></div>

        {/* Testimonial Footer */}
        <div className="mt-6 text-sm">
          <p className="text-heading">We value every customer’s feedback and strive to provide the best experience possible!</p>
        </div>
      </div>
    </div>
  );
};

export default Review;
