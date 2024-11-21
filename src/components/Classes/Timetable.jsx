// YogaSchedule.js
import React, { useState, useEffect } from "react";
import { Toast, ToastContainer } from "react-bootstrap";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Logo from "./classesimg/demologo.png";
import "./Timetable.css";
import MainLayout from "../../Layouts/MainLayout";
import emailjs from "emailjs-com";
import Contact from "../Contact/Contact.jsx";

const YogaSchedule = () => {
  const [showToast, setShowToast] = useState(true);
  useEffect(() => {
    setTimeout(() => setShowToast(false), 10000);
  }, []);
  const weekdaysSchedule = [
    [
      "07:45 AM (60 Min)",
      "Full Body Opening",
      "Meditation & body Movement",
      "Thoracic Opening & Breathwork",
      "Backbending  & Shoulder",
      "Hatha & Core",
    ],
    [
      "09:00 AM (60 mins)",
      "Meditation & body Movement",
      "Backbending & Shoulder",
      "Hatha & Core",
      "Bending & Twisting",
      "Arm balance & Core",
    ],
    // [
    //   "9:30 AM",
    //   "Gentle Stretching",
    //   "Hip & Leg Stretching",
    //   "Backbending & Shoulder",
    //   "Hatha & Core",
    //   "Bending & Twisting",
    // ],
    [
      "11:00 AM (60 mins)",
      "Available For Private Class ",
      "Available for private class",
      "Available for Private Class",
      "Available for Private Class",
      "Available for Private Class",
    ],
    [
      "05:00 PM (60 mins)",
      "Available for Private Class",
      "Kids Yoga",
      "Available for Private Class",
      "Kids Yoga",
      "Available For Private Class ",
    ],
    [
      "06:15 PM (60 mins)",
      "Hatha & Core",
      "Traditional Hatha & Core",
      "Twisting & Forward",
      "Hatha & Core",
      "Front & Middle Split",
    ],
    [
      "7:30 PM (60 mins)",
      "Gentle Stretching",
      "Full Body Opening",
      "Backbending & Shoulder",
      "Twisting & Forwardbend",
      "Hip & Shoulder",
    ],
  ];
  const weekendSchedule = [
    [
      "07:45 AM (70 mins)",
      "Backbending & Shoulder Opening",
      "Ashtanga Full Series",
    ],
    ["09:00 AM (75 mins)", "Full Body Opening", "Gentle Stretching"],
    ["05:30 PM (60 mins)", "Gentle Stretching", "Full Body Opening"],
    ["07:00 PM (60 mins)", "Breathwork & body Movement", "Traditional Hatha"],
  ];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    countryCode: "", // New field for country code
    address: "",
    day: "",
    time: "",
    className: "",
    additionalNotes: "", // New field for the textarea input
  });
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const [isLoading, setIsLoading] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  const handlePhoneChange = (phone, data) => {
    const countryCode = data.dialCode;
    setFormData({ ...formData, phone, countryCode });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    emailjs
      .send(
        "service_humsg3f",
        "template_vbek2p9",
        formData, // This now includes countryCode
        "OeImuFYSxUCtonOzH"
      )
      .then(
        (result) => {
          setIsLoading(false);
          alert("Booking request sent successfully!");
          setFormData({
            name: "",
            email: "",
            phone: "",
            countryCode: "",
            address: "",
            day: "",
            time: "",
            className: "",
            additionalNotes: "", // New field for the textarea input
          });
          closeModal();
        },
        (error) => {
          setIsLoading(false);
          alert("Failed to send booking request. Please try again.");
          console.error("EmailJS Error:", error);
        }
      );
  };

  return (
    <MainLayout>
      <div className="yoga-schedule-container mt-[150px] bg-gradient-to-b from-green-100 to-white py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="schedule-title text-3xl font-semibold text-center text-gray-800 mb-1">
          Yoga Schedule and Booking
        </h1>

        {/* Bootstrap Toast Notification */}
        <ToastContainer position="top-end" className="p-3 fixed">
          <Toast
            show={showToast} // Conditionally render the Toast
            onClose={() => setShowToast(false)} // Close on click of X button
            delay={5000} // Duration before it auto-closes (optional)
            autohide // Auto-hide after delay
          >
            <Toast.Header>
              <img
                src={Logo} // Use your image URL here
                className="rounded me-2 object-cover w-5 h-5"
                alt="Instructor"
              />
              <strong className="me-auto">Aadiyogacenter Phuket</strong>
              <small>Now</small>
            </Toast.Header>
            <Toast.Body>
              In case you face any issue while booking a class, you can contact
              our instructor through WhatsApp or call +66 80 251 1273.
            </Toast.Body>
          </Toast>
        </ToastContainer>

        <button
          className="book-class-btn mt-2 bg-green-300 text-white hover:bg-green-200 font-medium py-2 px-6 rounded-full shadow-md transition duration-300 transform hover:scale-105"
          onClick={openModal}
        >
          Book Class
        </button>

        {/* Timetable code remains the same */}

        <div className="timetable-container my-2">
          <h2 className="timetable-heading text-2xl font-bold text-gray-700 mb-6">
            Weekdays Schedule (Monday to Friday)
          </h2>
          <div className="overflow-x-auto rounded-lg shadow-lg">
            <table className="yoga-timetable table-auto w-full bg-white border border-gray-300 rounded-lg">
              <thead className="bg-green-500 text-white">
                <tr>
                  <th className="py-3 px-4">Time / Day</th>
                  <th className="py-3 px-4">Monday</th>
                  <th className="py-3 px-4">Tuesday</th>
                  <th className="py-3 px-4">Wednesday</th>
                  <th className="py-3 px-4">Thursday</th>
                  <th className="py-3 px-4">Friday</th>
                </tr>
              </thead>
              <tbody>
                {weekdaysSchedule.map((row, index) => (
                  <tr
                    key={index}
                    className="border-b border-gray-200 hover:bg-green-50"
                  >
                    {row.map((session, cellIndex) => (
                      <td key={cellIndex} className="py-3 px-4">
                        {session}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="timetable-container my-12">
          <h2 className="timetable-heading text-2xl font-bold text-gray-700 mb-6">
            Weekend Schedule (Saturday and Sunday)
          </h2>
          <div className="overflow-x-auto rounded-lg shadow-lg">
            <table className="yoga-timetable table-auto w-full bg-white border border-gray-300 rounded-lg">
              <thead className="bg-green-500 text-white">
                <tr>
                  <th className="py-3 px-4">Time / Day</th>
                  <th className="py-3 px-4">Saturday</th>
                  <th className="py-3 px-4">Sunday</th>
                </tr>
              </thead>
              <tbody>
                {weekendSchedule.map((row, index) => (
                  <tr
                    key={index}
                    className="border-b border-gray-200 hover:bg-green-50"
                  >
                    {row.map((session, cellIndex) => (
                      <td key={cellIndex} className="py-3 px-4">
                        {session}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {isModalOpen && (
          <div
            className="modal-overlay fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
            onClick={closeModal}
          >
            <div
              className="modal-content bg-white p-6 rounded-lg shadow-xl w-11/12 sm:w-96 max-h-[80vh] overflow-y-auto flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">
                Book a Yoga Class
              </h2>
              <form className="booking-form space-y-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <label className="flex flex-col">
                    <span className="text-sm">
                      Name{" "}
                      <span className="text-red-500 text-orange m-1">*</span>:
                    </span>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      className="mt-1 p-2 border border-gray-300 rounded-md text-sm"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </label>
                  <label className="flex flex-col">
                    <span className="text-sm">
                      Email{" "}
                      <span className="text-red-500 text-orange m-1">*</span>:
                    </span>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      className="mt-1 p-2 border border-gray-300 rounded-md text-sm"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </label>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <label className="flex flex-col">
                    <span className="text-sm">
                      Phone Number{" "}
                      <span className="text-red-500 text-orange m-1">*</span>:
                    </span>
                    <PhoneInput
                      country={"us"}
                      value={formData.phone}
                      onChange={handlePhoneChange}
                      inputStyle={{
                        width: "100%",
                        padding: "8px",
                        border: "1px solid #d1d5db",
                        borderRadius: "6px",
                      }}
                      required
                    />
                  </label>
                  <label className="flex flex-col">
                    <span className="text-sm">Address:</span>
                    <input
                      type="text"
                      name="address"
                      placeholder="Enter your address"
                      className="mt-1 p-2 border border-gray-300 rounded-md text-sm"
                      value={formData.address}
                      onChange={handleChange}
                      required
                    />
                  </label>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <label className="flex flex-col">
                    <span className="text-sm">Date:</span>
                    <input
                      type="date"
                      name="day"
                      className="mt-1 p-2 border border-gray-300 rounded-md text-sm"
                      value={formData.day}
                      onChange={handleChange}
                      required
                    />
                  </label>
                  <label className="flex flex-col">
                    <span className="text-sm">Time:</span>
                    <select
                      name="time"
                      className="mt-1 p-2 border border-gray-300 rounded-md text-sm scrollable-select"
                      value={formData.time}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select Time</option>
                      {weekdaysSchedule
                        .concat(weekendSchedule)
                        .flatMap((row) => (
                          <option key={row[0]} value={row[0]}>
                            {row[0]}
                          </option>
                        ))}
                    </select>
                  </label>
                </div>
                <div className="flex flex-col">
                  <label className="text-sm">Class Name:</label>
                  <select
                    name="className" // add name attribute
                    value={formData.className} // set value from formData
                    onChange={handleChange} // handle onChange to update formData
                    className="mt-1 p-2 border border-gray-300 rounded-md text-sm"
                    required
                  >
                    <option value="">Select Class</option>
                    <option value="Bending & Twisting">
                      Bending & Twisting
                    </option>
                    <option value="Hip & Shoulder Opening">
                      Hip & Shoulder Opening
                    </option>
                    <option value="Front & Middle Split">
                      Front & Middle Split
                    </option>
                    <option value="Backbending & Shoulder">
                      Backbending & Shoulder Opening
                    </option>
                    <option value="Gentle Stretching">Gentle Stretching</option>
                    <option value="Thoracic Opening & Breathwork">
                      Thoracic Opening & Breathwork
                    </option>
                    <option value="Available For Private Class ">
                      Available For Private Class
                    </option>
                    <option value="Hatha & Core">Hatha & Core</option>
                    <option value="Breathwork & body Movement">
                      Breathwork & body Movement
                    </option>
                    <option value="Full Body Opening">Full Body Opening</option>
                    <option value="Kids Yoga">Kids Yoga</option>
                    <option value="Ashtanga Series">
                      Ashtanga Full Series
                    </option>
                    <option value="Traditional Hatha & Core">
                      Traditional Hatha & Core
                    </option>
                    <option value="Twisting & Forwardbend">
                      Twisting & Forwardbend
                    </option>
                    <option value="Arm balance & Core">
                      Arm balance & Core
                    </option>

                    <option value="Meditation & body Movement">
                      Meditation & body Movement
                    </option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <label className="text-sm">
                    Additional Information (Optional):
                  </label>
                  <textarea
                    name="additionalNotes"
                    placeholder="If you have more than one person, give their names and if you have different questions, write them down here."
                    className="mt-1 p-2 border border-gray-300 rounded-md text-sm text-heading"
                    value={formData.additionalNotes}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="submit-btn w-full bg-green-300 text-white py-2 px-4 rounded-md mt-4 hover:bg-green-200 transition duration-300 text-sm flex justify-center items-center"
                >
                  {isLoading ? (
                    <div className="loader spinner-border animate-spin inline-block w-4 h-4 border-2 border-t-2 border-white-600 rounded-full mr-2"></div>
                  ) : (
                    "Submit"
                  )}
                </button>
              </form>
              <button
                className="close-modal-btn mt-4 w-full bg-heading text-white py-2 rounded-md text-sm"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
      <Contact />
    </MainLayout>
  );
};

export default YogaSchedule;
