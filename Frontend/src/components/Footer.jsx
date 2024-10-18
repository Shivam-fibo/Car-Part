import React from 'react';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="https://AutoParts Hub.com/" className="flex items-center">
              <img
                src="https://AutoParts Hub.com/docs/images/logo.svg"
                className="h-8 me-3"
                alt="AutoParts Hub Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                AutoParts Hub
              </span>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Categories
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="https://AutoParts Hub.com/" className="hover:underline">
                  Engine Parts
                  </a>
                </li>
                <li>
                  <a href="https://tailwindcss.com/" className="hover:underline">
                  Brake Systems
                  </a>
                </li>
          
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Follow us
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a
                    href="https://github.com/themesberg/AutoParts Hub"
                    className="hover:underline"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">
                    Twitter
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Customer Support
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link to="/contactUs" className="hover:underline">
                  Contact Us
                  </Link>
                </li>
                <li>
                  <Link to="/privacy" className="hover:underline">
                  Privacy Policy
                  </Link>
                </li>
               
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{' '}
            <a href="https://AutoParts Hub.com/" className="hover:underline">
              AutoParts Hub™
            </a>
            . All Rights Reserved.
          </span>
         
        </div>
      </div>
    </footer>
  );
};

export default Footer;
