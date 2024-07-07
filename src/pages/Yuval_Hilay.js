import React from "react";
import { Link } from "react-router-dom";

const Student4 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-600 to-gray-900 text-white p-8 flex flex-col justify-center items-center">
      <h1 className="text-6xl font-extrabold mb-8">Yuval Hilay</h1>
      
      <section className="mb-10">
        <h2 className="text-4xl font-bold mb-4">Personal Information</h2>
        <p className="text-2xl mb-2">Name: Yuval Hilay</p>
        <p className="text-2xl mb-4">ID: 318609237</p>
      </section>
      
      <section className="mb-10">
        <h2 className="text-4xl font-bold mb-4">Hobbies and Interests</h2>
        <ul className="text-2xl space-y-2">
          <li>Footvolley</li>
          <li>Cooking</li>
        </ul>
      </section>
      
      <section className="mb-10">
        <h2 className="text-4xl font-bold mb-4">Courses</h2>
        <ul className="text-2xl space-y-2">
          <li>Networking</li>
          <li>Software verification</li>
          <li>Crypto</li>
          <li>Final Project - Part B</li>
          <li>Information retrieval</li>
        </ul>
      </section>
      
      <section className="mb-10">
        <h2 className="text-4xl font-bold mb-4">Contact</h2>
        <p className="text-2xl">Email: Yuval.Hilai@e.braude.ac.il</p>
      </section>
      
      <Link to="/" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
        &larr; Go back home
      </Link>
    </div>
  );
};

export default Student4;
