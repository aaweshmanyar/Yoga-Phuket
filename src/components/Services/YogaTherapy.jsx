import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Contact from "../Contact/Contact";
import MainLayout from "../../Layouts/MainLayout";
import img1 from "./Yoga Therapy/yogath1.jpg";
import img2 from "./Yoga Therapy/yogath2.jpg";
import img3 from "./Yoga Therapy/yogath3.jpg";
import img4 from "./Yoga Therapy/yogath4.jpg";
import img5 from "./Yoga Therapy/yogath5.jpg";
import img6 from "./Yoga Therapy/yogath6.jpg";

// Example Yoga Images - Replace with your actual image URLs or import them.
const yogaImages = [img1, img2, img3, img4, img5, img6];

const YogaTherapy = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1800,
    arrows: false,

    // Responsive breakpoints
    responsive: [
      {
        breakpoint: 1024, // Tablet view
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, // Mobile landscape view
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480, // Mobile portrait view (small mobile screens)
        settings: {
          slidesToShow: 1, // Show 1 slide at a time on small mobile screens
        },
      },
    ],
  };

  const Letimg = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1800,
    arrows: false,
  };

  const imageStyle = {
    width: "100%",
    height: "300px",
    objectFit: "cover",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  };

  return (
    <MainLayout>
      <section className="bg-white py-12 lg:py-24 mt-[100px]">
        {/* Header Section */}
        <div className="container mx-auto px-4 lg:px-0">
          <div className="flex flex-col lg:flex-row justify-between items-center lg:space-x-12 mb-12">
            {/* Title and Text */}
            <div className="lg:w-1/2">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
                Therapeutic Yoga
              </h1>
              <h2 className="text-2xl font-bold text-black mt-1 mb-1">
                Yoga therapy Sessions & Courses
              </h2>
              <p className="text-lg text-gray-600 ">
                Yoga therapy is a holistic approach to healing that integrates
                the wisdom of yoga with evidence-based therapeutic techniques.
                Our sessions combine gentle movement, breathwork, mindfulness
                practices, and relaxation techniques to help you reconnect with
                your body, reduce symptoms, and restore balance on all
                levels—physical, mental, emotional, and spiritual. Led by
                compassionate and skilled practitioners, our yoga therapy
                sessions are conducted in a safe and nurturing environment,
                where you are encouraged to explore your unique needs and
                challenges with compassion and curiosity. Whether you’re new to
                yoga or an experienced practitioner, our therapists provide
                personalized guidance and support to help you harness the
                healing power of yoga for your specific concerns.
              </p>
            </div>

            {/* Main Image */}
            {/* <div className="lg:w-1/2 flex justify-center mt-8 lg:mt-0">
            <img
            src="https://aadiyogacenter.com/wp-content/uploads/2024/04/1-4.png"
            alt="Yoga Classes"
            className="rounded-lg shadow-md w-full max-w-md"
            />
            </div> */}

            <div className="lg:w-1/2 flex justify-center mt-8 lg:mt-0">
              <Slider {...Letimg} className="w-full max-w-md">
                {yogaImages.map((image, index) => (
                  <div key={index}>
                    <img
                      src={image}
                      alt={`Yoga Image ${index + 1}`}
                      style={imageStyle}
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </div>

          {/* Image Carousel */}
          <div className="carousel-container">
            <Slider {...settings}>
              {yogaImages.map((image, index) => (
                <div key={index} className="px-2">
                  <img
                    src={image}
                    alt={`Yoga Image ${index + 1}`}
                    style={imageStyle}
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
        <Contact />
      </section>
    </MainLayout>
  );
};

export default YogaTherapy;
