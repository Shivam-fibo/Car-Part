import React, { useRef } from 'react';
import CarPartCard from './CarPartCard';
import carPartsData from '../data/carPartsData';
import MarketingSection from './MarketingSection';
import CarPartsList from './CarPartsList';

const LandingPage = () => {

  const carPartsRef = useRef(null);

  const scrollToCarParts = () => {
    carPartsRef.current?.scrollIntoView({ behavior: 'smooth', block: "start", inline: "nearest" });
  };

  return (
    <>
      <div className="bg-gray-100">
        <section>
          <div className="bg-white">
            <main className="flex flex-col-reverse md:flex-row items-center px-5 md:px-20 mt-10">
              <div className="md:w-1/2 space-y-5">
                <h2 className="text-xl font-semibold text-gray-600">Upgrade Your Car</h2>
                <h1 className="text-5xl font-bold text-gray-800">
                  Save <span className="text-blue-500">big</span> on top-quality car parts
                </h1>
                <p className="text-gray-600">
                  Find premium car parts at unbeatable prices. Fast shipping, easy returns, and expert customer support to keep your car in peak condition.
                </p>
                <div className="space-x-4">
                  <button 
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600"
                    onClick={scrollToCarParts}
                  >
                    Shop Now
                  </button>
                  <button className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900">
                    Learn More
                  </button>
                </div>
              </div>
              <div className="md:w-1/2">
                <img 
                  src="/car3.png" 
                  alt="Car Parts" 
                  className="w-full h-auto"
                />
              </div>
            </main>
          </div>
        </section>

        <section className="bg-white text-gray-800" >
          <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <CarPartsList parts={carPartsData} />
            {/* Render the common marketing section */}
            <MarketingSection  />

            {/* Render the grid of car part cards */}
            <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3" ref={carPartsRef}>
           
              {carPartsData.map((part) => (
                <CarPartCard key={part.id} part={part} />
              ))}
            </div>
          </div>
        </section>
      </div>

      <div className="fixed bottom-4 right-4">
        <a href="https://wa.me/+237671393870?text=How may I help you?" target="_blank">
          <img src="/whatsapp.png" alt="WhatsApp" />
        </a>
      </div>
    </>
  );
};

export default LandingPage;
