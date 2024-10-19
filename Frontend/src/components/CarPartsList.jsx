import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CarPartsList = ({ parts }) => {
  const [selectedPart, setSelectedPart] = useState('');
  const [selectedItem, setSelectedItem] = useState('');
  const navigate = useNavigate();

  const handlePartChange = (e) => {
    setSelectedPart(e.target.value);
    setSelectedItem(''); // Reset the item selection when part changes
  };

  const handleItemChange = (e) => {
    setSelectedItem(e.target.value);
  };

  const handleSearch = () => {
    if (selectedItem) {
      navigate(`/part-details/${selectedItem}`);
    }
  };

  // Find the selected part object to populate item dropdown
  const selectedPartData = parts.find(part => part.id === selectedPart);

  return (
    <div className="flex flex-col md:flex-row items-center mb-24 bg-gray-800 p-4 rounded-lg shadow-lg transform transition-transform hover:scale-105 max-w-3xl mx-auto mt-10 space-y-4 md:space-y-0 md:space-x-4">
      {/* Dropdown for selecting a part */}
      <select
        value={selectedPart}
        onChange={handlePartChange}
        className="p-3 border border-gray-300 rounded-lg bg-white shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">Select a part...</option>
        {parts.map((part) => (
          <option key={part.id} value={part.id}>
            {part.name}
          </option>
        ))}
      </select>

      {/* Dropdown for selecting an item within the selected part */}
      <select
        value={selectedItem}
        onChange={handleItemChange}
        className={`p-3 border border-gray-300 rounded-lg bg-white shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-500 ${!selectedPart ? 'opacity-50' : ''}`}
        disabled={!selectedPart}
      >
        <option value="">Select an item...</option>
        {selectedPartData?.items.map((item) => (
          <option key={item.id} value={item.id}>
            {item.name}
          </option>
        ))}
      </select>

      <button
        className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={!selectedItem}
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
};

export default CarPartsList;
