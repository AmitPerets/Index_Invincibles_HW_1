import React from "react";
import { Link } from "react-router-dom";

const Student1 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-600 to-gray-900 text-white p-8 flex flex-col justify-center items-center">
      <h1 className="text-6xl font-extrabold mb-8">Amit Perets</h1>
      
      <section className="mb-10">
        <h2 className="text-4xl font-bold mb-4">Personal Information</h2>
        <p className="text-2xl mb-2">Name: Amit Perets</p>
        <p className="text-2xl mb-4">ID: 209054303</p>
      </section>
      
      <section className="mb-10">
        <h2 className="text-4xl font-bold mb-4">Hobbies and Interests</h2>
        <ul className="text-2xl space-y-2">
          <li>Playing Guitar</li>
          <li>Going on vacations</li>
          <li>Watching TV</li>
          <li>Cooking</li>
        </ul>
      </section>
      
      <section className="mb-10">
        <h2 className="text-4xl font-bold mb-4">Courses</h2>
        <ul className="text-2xl space-y-2">
          <li>Information Retrieval</li>
          <li>Introduction to Optimization</li>
          <li>Blockchain and Cryptocurrencies</li>
          <li>Final Project - Part B</li>
        </ul>
      </section>
      
      <section className="mb-10">
        <h2 className="text-4xl font-bold mb-4">Contact</h2>
        <p className="text-2xl">Email: amit.perets78@gmail.com</p>
      </section>
      
      <Link to="/" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
        &larr; Go back home
      </Link>
    </div>
  );
};

export default Student1;
