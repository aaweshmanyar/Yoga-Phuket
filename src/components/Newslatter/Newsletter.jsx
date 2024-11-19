import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa"; // Import the WhatsApp icon


const BookingSection = () => {
  const [showMessage, setShowMessage] = useState(false);

  const handleClick = () => {
    // Your WhatsApp API link here (replace with your actual WhatsApp number)
    window.open("https://wa.me/66802511273?text=Hi, I would like to know more about...", "_blank");
  };


  return (
    <section className="bg-gradient-to-br from-green-200 via-green-300 to-green-400 text-white py-12 px-6 md:py-16 md:px-10 lg:py-24 rounded-lg shadow-lg overflow-hidden relative">
      <div className="container mx-auto text-center">
        {/* Heading Section */}
        <h5 className="text-sm uppercase font-semibold tracking-wider text-white opacity-90 mb-2 md:mb-4">
          Reserve Your Spot Now
        </h5>
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold mb-4 md:mb-6 leading-tight">
          Want to make a booking or <br /> have a question?
        </h2>

        {/* Contact Information */}
        <p className="text-gray-100 text-base md:text-lg mb-6 md:mb-8">
          Call us on
          <a href="tel:+66963140218" className="text-yellow-300 font-bold ml-1 hover:text-heading">
            {" "}
            +66 80 251 1273{" "}
          </a>
          or simply book an appointment...
        </p>

        {/* CTA Button */}
        <button
          className=" inline-block bg-yellow-400 hover:bg-green-200 text-white hover:text-heading px-8 py-3 rounded-full font-semibold shadow-md transform hover:scale-105 transition duration-300"
          onClick={handleClick}
        >
          
          Talk to our Instructor 📲🗣️
        </button>

       
      </div>
    </section>
  );
};

export default BookingSection;
