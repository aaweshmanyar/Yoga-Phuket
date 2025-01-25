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
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import firebaseConfig from "../../Pages/firebase/firebaseConfig.js";

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const db = firebase.firestore();


const YogaSchedule = () => {
  const [showToast, setShowToast] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bookingData, setBookingData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    countryCode: "",
    address: "",
    day: "",
    time: "",
    className: "",
    additionalNotes: "",
  });

  // Toast auto-hide functionality
  useEffect(() => {
    setTimeout(() => setShowToast(false), 10000);
  }, []);

  // const weekdaysSchedule = [
  //   // Weekday schedule array
  //   ["07:45 AM (60 Min)", "Full Body Opening", "Meditation & Body Movement", "Thoracic Opening & Breathwork", "Backbending & Shoulder", "Hatha & Core"],
  //   ["09:00 AM (60 mins)", "Meditation & Body Movement", "Backbending & Shoulder", "Hatha & Core", "Bending & Twisting", "Arm Balance & Core"],
  //   ["11:00 AM (60 mins)", "Available For Private Class", "Available For Private Class", "Available For Private Class", "Available For Private Class", "Available For Private Class"],
  //   ["05:00 PM (60 mins)", "Available For Private Class", "Kids Yoga", "Available For Private Class", "Kids Yoga", "Available For Private Class"],
  //   ["06:15 PM (60 mins)", "Hatha & Core", "Traditional Hatha & Core", "Twisting & Forward", "Hatha & Core", "Front & Middle Split"],
  //   ["07:30 PM (60 mins)", "Gentle Stretching", "Full Body Opening", "Backbending & Shoulder", "Twisting & Forward Bend", "Hip & Shoulder"],
  // ];

  const [weekdaysSchedule, setWeekdaysSchedule] = useState([]);

  useEffect(() => {
    const fetchSchedule = async () => {
      try {
        // Days of the week
        const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
        const schedule = [];

        // Fetch data for each day
        for (const day of days) {
          const dayRef = db.collection("phuket_yoga_schedule").doc(day); // Use updated collection name
          const daySnapshot = await dayRef.get();

          if (daySnapshot.exists) {
            const dayData = daySnapshot.data();
            const sessions = dayData.sessions || []; // Fetch sessions array from the database

            // Populate schedule rows based on session times
            sessions.forEach((session, index) => {
              if (!schedule[index]) schedule[index] = [];

              const sessionTimeWithDuration = `${session.time} (${session.duration || "N/A"})`; // Add duration if available
              schedule[index][days.indexOf(day) + 1] = session.class || "N/A"; // Add class
              schedule[index][0] = sessionTimeWithDuration; // Add time with duration
            });
          }
        }

        setWeekdaysSchedule(schedule); // Set the complete schedule
      } catch (error) {
        console.error("Error fetching schedule:", error);
      }
    };

    fetchSchedule();
  }, []);


  // const weekendSchedule = [
  //   // Weekend schedule array
  //   ["07:45 AM (70 mins)", "Backbending & Shoulder Opening", "Ashtanga Full Series"],
  //   ["09:00 AM (75 mins)", "Full Body Opening", "Gentle Stretching"],
  //   ["05:30 PM (60 mins)", "Gentle Stretching", "Full Body Opening"],
  //   ["07:00 PM (60 mins)", "Breathwork & Body Movement", "Traditional Hatha"],
  // ];


  const [weekendSchedule, setWeekendSchedule] = useState([]);

  useEffect(() => {
    const fetchWeekendSchedule = async () => {
      try {
        // Fetch Saturday and Sunday documents from the correct collection
        const saturdayRef = db.collection("phuket_yoga_schedule").doc("Saturday"); // Updated collection name
        const sundayRef = db.collection("phuket_yoga_schedule").doc("Sunday"); // Updated collection name

        const [saturdaySnapshot, sundaySnapshot] = await Promise.all([
          saturdayRef.get(),
          sundayRef.get(),
        ]);

        const saturdayData = saturdaySnapshot.exists ? saturdaySnapshot.data().sessions : []; // Updated field name
        const sundayData = sundaySnapshot.exists ? sundaySnapshot.data().sessions : []; // Updated field name

        // Combine data into a single schedule
        const schedule = [];
        const maxLength = Math.max(saturdayData.length, sundayData.length);

        for (let i = 0; i < maxLength; i++) {
          const saturdayTime = saturdayData[i]?.time || "N/A";
          const sundayTime = sundayData[i]?.time || "N/A";

          const saturdayClass = saturdayData[i]
            ? `${saturdayData[i].class || "N/A"}`
            : "N/A";


          const sundayClass = sundayData[i]
            ? `${sundayData[i].class || "N/A"}`
            : "N/A";


          // Push data with time and duration
          schedule.push([
            saturdayTime !== "N/A" ? `${saturdayTime} (${saturdayData[i]?.duration || "N/A"})` : sundayTime !== "N/A" ? `${sundayTime} (${sundayData[i]?.duration || "N/A"} min)` : "N/A", // Time with duration
            saturdayClass, // Saturday class with duration
            sundayClass, // Sunday class with duration
          ]);
        }

        setWeekendSchedule(schedule); // Update the state with the combined schedule
      } catch (error) {
        console.error("Error fetching weekend schedule:", error);
      }
    };

    fetchWeekendSchedule();
  }, []);


  // Handlers
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handlePhoneChange = (phone, data) => {
    const countryCode = data.dialCode;
    setFormData({ ...formData, phone, countryCode });
  };


  const handleBookingSubmit = async (e) => {
    e.preventDefault();
  
    const { name, email, phone, countryCode, day, time, className, payAtCenter, allowMultipleClasses } = formData;
  
    // Validate input fields
    if (!name || !email || !phone || !countryCode || !day || !time || !className) {
      alert("Please fill all required fields.");
      return;
    }
  
    setIsLoading(true);
  
    try {
      // If "Pay at Center" is selected, skip guest validation and plan checks
      if (payAtCenter) {
        const response = await fetch("https://api.aadiyogacenterphuket.com/schedule/api/book-class", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...formData, payAtCenter: true, allowMultipleClasses }),
        });
  
        const data = await response.json();
  
        if (response.ok) {
          setBookingData({ ...formData, bookingId: data.bookingId });
          alert(data.message);
          window.location.reload();
        } else {
          alert(data.message);
        }
  
        setIsLoading(false);
        return;
      }
  
      // Fetch guest details from Firestore
      const guestsSnapshot = await db.collection("guests").where("email", "==", email).get();
  
      if (guestsSnapshot.empty) {
        alert("No matching guest found. Please check your details.");
        setIsLoading(false);
        return;
      }
  
      const guestDoc = guestsSnapshot.docs[0];
      const guestData = guestDoc.data();
      const { planName, validity, description } = guestData;
  
      const remainingClasses = description || 0;
  
      // Validate plan validity
      const isPlanValid = () => {
        if (typeof validity === "string" && validity.includes("Valid for")) {
          const daysValid = parseInt(validity.split(" ")[2], 10);
          const expirationDate = new Date();
          expirationDate.setDate(expirationDate.getDate() + daysValid);
          return new Date() <= expirationDate;
        } else if (validity?.toDate && new Date(validity.toDate()) >= new Date()) {
          return true;
        }
        return false;
      };
  
      if (!isPlanValid()) {
        alert("Your plan is no longer valid. Please renew your plan.");
        setIsLoading(false);
        return;
      }
  
      // Handle "Drop-in" plan validation
      if (planName === "Drop-in") {
        const oneWeekAgo = new Date();
        oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
  
        const bookingsSnapshot = await db.collection("booked-classes-payment").where("email", "==", email).get();
        const recentBooking = bookingsSnapshot.docs.some((doc) => {
          const bookingDate = new Date(doc.data()?.bookingTime);
          return bookingDate >= oneWeekAgo;
        });
  
        // Allow multiple bookings if the checkbox is checked
        if (!allowMultipleClasses && recentBooking) {
          alert("You can only book one class every 7 days with the Drop-in plan.");
          setIsLoading(false);
          return;
        }
  
        if (remainingClasses <= 0) {
          alert("You have no remaining classes available under the Drop-in plan.");
          setIsLoading(false);
          return;
        }
      }
  
      // Skip checking for existing bookings on the same day if `allowMultipleClasses` is true
      if (!allowMultipleClasses) {
        // Check for existing bookings on the same day
        const existingBookingSnapshot = await db
          .collection("booked-classes-payment")
          .where("email", "==", email)
          .where("day", "==", day)
          .get();
  
        if (!existingBookingSnapshot.empty) {
          alert("You have already booked a class for this day.");
          setIsLoading(false);
          return;
        }
      }
  
      // Proceed with booking
      const response = await fetch("https://api.aadiyogacenterphuket.com/schedule/api/book-class", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, payAtCenter: false, allowMultipleClasses }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        setBookingData({ ...formData, bookingId: data.bookingId });
        alert(data.message);
  
        // If the booking is successful, update the remaining classes
        if (planName !== "Drop-in") {
          await guestDoc.ref.update({ description: remainingClasses - 1 }); // Update remaining classes
        }
  
        window.location.reload();
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Error during booking:", error);
      alert("An error occurred while booking. Please try again later.");
    } finally {
      setIsLoading(false);
    }
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

        {/* <div className="timetable-container my-2">
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
        </div> */}


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
                {weekdaysSchedule.length > 0 ? (
                  weekdaysSchedule.map((row, index) => (
                    <tr
                      key={index}
                      className="border-b border-gray-200 hover:bg-green-50"
                    >
                      {row.map((cell, cellIndex) => (
                        <td key={cellIndex} className="py-3 px-4">
                          {cell || "N/A"}
                        </td>
                      ))}
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="py-3 px-4 text-center">
                      Loading schedule...
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* <div className="timetable-container my-12">
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
        </div> */}

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
                {weekendSchedule.length > 0 ? (
                  weekendSchedule.map((row, index) => (
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
                  ))
                ) : (
                  <tr>
                    <td colSpan="3" className="py-3 px-4 text-center">
                      Loading schedule...
                    </td>
                  </tr>
                )}
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
              <form className="booking-form space-y-4" onSubmit={handleBookingSubmit}>
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
                  />
                </div>
                <div className="flex items-center">
                  <label htmlFor="payAtCenter" className="text-sm ml-1">
                    Pay at Center
                  </label>
                  <input
                    type="checkbox"
                    id="payAtCenter"
                    name="payAtCenter"
                    checked={formData.payAtCenter || false}
                    onChange={(e) =>
                      setFormData({ ...formData, payAtCenter: e.target.checked })
                    }
                    className="h-4 w-4 text-green-300 border-gray-300 rounded focus:ring-green-200"
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
