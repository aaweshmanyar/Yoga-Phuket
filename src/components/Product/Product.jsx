import React from "react";
import MainLayout from "../../Layouts/MainLayout";
import Contact from "../Contact/Contact";
import image1 from "./Productimg/product1.jpeg";
import image2 from "./Productimg/product2.jpeg";
import image3 from "./Productimg/product3.jpeg";

const Product = () => {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8 mb-10 mt-[120px] text-center">
        {/* Header Text */}
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
          We Are Launching Soon Our Yoga Products
        </h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-xl mx-auto mb-8">
          Discover the perfect balance of comfort and support with our exclusive
          yoga products.
        </p>

        {/* Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Yoga Mat Product Card */}
          <div className="border rounded-lg shadow-lg overflow-hidden p-5">
            <img
              src={image1}
              alt="Yoga Mat"
              className="w-full h-auto rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800">
              Eco-Friendly Yoga Mat
            </h3>
            <p className="text-gray-600 mt-2">
              Enhance your yoga practice with our premium eco-friendly yoga mat,
              designed for comfort, durability, and superior grip.
            </p>
            <p className="text-green-600 font-semibold mt-4">Launching Soon!</p>
          </div>

          {/* Yoga Block Product Card */}
          <div className="border rounded-lg shadow-lg overflow-hidden p-5">
            <img
              src={image2}
              alt="Yoga Block"
              className="w-full h-auto rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800">
              Cork Yoga Block
            </h3>
            <p className="text-gray-600 mt-2">
              Achieve balance and flexibility with our sturdy cork yoga blocks,
              providing support for deeper stretches and better posture.
            </p>
            <p className="text-green-600 font-semibold mt-4">Launching Soon!</p>
          </div>

          {/* Yoga Mat Bag Product Card */}
          <div className="border rounded-lg shadow-lg overflow-hidden p-5">
            <img
              src={image3}
              alt="Yoga Mat Bag"
              className="w-full h-auto rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800">
              Organic Cotton Yoga Mat Bag
            </h3>
            <p className="text-gray-600 mt-2">
              Carry your yoga essentials with ease using our organic cotton mat
              bag, featuring an adjustable strap and extra pockets.
            </p>
            <p className="text-green-600 font-semibold mt-4">Launching Soon!</p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <Contact />
    </MainLayout>
  );
};

export default Product;
