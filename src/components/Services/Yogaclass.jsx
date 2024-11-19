import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Contact from '../Contact/Contact';
import img1 from './Yogaclass/yogacls1.png';
import img2 from './Yogaclass/yogacls2.png';
import img3 from './Yogaclass/yogacls3.png';
import img4 from './Yogaclass/yogacls4.jpg';
import img5 from './Yogaclass/yogacls5.png';
import img6 from './Yogaclass/yogacls6.png';
import img7 from './Yogaclass/yogacls7.jpg';

const yogaImages = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
];

const YogaClasses = () => {
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
    <section className="bg-white py-12 lg:py-24 mt-[100px]">
      <div className="container mx-auto px-4 lg:px-0">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:space-x-12 mb-12">
          <div className="lg:w-1/2">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              Yoga Classes
            </h1>
            <h2 className="text-2xl font-bold text-black mt-1 mb-1">
              Private & Group Yoga Sessions
            </h2>
            <p className="text-lg text-gray-600">
              Experience the beauty of yoga tailored just for you in our private
              sessions, or join our vibrant community in our energizing group
              classes. Whether you prefer personalized attention or the
              camaraderie of practicing together, our expert instructors guide
              you through every pose, breath, and meditation, fostering growth,
              strength, and inner peace. Discover the perfect session for you
              and join us on the mat at Aadi Yoga Center.
            </p>
          </div>

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

        {/* Image Carousel with Responsive Behavior */}
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
  );
};

export default YogaClasses;
