import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import carPartsData from '../data/carPartsData';

const PartDetailsPage = () => {
  const { itemId } = useParams();
  const item = carPartsData.flatMap(part => part.items).find(item => item.id === itemId);
 
  useEffect(()=>{
    window.scrollTo(0,0)
  }, [])

  console.log(item)
  return (
    <div className="part-details-page max-w-3xl mt-24 mx-auto p-8 mb-48 bg-gradient-to-r from-white to-gray-50 rounded-3xl shadow-xl transform transition duration-500 hover:shadow-2xl hover:scale-105">
  {item ? (
    <div className="group block">
      <img
        src={item.image}
        alt={item.name}
        className={`h-60 w-full object-cover rounded-2xl shadow-md transition-transform duration-300 cursor-pointer`}

      />

      <div className="mt-6 flex justify-between items-center text-sm">
        <div>
          <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
            {item.name}
          </h3>
          <p className="mt-2 text-gray-500 text-sm">
            {item.description}
          </p>
        </div>

        <p className="text-lg font-bold text-gray-900">
          {item.price !== undefined ? `$${item.price.toFixed(2)}` : "Price not available"}
        </p>
      </div>
    </div>
  ) : (
    <p className="text-center text-gray-600">Item not found.</p>
  )}
</div>

  );
};

export default PartDetailsPage;
