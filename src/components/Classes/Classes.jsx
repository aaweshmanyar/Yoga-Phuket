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

const Schedule = () => {
  const scheduleData = [
    // { time: "06:30 AM (60 mins)", monday: "Bending & Twisting", tuesday: "Hip & Shoulder Opening", wednesday: "Front & Middle Split", thursday: "Backbending & Shoulder", friday: "Hatha & Core" },
    { time: "07:45 AM (60 mins)", monday: "Full Body Opening", tuesday: "Meditation & body Movement", wednesday: "Thoracic Opening & Breathwork ", thursday: "Backbending  & Shoulder", friday: "Hatha & Core" },
    { time: "09:00 AM (60 mins)", monday: "Meditation & body Movement", tuesday: "Backbending & Shoulder", wednesday: "Hatha & Core", thursday: " Bending & Twisting", friday: "Arm balance & Core" },
    { time: "11:00 AM (60 mins)", monday: "Available for Private Class", tuesday: "Available for private class", wednesday: "Available for Private Class", thursday: "Available for Private Class", friday: "Available for Private Class" },
    { time: "05:00 PM (60 mins)", monday: "Available for Private Class", tuesday: "Kids Yoga", wednesday: "Available for Private Class", thursday: "Kids Yoga", friday: "Available for Private Class" },
    { time: "06:15 PM (60 mins)", monday: "Hatha & Core", tuesday: "Traditional Hatha & Core", wednesday: "Twisting & Forward", thursday: "Hatha & Core", friday: "Front & Middle Split" },
    { time: "07:30 PM (60 mins)", monday: "Gentle Stretching", tuesday: "Full Body Opening", wednesday: "Backbending & Shoulder", thursday: "Twisting & Forwardbend", friday: "Hip & Shoulder" }
  ];

  const weekendScheduleData = [
    { time: "07:45 AM (70 mins)", saturday: "Backbending & Shoulder Opening", sunday: "Ashtanga Full Series" },
    { time: "09:00 AM (75 mins)", saturday: "Full Body Opening", sunday: "Gentle Stretching" },
    { time: "05:30 PM (60 mins)", saturday: "Gentle Stretching", sunday: "Full Body Opening" },
    { time: "07:00 PM (60 mins)", saturday: "Breathwork & body Movement", sunday: "Traditional Hatha" }
  ];

  const navigate = useNavigate();

  const handledailycls = () => {
    navigate('/normalclass');
  };

  const handleprivatecls = () => {
    navigate('/normalclass');
  };

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
      {/* Hero Section */}
      <div className="relative group h-[400px] md:h-[500px] lg:h-[600px] bg-cover bg-center bg-no-repeat transition-all duration-500 ease-in-out hover:opacity-50 bg-green"
        style={{ backgroundImage: `url(${image})` }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300 group-hover:bg-opacity-30"></div>
        <div className="relative h-full flex flex-col items-center justify-center text-center text-black transition-all duration-300">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 animate-fade-in opacity-0 group-hover:opacity-100 transition-opacity duration-300">Welcome to Our Yoga Classes</h1>
          <p className="text-lg md:text-xl lg:text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">Join us to balance your body and mind</p>
        </div>
      </div>

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

      {/* Daily Classes Schedule */}
      <h2 className="text-3xl font-semibold text-center my-8">Daily Classes Schedule</h2>
      <div className="overflow-x-auto shadow-lg rounded-lg border border-gray-300">
        <table className="min-w-full border-collapse">
          <thead className="bg-gray-200">
            <tr>
              <th className="border border-gray-300 px-4 py-3">Time</th>
              <th className="border border-gray-300 px-4 py-3">Monday</th>
              <th className="border border-gray-300 px-4 py-3">Tuesday</th>
              <th className="border border-gray-300 px-4 py-3">Wednesday</th>
              <th className="border border-gray-300 px-4 py-3">Thursday</th>
              <th className="border border-gray-300 px-4 py-3">Friday</th>
            </tr>
          </thead>
          <tbody>
            {scheduleData.map((item, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="border border-gray-300 px-4 py-3">{item.time}</td>
                <td className={`border border-gray-300 px-4 py-3 ${item.monday ? "bg-green-100" : "bg-red-100"}`}>{item.monday || "Not Available"}</td>
                <td className={`border border-gray-300 px-4 py-3 ${item.tuesday ? "bg-green-100" : "bg-red-100"}`}>{item.tuesday || "Not Available"}</td>
                <td className={`border border-gray-300 px-4 py-3 ${item.wednesday ? "bg-green-100" : "bg-red-100"}`}>{item.wednesday || "Not Available"}</td>
                <td className={`border border-gray-300 px-4 py-3 ${item.thursday ? "bg-green-100" : "bg-red-100"}`}>{item.thursday || "Not Available"}</td>
                <td className={`border border-gray-300 px-4 py-3 ${item.friday ? "bg-green-100" : "bg-red-100"}`}>{item.friday || "Not Available"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Weekend Classes */}
      <h2 className="text-3xl font-semibold text-center my-8">Weekend Classes Schedule</h2>
      <div className="overflow-x-auto shadow-lg rounded-lg border border-gray-300">
        <table className="min-w-full border-collapse">
          <thead className="bg-gray-200">
            <tr>
              <th className="border border-gray-300 px-4 py-3">Time</th>
              <th className="border border-gray-300 px-4 py-3">Saturday</th>
              <th className="border border-gray-300 px-4 py-3">Sunday</th>
            </tr>
          </thead>
          <tbody>
            {weekendScheduleData.map((item, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="border border-gray-300 px-4 py-3">{item.time}</td>
                <td className={`border border-gray-300 px-4 py-3 ${item.saturday ? "bg-green-100" : "bg-red-100"}`}>{item.saturday || "Not Available"}</td>
                <td className={`border border-gray-300 px-4 py-3 ${item.sunday ? "bg-green-100" : "bg-red-100"}`}>{item.sunday || "Not Available"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Join Button */}
      <div className="flex justify-center mt-8">
        <button onClick={handledailycls} className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-6 rounded-lg mx-4">
          Join Daily Classes
        </button>
        <button onClick={handleprivatecls} className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-6 rounded-lg mx-4">
          Private Classes
        </button>
      </div>
    </div>
  );
};

export default Schedule;
