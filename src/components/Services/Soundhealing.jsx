import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Contact from "../Contact/Contact";
import MainLayout from "../../Layouts/MainLayout";
import img1 from "./Sound Healing/soundhealing1.jpg";
import img2 from "./Sound Healing/soundhealing6.jpg";
import img3 from "./Sound Healing/soundhealing3.jpg";
import img4 from "./Sound Healing/soundhealing4.jpg";
import img5 from "./Sound Healing/soundhealing5.jpg";
// import img6 from "../../assets/img/Sound Healing/soundhealing6.jpg";

// Example Yoga Images - Replace with your actual image URLs or import them.
const yogaImages = [img1, img2, img3, img4, img5];

const Soundhealing = () => {
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
                Sound Healing
              </h1>
              <h2 className="text-xl font-bold text-black mt-1 mb-1">
                Harmonize your mind, body, and spirit with our transformative
                sound healing yoga sessions.
              </h2>
              <p className="text-lg text-gray-600 mt-2">
                Our sound healing sessions harness the therapeutic vibrations of
                sound to promote relaxation, reduce stress, and facilitate
                profound states of healing and rejuvenation. Led by skilled
                practitioners trained in the art of sound therapy, our sessions
                incorporate a variety of instruments, including crystal singing
                bowls, Tibetan singing bowls, gongs, drums, and more. Each
                instrument emits frequencies that resonate with the body’s
                energy centers, or chakras, promoting energetic alignment and
                clearing blockages that may impede the flow of vital life force
                energy. Sound healing has been used for centuries as a powerful
                tool for healing, transformation, and spiritual awakening.
                Whether you’re seeking relief from physical ailments, emotional
                stress, or simply a moment of respite from the demands of daily
                life, our sound healing sessions offer a sacred space for
                self-discovery and renewal.
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

export default Soundhealing;
