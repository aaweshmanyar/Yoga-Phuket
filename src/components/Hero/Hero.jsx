import React from "react";
import { heroData } from "./Herodata"; // Adjust path if necessary
import { useNavigate } from "react-router-dom";
import HeroImage from "./heroimg/hero.jpeg";
import { Helmet } from "react-helmet-async";

const HeroSection = () => {
  const navigate = useNavigate();

  const navigatetab = () => {
    navigate("/classbooking/normal-class");
  };

  return (
    <section
      className="min-h-[70vh] lg:min-h-[100vh] pt-9 bg-cover bg-center relative"
      style={{
        backgroundImage: `url(${heroData.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* SEO Metadata */}
      <Helmet>
        <title>Best Yoga Classes in Phuket - Aadi Yoga Center phuket</title>
        <meta
          name="description"
          content="Join Aadi Yoga Center in Patong, Phuket, for transformative yoga classes. Discover mindfulness, relaxation, and wellness in a serene environment. Book your session today!"
        />
        <meta
          name="keywords"
          content="Yoga in Phuket, Best Yoga Center in Phuket, Yoga Classes in Patong, Yoga Near Me, Wellness in Phuket, Hot Yoga in Phuket, Aadi Yoga Center, Yoga Retreats in Thailand"
        />
        <meta
          property="og:title"
          content="Transform Your Life with Yoga in Phuket"
        />
        <meta
          property="og:description"
          content="Experience yoga like never before at Aadi Yoga Center, Phuket. Cultivate mindfulness, relieve stress, and embrace wellness in a tranquil setting."
        />
        <meta property="og:image" content={HeroImage} />
      </Helmet>

      {/* Overlay for contrast */}
      <div className="absolute inset-0 bg-black/50 z-0"></div>

      <div className="relative container mx-auto text-white font-bold px-4 z-10">
        <div className="flex flex-col items-center lg:flex-row lg:items-start pt-16 space-y-6 lg:space-y-0 lg:space-x-8">
          {/* Text Section */}
          <div
            className="flex-1 lg:mt-8 text-center lg:text-left relative w-45"
            data-aos="fade-up"
            data-aos-delay="300"
            style={{
              zIndex: 10,
            }}
          >
            {/* Background for text with improved responsiveness */}
            <div className="relative mt-[170px] bg-white/70 text-gray-800 p-6 rounded-md w-full max-w-md lg:max-w-xl">
              <h1
                className="text-3xl text-left sm:text-4xl font-bold leading-tight mb-4"
                style={{
                  fontSize: "1.7rem",
                  "@media (min-width: 1024px)": { fontSize: "1.5rem" },
                }}
              >
                <span className="block">{heroData.title1}</span>
                <span className="block">{heroData.title2}</span>
              </h1>
              <p className="mb-6 text-left text-heading lg:mb-5 text-base lg:text-lg leading-relaxed lg:leading-relaxed">
                {heroData.description}
              </p>

              {/* Responsive Button Group */}
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-5">
                <button
                  onClick={navigatetab}
                  className="py-2 px-4 sm:px-5 text-sm sm:text-base lg:text-lg bg-green-300 hover:bg-green-200 text-white rounded-md transition-all duration-300 ease-in-out shadow-lg"
                >
                  {heroData.btn1}
                </button>
                <button
                  onClick={() => navigate("/registration")}
                  className="py-2 px-4 sm:px-5 text-sm sm:text-base lg:text-lg bg-green-300 hover:bg-green-200 text-white rounded-md transition-all duration-300 ease-in-out shadow-lg"
                >
                  {heroData.btn2}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
