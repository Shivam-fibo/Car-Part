import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import carPartsData from '../data/carPartsData';

const PartDetailsPage = () => {
  const { itemId } = useParams();
  const item = carPartsData.flatMap(part => part.items).find(item => item.id === itemId);
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked); // Toggle the click state for animation
  };

  useEffect(()=>{
    window.scrollTo(0,0)
  }, [])

  console.log(item)
  return (
    <div className="part-details-page max-w-3xl mx-auto p-6 mb-48 bg-white rounded-lg shadow-md">
    {item ? (
      <div className="group block">
        <img
          src={item.image}
          alt={item.name}
          className={`h-40 w-40 object-cover sm:h-56 transition-transform duration-300 ${isClicked ? 'scale-110' : 'scale-100'}`} 
          />

        <div className="mt-3 flex justify-between text-sm">
          <div>
            <h3 className="text-gray-900 group-hover:underline group-hover:underline-offset-4">
              {item.name}
            </h3>

            <p className="mt-1.5 text-pretty text-xs text-gray-500">
              {item.description}
            </p>
          </div>

          <p className="text-gray-900">${item.price !== undefined ? item.price : "Price not available"}</p>
        </div>
      </div>
    ) : (
      <p className="text-gray-600">Item not found.</p>
    )}
  </div>
  );
};

export default PartDetailsPage;
