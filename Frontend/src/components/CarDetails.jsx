import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

const CarDetails = ({ part }) => {
  const navigate = useNavigate();
  // detail of car-parts category
  useEffect(()=>{
    window.scrollTo(0,0)
  }, [])
  console.log(part)
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      <h3 className="text-2xl font-bold text-gray-800 mb-4">{part.name}</h3>
      <p className="text-gray-600 mb-6">{part.description}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {part.items.map((item) => (
          <div
            key={item.id}
            className="bg-blue-100 rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => navigate(`/part-details/${item.id}`)}
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-40 object-cover rounded-md"
            />
            <p className="mt-3 text-lg font-medium text-gray-700">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarDetails;
