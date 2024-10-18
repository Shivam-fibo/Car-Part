import React from 'react';
import { useParams } from 'react-router-dom';
import carPartsData from '../data/carPartsData';
import CarDetails from '../components/CarDetails';

const CarPartPage = () => {
  const { partId } = useParams();
  const part = carPartsData.find((p) => p.id === partId);
  console.log(partId, part)
  return (
    <div className="flex items-center justify-center max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
      {part ? (
        <>
          <CarDetails part={part} />
        </>
      ) : (
        <p className="text-gray-600">Part not found.</p>
      )}
    </div>
  );
};

export default CarPartPage;
