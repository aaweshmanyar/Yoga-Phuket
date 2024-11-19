import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Contact from "../Contact/Contact";
import MainLayout from "../../Layouts/MainLayout";
import img1 from './Pilates/pilates.jpg';
import img2 from './Pilates/pilates2.jpg';
import img3 from './Pilates/pilates3.jpg';
import img4 from './Pilates/pilates4.jpg';
import img5 from './Pilates/pilates5.jpg';
import img6 from './Pilates/pilates6.jpg';
import img7 from './Pilates/pilates7.jpg';

// Example Yoga Images - Replace with your actual image URLs or import them.
const yogaImages = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
];

const Pilates = () => {  
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
                Pilates
              </h1>
              <h2 className="text-2xl font-bold text-black mt-1 mb-1">
                Discover strength, grace, and balance with Pilates.
              </h2>
              <p className="text-lg text-gray-600">
                At Aadi Yoga Center, we offer a dynamic approach to Pilates that
                focuses on building core strength, improving flexibility, and
                enhancing overall body awareness. Our classes blend classical
                Pilates principles with contemporary techniques to provide a
                challenging yet accessible workout for practitioners of all
                levels. Led by experienced instructors who are passionate about
                Pilates, our classes emphasize proper alignment, breath control,
                and fluid movement to help you achieve a balanced and harmonious
                body. Whether you’re a beginner or a seasoned practitioner, we
                provide individualized attention and modifications to ensure a
                safe and effective workout experience.
              </p>
            </div>

            {/* Image Carousel */}
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

          {/* Image Carousel - Below Section */}
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

export default Pilates;
