import React, { useState } from 'react';
import carPartsData from '../data/carPartsData.js';
import carBrands from '../data/carBrandData';
import { Link } from 'react-router-dom';

const CarPartSelector = () => {
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedModel, setSelectedModel] = useState('');

  const handleBrandChange = (e) => {
    setSelectedBrand(e.target.value);
    setSelectedModel('');
  };

  const handleModelChange = (e) => {
    setSelectedModel(e.target.value);
  };

  const selectedBrandModels = carBrands.find(car => car.id === selectedBrand)?.models || [];

  const filteredParts = carPartsData;

  return (
    <div className="car-part-selector flex min-h-screen bg-gray-100">
    {/* Container to center the content and keep it from pushing up the footer */}
    <div className="flex-grow flex items-center justify-center py-8">
      <div className="w-full bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Select Your Car</h2>
  
        {/* Dropdown for selecting a brand */}
        <select
          onChange={handleBrandChange}
          value={selectedBrand}
          className="p-3 border border-gray-300 rounded-lg bg-white shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-500 w-full mb-4"
        >
          <option value="">Select Brand</option>
          {carBrands.map((brand) => (
            <option key={brand.id} value={brand.id}>
              {brand.name}
            </option>
          ))}
        </select>
  
        {/* Dropdown for selecting a model */}
        {selectedBrand && (
          <select
            onChange={handleModelChange}
            value={selectedModel}
            className="p-3 border border-gray-300 rounded-lg bg-white shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-500 w-full mb-4"
          >
            <option value="">Select Model</option>
            {selectedBrandModels.map((model) => (
              <option key={model.id} value={model.id}>
                {model.name}
              </option>
            ))}
          </select>
        )}
  
        {/* Parts list displayed after selecting a model */}
        {selectedModel && (
          <div className="parts-list mt-6">
            <h3 className="text-lg font-semibold mb-4">Available Parts for {selectedModel}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredParts.map((part) => (
                <div key={part.id} className="part-card bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                  <img src={part.image} alt={part.name} className="w-full h-40 object-cover rounded-md mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{part.name}</h3>
                  <p className="text-gray-600 mb-2">{part.description}</p>
                  <ul>
                    {part.items.map((item) => (
                      <li key={item.id} className="border-t py-2 flex justify-between items-center">
                        <span className="flex-grow text-left">{item.name}</span> {/* Center the item name */}
                        <span className="flex-shrink text-center">${item.price.toFixed(2)}</span> {/* Center the price */}
                        <Link
                          to={`/part-details/${item.id}`}
                          className="bg-blue-500 text-white px-2 py-1 ml-4 rounded hover:bg-blue-600 transition duration-300"
                        >
                          View Details
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  </div>
  
  );
};

export default CarPartSelector;
