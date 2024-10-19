import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CarPartsList from "./CarPartsList";
const CarPartCard = ({ part }) => {
  const navigate = useNavigate();
    // at landing page
  const handleClick = () => {
    navigate(`/parts/${part.id}`);
  };


  return (
    <div className="block rounded-3xl border border-gray-300 p-6 shadow-lg transition transform hover:scale-105 hover:shadow-2xl hover:border-blue-500 bg-gradient-to-br from-white to-gray-50">
           
  <section className="text-gray-800">
    <div className="flex justify-center items-center mb-4">
      <img
        src={part.image}
        alt={part.name}
        className="w-64 h-64 object-cover rounded-2xl shadow-md transition-transform duration-300 hover:scale-105"
      />
    </div>
  </section>

  <div className="mt-4 text-center">
    <h3 className="text-xl font-semibold text-gray-900 mb-2">
      {part.name}
    </h3>
    <p className="text-sm text-gray-500 mb-4">
      {part.description}
    </p>
    <button
      className="inline-block rounded-full bg-blue-600 px-10 py-2 text-sm font-semibold text-white shadow-md transition duration-300 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-400"
      onClick={handleClick}
    >
      View Details
    </button>
  </div>
</div>

  );
};

export default CarPartCard;
