import React, { useState } from 'react';
import axios from 'axios';
import { FaArrowTurnDown } from 'react-icons/fa6';

const Contact = () => {


  const handleSubmit = (event) => {
    event.preventDefault();
        alert('comming soon...')
     
  }

  return(
  <section id="contact" className="bg-white dark:bg-black dark:text-white py-10 scroll-smooth">

   <h1 className="text-center text-4xl font-bold">
        Contact 
        <span className="text-purple-700">
          {" "}
          Me
          <FaArrowTurnDown className="inline-block text-black dark:text-gray-100" />{" "}
        </span>
      </h1>



    <div className="container mx-auto px-5 ">
  
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300 mb-2" htmlFor="name">
            Name
          </label>
          <input
            required
            type="text"
            id="name"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-purple-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300 mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email" required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-purple-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300 mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            id="message" required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-purple-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
        </div>
        <button 
          type="submit"
          className="w-full px-4 py-2 bg-purple-700 text-white font-semibold rounded-lg hover:bg-purple-800 dark:bg-purple-600 dark:hover:bg-purple-700"
        >
          Send Message
        </button>
      </form>
    </div>
  </section>
)
};
export default Contact;
