import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CarPartPage from './pages/CarPartPage';
import PartDetailsPage from './pages/PartDetailsPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ContactUs from './pages/ContactUs';
import PrivacyPolicy from './pages/PrivacyPolicy';
import AboutUs from './pages/AboutUs';
import CarPartSelector from './components/CarPartSelector';
import {Toaster} from 'react-hot-toast'

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/parts/:partId" element={<CarPartPage />} />
        <Route path="/part-details/:itemId" element={<PartDetailsPage />} />
        <Route path='/contactUs' element = {<ContactUs/>} />
        <Route path='/privacy' element = {<PrivacyPolicy/>} />
        <Route path='/aboutUs' element = {<AboutUs/>} />
        <Route path='/CarPartSelector' element = {<CarPartSelector/>} />
      </Routes>
      <Footer />
    </Router>
    <Toaster position="top-right" />
    </>
  );
}

export default App;
