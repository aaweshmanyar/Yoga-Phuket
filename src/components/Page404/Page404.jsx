import React from 'react';
import Bggif from './bg.gif';

const Page404 = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white font-poppins">
      <div className="text-center">
        <h1 className="text-8xl font-bold text-center leading-[100px]">404</h1>
        {/* Background Section */}
        <div
          className="w-full h-96 bg-center bg-no-repeat bg-cover"
          style={{ backgroundImage: `url(${Bggif})`}}
        >
        </div>

        {/* Content Section */}
        <div className="mt-[-50px]">
          <h3 className="text-2xl font-semibold">Looks Like You're Lost</h3>
          <p className="mt-4 text-lg text-gray-600">The page you are looking for is not available</p>
          <a
            href="/"
            className="mt-6 inline-block px-6 py-2 text-white bg-green-500 rounded hover:bg-green-600"
          >
            Go to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default Page404;