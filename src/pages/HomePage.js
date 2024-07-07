import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-600 to-gray-900 text-white flex flex-col items-center justify-center">
      <div className="max-w-4xl px-8 py-12 text-center">
        <h1 className="text-6xl font-extrabold mb-8">Welcome to the Index Invincibles Website</h1>
        <p className="text-2xl mb-10">Select a student to view their details:</p>
        <ul className="space-y-6">
          <li>
            <Link to="/Amit_Perets" className="block bg-gray-300 hover:bg-gray-400 text-3xl text-gray-900 py-4 px-6 rounded-lg transition duration-300 ease-in-out">
              Amit Perets
            </Link>
          </li>
          <li>
            <Link to="/Israel_Shushan" className="block bg-gray-300 hover:bg-gray-400 text-3xl text-gray-900 py-4 px-6 rounded-lg transition duration-300 ease-in-out">
              Israel Shushan
            </Link>
          </li>
          <li>
            <Link to="/David_Asulin" className="block bg-gray-300 hover:bg-gray-400 text-3xl text-gray-900 py-4 px-6 rounded-lg transition duration-300 ease-in-out">
              David Asulin
            </Link>
          </li>
          <li>
            <Link to="/Yuval_Hilay" className="block bg-gray-300 hover:bg-gray-400 text-3xl text-gray-900 py-4 px-6 rounded-lg transition duration-300 ease-in-out">
              Yuval Hilay
            </Link>
          </li>
        </ul>
      </div>
      <footer className="mt-auto py-4">
        <p className="text-gray-400 text-center">© Index Invincibles. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
