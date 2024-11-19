import React from "react";
import "react-phone-input-2/lib/style.css";
import "../Classes/Timetable.css";
import MainLayout from "../../Layouts/MainLayout";
import PhoneInput from "react-phone-input-2";

import emailjs from "emailjs-com";
import { useState, useEffect } from "react";

const Packageandplans = () => {
  const [showToast, setShowToast] = useState(true);
  useEffect(() => {
    setTimeout(() => setShowToast(false), 10000);
  }, []);
  const weekdaysSchedule = [
    [
      "6:30 AM",
      "Bending & Twisting",
      "Hip & Shoulder Opening",
      "Front & Middle Split",
      "Backbending & Shoulder",
      "Hatha & Core",
    ],
    [
      "7:45 AM",
      "Hip Opening & Shoulder",
      "Backbending & Shoulder",
      "Ashtanga Series",
      "Bending & Twisting",
      "Arm balance & Core",
    ],
    [
      "9:30 AM",
      "Gentle Stretching",
      "Hip & Leg Stretching",
      "Backbending & Shoulder",
      "Hatha & Core",
      "Bending & Twisting",
    ],
    [
      "11:30 AM",
      "Private Class Available",
      "Full Body Opening",
      "Private Class Available",
      "Gentle Stretching",
      "Private Class Available",
    ],
    [
      "5:15 PM",
      "Private Class Available",
      "Kids Yoga",
      "Private Class Available",
      "Kids Yoga",
      "Private Class Available",
    ],
    [
      "6:30 PM",
      "Hip & Shoulder",
      "Backbending & Shoulder",
      "Twisting & Forwardbend",
      "Hatha & Core",
      "Front & Middle Split",
    ],
    [
      "7:40 PM",
      "Gentle Stretching",
      "Full Body Opening",
      "Backbending & Shoulder",
      "Twisting & Forwardbend",
      "Hips & Shoulder",
    ],
  ];
  const weekendSchedule = [
    ["7:30 AM", "Backbending & Shoulder Opening", "Inversion & Core"],
    ["9:30 AM", "Full Body Opening", "Gentle Stretching"],
    ["6:30 PM", "Gentle Stretching", "Full Body Opening"],
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
      <div className="mt-[160px] px-4 sm:px-8 lg:px-16">
        <div className="flex flex-wrap justify-center gap-8">
          {/* Plan Card 1 */}
          <div className="bg-white shadow-lg border border-gray-300 rounded-lg w-full max-w-sm p-6 mb-14">
            <p className="text-2xl font-bold text-gray-800 text-center mb-4">
              DROP IN
            </p>
            <h1 className="text-4xl font-extrabold text-center text-green-600 mb-2">
              THB 599
            </h1>
            <p className="text-center text-gray-500 mb-4">Valid for 7 days</p>
            <button onClick={openModal} className="w-full bg-green-300 hover:bg-green-600 text-white font-bold py-2 rounded-md transition duration-300 ease-in-out mb-4">
              Buy Plans
            </button>
            <div className="text-center space-y-2">
              <p className="text-gray-700">One Class Access</p>
              <p className="text-gray-500">
                Perfect for those who want flexibility in their schedule.
              </p>
              <p className="text-gray-500">
                No commitment required. Access to any scheduled class.
              </p>
              <p className="font-bold text-red-500">Non-Refundable</p>
            </div>
          </div>

          {/* Plan Card 2 */}
          {/* <div className="bg-white shadow-lg border border-gray-300 rounded-lg w-full max-w-sm p-6 mb-14">
            <p className="text-2xl font-bold text-gray-800 text-center mb-4">
              DROP IN
            </p>
            <h1 className="text-4xl font-extrabold text-center text-green-600 mb-2">
              THB 599
            </h1>
            <p className="text-center text-gray-500 mb-4">Valid for 7 days</p>
            <button className="w-full bg-green-300 hover:bg-green-600 text-white font-bold py-2 rounded-md transition duration-300 ease-in-out mb-4">
              Buy Plans
            </button>
            <div className="text-center space-y-2">
              <p className="text-gray-700">One Class Access</p>
              <p className="text-gray-500">
                Perfect for those who want flexibility in their schedule.
              </p>
              <p className="text-gray-500">
                No commitment required. Access to any scheduled class.
              </p>
              <p className="font-bold text-red-500">Non-Refundable</p>
            </div>
          </div> */}
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
                      Backbending & Shoulder
                    </option>
                    <option value="Gentle Stretching">Gentle Stretching</option>
                    <option value="Private Class Available">
                      Private Class Available
                    </option>
                    <option value="Hatha & Core">Hatha & Core</option>
                    <option value="Full Body Opening">Full Body Opening</option>
                    <option value="Kids Yoga">Kids Yoga</option>
                    <option value="Ashtanga Series">Ashtanga Series</option>
                    <option value="Twisting & Forwardbend">
                      Twisting & Forwardbend
                    </option>
                    <option value="Arm balance & Core">
                      Arm balance & Core
                    </option>
                    <option value="Hip & Leg Stretching">
                      Hip & Leg Stretching
                    </option>
                    <option value="Inversion & Core">Inversion & Core</option>
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
    </MainLayout>
  );
};

export default Packageandplans;
