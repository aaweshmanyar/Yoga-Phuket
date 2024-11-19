import React from "react";
import { motion } from "framer-motion";
import MainLayout from "../../Layouts/MainLayout";
import Contact from "../Contact/Contact";
import Review from "../Reveiw/Reveiw";
import aboutimg from './Aboutimg/about.png';

const About = () => {
  return (
    <MainLayout>
      <div className="bg-gradient-to-b from-green-200 to-white min-h-screen flex items-center justify-center py-10 px-5 md:px-20">
        <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center gap-10">
          {/* Text Section */}
          <motion.div
            className="text-center md:text-left md:w-1/2"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-sm tracking-wider text-green-700 uppercase mb-2">
              Aadi Yoga Center
            </h2>
            <h1 className="text-4xl font-bold text-gray-800 mb-4">   
              Who we are and what we do...
            </h1>
            <p className="text-gray-600 leading-relaxed mb-4">
              At Aadi Yoga Center, we are dedicated to fostering holistic
              wellness and inner harmony. Through our diverse range of
              offerings, including yoga classes, meditation sessions,
              therapeutic practices, and wellness workshops, we empower
              individuals to cultivate a deeper connection with themselves and
              the world around them.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our experienced instructors guide students of all levels on a
              journey of self-discovery, encouraging personal growth, physical
              vitality, and mental clarity. Join us as we embrace the
              transformative power of yoga and mindfulness, creating a space for
              healing, growth, and joy.
            </p>
          </motion.div>

          {/* Image Section */}
          <motion.div
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <img
              src={aboutimg}
              alt="Yoga Instructor"
              className="rounded-lg shadow-lg max-w-full"
            />
          </motion.div>
        </div>
      </div>
      <Review/>
      <Contact />
    </MainLayout>
  );
};

export default About;
