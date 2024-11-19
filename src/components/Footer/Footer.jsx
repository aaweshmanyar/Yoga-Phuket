import React from "react";
import Logo from "./centerlogo.png";
import FooterImage from "./centerlogo.png"; // Import the new image
import { FaInstagram, FaFacebook, FaWhatsapp, FaLine } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      {/* Image and Google Map Section */}
      {/* <section className="container mx-auto mb-10 p-6">
        <div className="flex flex-col lg:flex-row lg:items-center gap-8 animate-fade-in">
         
          <div className="w-full lg:w-2/3 h-64 lg:h-96 rounded-md overflow-hidden shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.044792584196!2d98.29177127448935!3d7.890382905772807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30503b39c611919b%3A0xed5a4e0eae2312cc!2sAadi%20Yoga%20Center%20Patong%20Phuket!5e0!3m2!1sen!2sin!4v1729505699398!5m2!1sen!2sin"
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
         
          <div className="w-full lg:w-1/3 h-64 lg:h-auto flex-shrink-0">
            <img
              src={FooterImage}
              alt="Aadi Yoga Center"
              className="w-full h-full object-cover rounded-md shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl"
            />
          </div>
        </div>
      </section> */}

      {/* Footer Section */}
      <footer className="bg-[#5a95a2] py-10 text-white font-semibold  shadow-lg shadow-heading">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Footer Brand Section */}
            <div className="animate-fade-in-up">
              <div className="flex items-center mb-4">
                <img
                  src={Logo}
                  alt="Logo"
                  className="w-12 h-12 mr-3 shadow-md shadow-heading rounded-full"
                />
                <span className="text-2xl font-bold text-white">
                  Aadi Yoga Center Phuket
                </span>
              </div>
              <p className="text-sm text-gray-200">
                Discover tranquility at Aadi Yoga Center in Thailand. From yoga
                classes to therapy and sound healing, find your path to wellness
                with us.
              </p>
            </div>

            {/* Services and Policies Section */}
            <div className="animate-fade-in-up delay-200">
              <h3 className="text-lg font-semibold mb-3 text-white">
                Services
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/yogaclass"
                    className="text-white text-gray-200 transition-colors duration-200"
                  >
                    Yoga Classes (Private & Group)
                  </a>
                </li>
                <li>
                  <a
                    href="/yogatherapy"
                    className="text-white  text-gray-200 transition-colors duration-200"
                  >
                    Yoga Therapy
                  </a>
                </li>
                <li>
                  <a
                    href="/kidsyoga"
                    className="text-white text-gray-200 transition-colors duration-200"
                  >
                    Kids Yoga
                  </a>
                </li>
                <li>
                  <a
                    href="/yogateacher"
                    className="text-white text-gray-200 transition-colors duration-200"
                  >
                    Yoga Teacher
                  </a>
                </li>
                <li>
                  <a
                    href="/trainingcourse"
                    className="text-white text-gray-200 transition-colors duration-200"
                  >
                    Training Courses
                  </a>
                </li>
                <li>
                  <a
                    href="/soundhealing"
                    className="text-white text-gray-200 transition-colors duration-200"
                  >
                    Sound Healing
                  </a>
                </li>
              </ul>
              {/* <div className="mt-6">
          <h3 className="text-lg font-semibold mb-3 text-white">
            Policies
          </h3>
          <ul className="space-y-2">
            <li>
              <a
                href="/termsconditions"
                className="hover:text-teal-200 text-gray-200 transition-colors duration-200"
              >
                Terms & Conditions
              </a>
            </li>
            <li>
              <a
                href="/privacypolicy"
                className="hover:text-teal-200 text-gray-200 transition-colors duration-200"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="/refundpolicy"
                className="hover:text-teal-200 text-gray-200 transition-colors duration-200"
              >
                Refund Policy
              </a>
            </li>
          </ul>
        </div> */}
            </div>

            {/* Location & Contact Section */}
            <div className="animate-fade-in-up delay-400">
              <h3 className="text-lg font-semibold mb-3 text-white">
                ⏰ Opening Hours
              </h3>
              <p className="text-sm text-gray-200 mb-3">
                Mon-Sun: 05:30 AM to 09:00 PM
              </p>

              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-3 text-white">
                  Policies
                </h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="/termsconditions"
                      className="text-white text-gray-200 transition-colors duration-200"
                    >
                      Terms & Conditions
                    </a>
                  </li>
                  <li>
                    <a
                      href="/privacypolicy"
                      className="text-white text-gray-200 transition-colors duration-200"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="/refundpolicy"
                      className="text-white text-gray-200 transition-colors duration-200"
                    >
                      Refund Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Social & Credits Section */}
            <div className="animate-fade-in-up delay-600 flex flex-col items-start">
              <h3 className="text-lg font-semibold mb-3 text-white">
                Get in Touch
              </h3>

              <a href="https://maps.app.goo.gl/QDW2DyYZoYKnfqpV8" className="text-sm text-gray-200 mb-3 text-white hover:opacity-65">
                80, Doctor wattana, 16 Soi Dr. Watthana, Pa Tong, Phuket, 83150,
                Thailand
              </a>
              <p className="text-sm text-gray-200 mb-3">
                Phone: +66 80 251 1273
              </p>
              <p className="text-sm text-gray-200">
                Email: info@aadiyogacenterphuket.com
              </p>

              <div className="flex space-x-4 mt-6">
                <a
                  href="https://www.instagram.com/aadiyogacenter.bangkok/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-teal-300 transition-colors duration-200"
                >
                  <FaInstagram className="text-teal-300 w-6 h-6" />
                </a>
                <a
                  href="https://line.me/ti/p/Xu79UdtdLg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-teal-300 transition-colors duration-200"
                >
                  <FaLine className="text-teal-300 w-6 h-6" />
                </a>
                <a
                  href="https://wa.me/66802511273?text=Hi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-teal-300 transition-colors duration-200"
                >
                  <FaWhatsapp className="text-teal-300 w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Footer Bottom Section */}
          <div className="mt-10 border-t border-teal-700 pt-5 flex flex-col md:flex-row items-center justify-between">
            <p className="text-sm text-gray-200">
              &copy; 2024 aadiyogacenter.com. All Rights Reserved. | Designed &
              Developed by{" "}
              <a
                href="https://www.linkedin.com/in/aawesh-manyar/"
                className="hover:text-teal-200 font-bold"
              >
                Aawesh Manyar
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
