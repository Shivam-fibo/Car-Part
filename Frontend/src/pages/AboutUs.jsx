import React from 'react';

const AboutUs = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-100 p-6">
      {/* Left Side: Image */}
      <div className="md:w-1/2 w-full flex justify-center mb-6 md:mb-0">
        <img 
          src="/car2.jpg" 
          alt="Car"
          className="rounded-lg shadow-lg object-cover w-full md:w-4/5 lg:w-3/5"
        />
      </div>

      {/* Right Side: Information */}
      <div className="md:w-1/2 w-full md:pl-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          About Us
        </h2>
        <p className="text-gray-600 text-lg mb-4">
          At our car parts store, we are committed to providing you with high-quality car components that keep your vehicle running smoothly. With years of experience in the automotive industry, our mission is to offer reliable products and exceptional customer service.
        </p>
        <p className="text-gray-600 text-lg">
          Whether you're looking for engine parts, suspension components, or any other car accessories, we have a wide selection to meet your needs. We are dedicated to helping you find the perfect parts for your car at competitive prices.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
