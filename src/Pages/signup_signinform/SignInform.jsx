import React, { useState, useEffect } from "react";
import { useAuth } from "../../components/context/AuthContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BounceLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";
import Image from '../../assets/img/Singin/signup/yogaside.jpeg';

const SigninForm = () => {
  const { login, user } = useAuth();
  const navigate = useNavigate();

  const [isSignUp, setIsSignUp] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user) {
      navigate("/normalclass");
    }
  }, [user, navigate]);

  const handleSignUp = async (userData) => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:5000/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });
      const data = await response.json();
      if (response.ok) {
        toast.success("Sign Up Successful. You can now log in!");
        setIsSignUp(false);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Something went wrong during sign up");
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async (loginData) => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://phuketbackend.onrender.com/auth/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(loginData),
        }
      );
      const data = await response.json();
      if (response.ok) {
        toast.success("Login Successful. Welcome back!");
        login(data.user);
        navigate("/normalclass");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Something went wrong during login");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSignUp) {
      const userData = { name, email, password, mobile };
      handleSignUp(userData);
    } else {
      const loginData = { email, password };
      handleLogin(loginData);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 via-teal-400 to-green-500 px-4">
      <div className="flex flex-col md:flex-row bg-white rounded-xl shadow-lg overflow-hidden max-w-5xl w-full">
        {/* Left Section */}
        <div className="md:w-1/2 p-8 flex flex-col justify-center items-center bg-gradient-to-tl from-green-500 via-teal-400 to-blue-500 text-white">
          <img
            src={Image} // Replace with actual image URL
            alt="Yoga Instructor"
            className="w-full max-w-sm rounded-lg shadow-lg"
          />
          <h1 className="text-4xl font-bold mt-6 text-center">
            Join Our Yoga Journey
          </h1>
          <p className="mt-2 text-lg text-center">
            Discover peace, strength, and balance through yoga.
          </p>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 p-8 flex flex-col justify-center">
          <ToastContainer />
          {loading && (
            <div className="absolute inset-0 flex justify-center items-center bg-white bg-opacity-75 z-10">
              <BounceLoader color="#3b82f6" loading={loading} size={60} />
            </div>
          )}
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            {isSignUp ? "Create an Account" : "Welcome Back"}
          </h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            {isSignUp && (
              <>
                <div>
                  <label className="block text-sm font-medium text-gray-600">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-teal-400"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600">
                    Mobile
                  </label>
                  <input
                    type="tel"
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-teal-400"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    required
                  />
                </div>
              </>
            )}
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Email
              </label>
              <input
                type="email"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-teal-400"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Password
              </label>
              <input
                type="password"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-teal-400"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-300 hover:bg-green-200 text-white py-3 rounded-lg font-semibold transition duration-300"
            >
              {isSignUp ? "Sign Up" : "Log In"}
            </button>
          </form>
          <div className="text-center mt-6">
            {isSignUp ? (
              <p>
                Already have an account?{" "}
                <span
                  className="text-teal-600 cursor-pointer font-semibold"
                  onClick={() => setIsSignUp(false)}
                >
                  Log In
                </span>
              </p>
            ) : (
              <p>
                Don’t have an account?{" "}
                <span
                  className="text-teal-600 cursor-pointer font-semibold"
                  onClick={() => setIsSignUp(true)}
                >
                  Create Account
                </span>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SigninForm;
