import React from "react";
import aboutimg from "./aboutus.jpg";
import painteffect from "./Aboutimg/effectimgnew.png"; // Check the path
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Aboutcenter = () => {
  const navigate = useNavigate();

  return (
    <div
      data-aos="fade-up"
      className=" text-heading  relative min-h-screen flex items-center justify-center py-10 px-5 md:px-20 bg-gradient-to-br  via-white to-green-300 bg-no-repeat bg-cover bg-center z-0"
    >

      {/* SEO Metadata */}
      <Helmet>
        <meta
          name="description"
          content="Learn about Aadi Yoga Center, our mission to promote holistic wellness and inner harmony through yoga and wellness workshops in Phuket."
        />
        <meta
          name="keywords"
          content="Aadi Yoga Center, Phuket, Wellness, Yoga Classes, Meditation, Holistic Health, yoga center in phuket, yoga center near me, aadiyogacenter phuket"
        />
        <meta property="og:title" content="About Aadi Yoga Center" />
        <meta property="og:description" content="Explore Aadi Yoga Center's journey to promote wellness in Phuket through various holistic practices." />
        <meta property="og:image" content={aboutimg} />
      </Helmet>


      <div className="relative container mx-auto max-w-6xl flex flex-col md:flex-row items-center gap-10 z-10">
        {/* Text Section */}
        <motion.div
          className="text-center md:text-left md:w-1/2 z-20"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-xs tracking-widest text-left text-green-600 uppercase mb-3">
            Aadi Yoga Center
          </h2>
          <h1 className="text-3xl text-left sm:text-4xl font-extrabold text-gray-800 leading-snug mb-6">
            Who We Are & What We Do
          </h1>
          <p
            className="text-md sm:text-lg leading-relaxed mb-6 text-heading text-left"
          >
            At Aadi Yoga Center Phuket, we are committed to promoting holistic
            wellness and inner harmony. Through a wide array of
            offerings—including yoga classes, meditation sessions, therapeutic
            practices, and wellness workshops—we empower individuals to connect
            deeply with themselves and the vibrant surroundings of Phuket,
            Thailand.
          </p>
          <p
            className="text-md sm:text-lg text-gray-700 leading-relaxed mb-6 text-heading text-left"
          >
            Our experienced instructors warmly welcome students of all levels,
            guiding them on a journey of self-discovery, personal growth,
            physical vitality, and mental clarity. Join us at Aadi Yoga Center
            Phuket as we harness the transformative power of yoga and
            mindfulness to create a sanctuary of healing, growth, and joy right
            here in paradise
          </p>
          <div className="text-left">
            <motion.button
              onClick={() => navigate("/about")}
              className="px-6 py-3 bg-gradient-to-r from-green-200 to-green-300 text-white font-bold rounded-md shadow-lg hover:bg-gradient-to-r hover:from-pink-400 hover:to-pink-500 transition-all duration-300 transform hover:scale-105"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="md:w-1/2 w-full flex justify-center z-20"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          whileHover={{ scale: 1.05 }}
        >
          <img
            src={aboutimg}
            alt="Yoga Instructor"
            className="rounded-lg shadow-2xl max-w-full"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Aboutcenter;
