import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CarPartCard = ({ part }) => {
  const navigate = useNavigate();
    // at landing page
  const handleClick = () => {
    navigate(`/parts/${part.id}`);
  };


  return (
    <div
      className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"

    >
      <section className=" text-white">
      <div className="flex justify-center items-center">
      
          <img
            src={part.image}
            alt={part.name}
            className="w-64 h-64 object-cover rounded-lg"
          />
        </div>
      </section>

      <div className="mt-12 text-center">
        <button
          className="inline-block rounded bg-blue-500 px-12 py-3 text-sm font-medium text-white transition hover:bg-blue-700 hover: cursor-pointer focus:outline-none focus:ring focus:ring-yellow-400"
          onClick={handleClick}
        >
          {part.name}
        </button>
      </div>
    </div>
  );
};

export default CarPartCard;
