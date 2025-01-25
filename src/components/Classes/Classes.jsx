import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useNavigate } from 'react-router-dom';
import image from './classesimg/serv-img2.png';
import yogacls1 from './classesimg/yogacls1.jpg';
import yogacls2 from './classesimg/yogacls2.jpg';
import yogacls3 from './classesimg/yogacls3.jpg';
import yogacls4 from './classesimg/yogacls4.jpg';
import yogacls5 from './classesimg/yogacls7.jpg';
import yogacls6 from './classesimg/yogacls8.jpg';
import Classes from '../Services/classbooking/ClassBooking'

const Schedule = () => {
  

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1800,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,  // For large screens
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,  // For tablets
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,  // For mobile devices
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">

      <Classes/>


      

      {/* About Section */}
      <section className="about-section py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 text-teal-900">Yoga Classes</h2>
          <p className="text-lg text-gray-700 mb-8">
            Discover your yoga journey at Aadi Yoga Center. Choose from private sessions for personalized guidance or join our vibrant group classes. Our expert instructors will help you find your inner peace through yoga.
          </p>

          {/* Image Carousel */}
          <div className="carousel-container">
            <Slider {...settings}>
              <div className="px-2">
                <img src={yogacls1} alt="Yoga Image 1" className="w-full rounded-lg h-[300px] object-cover" />
              </div>
              <div className="px-2">
                <img src={yogacls2} alt="Yoga Image 2" className="w-full rounded-lg h-[300px] object-cover" />
              </div>
              <div className="px-2">
                <img src={yogacls3} alt="Yoga Image 3" className="w-full rounded-lg h-[300px] object-cover" />
              </div>
              <div className="px-2">
                <img src={yogacls4} alt="Yoga Image 4" className="w-full rounded-lg h-[300px] object-cover" />
              </div>
              <div className="px-2">
                <img src={yogacls5} alt="Yoga Image 5" className="w-full rounded-lg h-[300px] object-cover" />
              </div>
              <div className="px-2">
                <img src={yogacls6} alt="Yoga Image 6" className="w-full rounded-lg h-[300px] object-cover" />
              </div>
            </Slider>
          </div>
        </div>
      </section>

      

      

      
      
    </div>
  );
};

export default Schedule;