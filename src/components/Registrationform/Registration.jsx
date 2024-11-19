import React, { useState } from "react";
import MainLayout from '../../Layouts/MainLayout.jsx';
import emailjs from "emailjs-com";
import logo from './demologo.png';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "",
    mobile: "",
    gender: "",
    courseType: "",
    courseMonth: "",
    source: "",
    queries: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Define your EmailJS service, template, and user IDs
    const serviceID = "service_9l8z9fh";
    const templateID = "template_lufjjlm";
    const userID = "65BfYKv7Bv9t7H5g9";

    emailjs.send(serviceID, templateID, formData, userID)
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Registration submitted successfully!");
        setFormData({
          name: "",
          email: "",
          country: "",
          mobile: "",
          gender: "",
          courseType: "",
          courseMonth: "",
          source: "",
          queries: "",
        });
      })
      .catch((err) => {
        console.error("FAILED...", err);
        alert("There was an error submitting your registration. Please try again.");
      });
  };

  return (
    <MainLayout>
      <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen mt-[120px] mb-[20px]">
        {/* Logo */}
        <img src={logo} alt="Aadi Yoga Center Logo" className="w-24 mb-4" />

        {/* Form Heading */}
        <h1 className="text-2xl font-semibold text-gray-800 mb-2">Apply Now - Aadi Yoga Center Phuket</h1>
        <p className="text-gray-600 text-center mb-6 max-w-lg">
          Namaste! We’re thrilled to welcome you to our community. Fill out this form to complete your registration and start your transformative journey with us.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="w-full max-w-lg bg-white p-6 rounded-lg drop-shadow-2xl">
          {/* Personal Information */}
          <h2 className="text-lg font-semibold mb-4 text-gray-700">Personal Information</h2>

          {/* Name */}
          <label className="block mb-2 text-sm text-gray-600">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-green-300"
            required
          />

          {/* Email */}
          <label className="block mb-2 text-sm text-gray-600">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-green-300"
            required
          />

          {/* Country */}
          <label className="block mb-2 text-sm text-gray-600">Country of Residence</label>
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-green-300"
            required
          />

          {/* Mobile */}
          <label className="block mb-2 text-sm text-gray-600">Mobile Number with Country Code</label>
          <input
            type="tel"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-green-300"
            required
          />

          {/* Gender */}
          <label className="block mb-2 text-sm text-gray-600">Gender</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-green-300"
            required
          >
            <option value="">Select Your Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>

          {/* Course Information */}
          <h2 className="text-lg font-semibold mb-4 text-gray-700">Course Information</h2>

          {/* Course Type */}
          <label className="block mb-2 text-sm text-gray-600">Course Type</label>
          <select
            name="courseType"
            value={formData.courseType}
            onChange={handleChange}
            className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-green-300"
            required
          >
            <option value="">Select the course type</option>
            <option value="Private Classes">Private Classes</option>
            <option value="Regular Classes">Regular Classes</option>
          </select>

          {/* Course Month */}
          <label className="block mb-2 text-sm text-gray-600">Course Month</label>
          <select
            name="courseMonth"
            value={formData.courseMonth}
            onChange={handleChange}
            className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-green-300"
            required
          >
            <option value="">Select Course Month</option>
            {["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"].map(
              (month) => (
                <option key={month} value={month}>
                  {month}
                </option>
              )
            )}
          </select>

          {/* Source */}
          <label className="block mb-2 text-sm text-gray-600">How did you hear about us?</label>
          <select
            name="source"
            value={formData.source}
            onChange={handleChange}
            className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-green-300"
            required
          >
            <option value="">Select</option>
            <option value="Google">Google</option>
            <option value="Our Website">Our Website</option>
            <option value="Facebook">Facebook</option>
            <option value="Instagram">Instagram</option>
            <option value="Existing Student">Existing Student</option>
            <option value="Reference">Reference</option>
          </select>

          {/* Queries */}
          <label className="block mb-2 text-sm text-gray-600">Queries (if any)</label>
          <textarea
            name="queries"
            value={formData.queries}
            onChange={handleChange}
            className="w-full p-2 mb-6 border rounded focus:outline-none focus:ring-2 focus:ring-green-300"
            rows="3"
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full p-3 bg-green-300 text-white font-semibold rounded hover:bg-green-400 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </MainLayout>
  );
};

export default RegistrationForm;
