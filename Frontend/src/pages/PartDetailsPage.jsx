import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import carPartsData from '../data/carPartsData';
import emailjs from '@emailjs/browser';
import { toast } from 'react-hot-toast';

const PartDetailsPage = () => {
  const { itemId } = useParams();
  const item = carPartsData.flatMap(part => part.items).find(item => item.id === itemId);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    mobileNumber: '' 
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleOrderClick = () => {
    setIsFormOpen(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID, 
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID_ORDER, 
      {
        to_name: formData.name,
        from_name: formData.name,
        user_name: formData.name,
        user_email: formData.email,
        user_address: formData.address,
        user_mobile: formData.mobileNumber,
        item_name: item.name,
        item_price: item.price
      }, 
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then((response) => {
      toast.success('Order sent successfully!');
      setIsFormOpen(false);
    })
    .catch((error) => {
      toast.error('Failed to send order. Please try again.');
      console.error('EmailJS Error:', error);
    });
  }

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
              <p className="mt-2 text-gray-500 text-sm">{item.description}</p>
            </div>
            <p className="text-lg font-bold text-gray-900">
              {item.price !== undefined ? `$${item.price.toFixed(2)}` : 'Price not available'}
            </p>
          </div>
          <button
            onClick={handleOrderClick}
            className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300"
          >
            Order Now
          </button>
        </div>
      ) : (
        <p className="text-center text-gray-600">Item not found.</p>
      )}

      {isFormOpen && (
        <form onSubmit={handleSubmit} className="mt-6 p-4 bg-white shadow-md rounded-lg">
          <div className="mb-4">
            <label className="block text-gray-700">Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Address:</label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Mobile Number:</label>
            <input
              type="tel"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md"
              required
            />
          </div>
          <button
            type="submit"
            className="px-6 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors duration-300"
          >
            Submit Order
          </button>
        </form>
      )}
    </div>
  );
};

export default PartDetailsPage;
