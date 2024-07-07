import React from "react";
import { Link } from "react-router-dom";

const Student3 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-600 to-gray-900 text-white p-8 flex flex-col justify-center items-center">
      <h1 className="text-6xl font-extrabold mb-8">David Asulin</h1>
      
      <section className="mb-10">
        <h2 className="text-4xl font-bold mb-4">Personal Information</h2>
        <p className="text-2xl mb-2">Name: David Asulin</p>
        <p className="text-2xl mb-4">ID: 205908569</p>
      </section>
      
      <section className="mb-10">
        <h2 className="text-4xl font-bold mb-4">Hobbies and Interests</h2>
        <ul className="text-2xl space-y-2">
          <li>Gaming</li>
          <li>Music</li>
          <li>Programming</li>
          <li>Cooking</li>
        </ul>
      </section>
      
      <section className="mb-10">
        <h2 className="text-4xl font-bold mb-4">Courses</h2>
        <ul className="text-2xl space-y-2">
          <li>Crpyto</li>
          <li>E-commerce</li>
          <li>Information retrieval</li>
          <li>Final Project - Part B</li>
        </ul>
      </section>
      
      <section className="mb-10">
        <h2 className="text-4xl font-bold mb-4">Contact</h2>
        <p className="text-2xl">Email: David.asulin@e.braude.ac.il</p>
      </section>
      
      <Link to="/" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
        &larr; Go back home
      </Link>
    </div>
  );
};

export default Student3;
