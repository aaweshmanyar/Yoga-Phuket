import React from "react";
import { useNavigate } from "react-router-dom";
import image1 from "./classesimg/yogaclass.jpg";
import image2 from "./classesimg/soundhealing1.jpg";
import image3 from "./classesimg/kidsyoga1.jpg";
import image4 from "./classesimg/image-13.jpg";

const OurClasses = () => {
  const navigate = useNavigate();
  const classes = [
    {
      id: 1,
      title: "Yoga Classes",
      description:
        "Find Balance and Inner Peace: Join Our Yoga Classes Today!.",
      image: image1,
    },
    {
      id: 2,
      title: "Sound Healing",
      description:
        "Harmonize Your Being: Experience the Serenity of Sound Healing.",
      image: image2,
    },
    {
      id: 3,
      title: "Kids Yoga" ,
      description:
        "Mindful Moves for Little Ones: Discover the Joy of Kids Yoga!. ",
      image: image3,
    },
    {
      id: 4,
      title: "Learn More",
      description: "",
      image: image4,
    },
  ];

  return (
    <>
      {/* SVG Wave Effect */}
      <svg
        className="w-full"
        height="100"
        viewBox="10 110 1420 100"
        preserveAspectRatio="none"
      >
        <path
          fill=" rgb(37 134 117)" // Tailwind's green-300 color
          d="M0,64L30,85.3C60,107,120,149,180,160C240,171,300,149,360,133.3C420,117,480,107,540,128C600,149,660,192,720,202.7C780,213,840,171,900,160C960,149,1020,171,1080,186.7C1140,203,1200,213,1260,186.7C1320,160,1380,107,1410,85.3L1440,64L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320H0Z"
        ></path>
      </svg>

      <section className="py-16 " >
      {/* data-aos="fade-up" data-aos-duration="3000" */}
        {/* Title and description */}
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-4">
            Our Classes
          </h2>
          <p className="text-gray-600 text-base md:text-lg mb-8 max-w-2xl mx-auto">
            Join our diverse classes whether you are a beginner or an experienced
            practitioner with various types of practice from Hatha Yoga, Vinyasa,
            Ashtanga, Applied yoga, and functional training exercises.
          </p>
          <div className="flex justify-center md:justify-end">
            <button
              onClick={() => navigate("/classbooking/normal-class")}
              className="px-4 py-2 md:px-6 md:py-3 bg-green-300 text-white font-bold rounded-lg hover:bg-pink-300 transition"
            >
              BOOK NOW
            </button>
          </div>
        </div>

        {/* Class Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mt-12 px-4">
          {classes.map((yogaClass) => (
            <div
              key={yogaClass.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <div className="relative">
                <img
                  src={yogaClass.image}
                  alt={yogaClass.title}
                  onClick={() => navigate("/services")}
                  className={`w-full object-cover ${
                    yogaClass.title === "Learn More"
                      ? "h-[350px] cursor-pointer sm:h-[420px] opacity-70"
                      : "h-48 sm:h-64"
                  }`}
                />
                {yogaClass.title === "Learn More" && (
                  <div className="absolute inset-0 bg-green-300 bg-opacity-50 flex items-center justify-center">
                    <span
                      className="text-xl md:text-2xl font-bold text-heading mb-[480px] cursor-pointer"
                      onClick={() => navigate("/services")}
                    >
                      LEARN MORE
                    </span>
                  </div>
                )}
              </div>
              {yogaClass.title !== "Learn More" && (
                <div className="p-4">
                  <h3 className="text-lg md:text-xl font-bold text-blue-700">
                    {yogaClass.title}
                  </h3>
                  <p className="text-gray-600 mt-2 text-sm md:text-base">
                    {yogaClass.description}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default OurClasses;
