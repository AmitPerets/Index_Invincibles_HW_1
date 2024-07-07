import React from "react";
import { Link } from "react-router-dom";

const Student2 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-600 to-gray-900 text-white p-8 flex flex-col justify-center items-center">
      <h1 className="text-6xl font-extrabold mb-8">Israel Shushan</h1>
      
      <section className="mb-10">
        <h2 className="text-4xl font-bold mb-4">Personal Information</h2>
        <p className="text-2xl mb-2">Name: Israel Shushan</p>
        <p className="text-2xl mb-4">ID: 318740834</p>
      </section>
      
      <section className="mb-10">
        <h2 className="text-4xl font-bold mb-4">Hobbies and Interests</h2>
        <ul className="text-2xl space-y-2">
          <li>Ping-pong</li>
          <li>Swimming</li>
          <li>Music</li>
        </ul>
      </section>
      
      <section className="mb-10">
        <h2 className="text-4xl font-bold mb-4">Courses</h2>
        <ul className="text-2xl space-y-2">
          <li>Networking</li>
          <li>Information retrieval</li>
          <li>Final Project - Part A</li>
          <li>Chess</li>
          <li>Algorithms for texts and sequences</li>
          <li>Compilation</li>
          <li>Introduction to artificial intelligence</li>
          <li>Lab about software design patterns</li>
          
        </ul>
      </section>
      
      <section className="mb-10">
        <h2 className="text-4xl font-bold mb-4">Contact</h2>
        <p className="text-2xl">Email: Israel.shushan@e.braude.ac.il</p>
      </section>
      
      <Link to="/" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
        &larr; Go back home
      </Link>
    </div>
  );
};

export default Student2;
