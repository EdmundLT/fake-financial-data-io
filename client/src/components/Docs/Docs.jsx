import React from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";
const URL = "http://localhst:8000";
const Docs = () => {
  return (
    <div className="bg-gray-800 text-white">
      <Navbar />
      <div className="grid grid-cols-1 mx-auto container space-y-4 px-6">
        <p className="text-3xl py-4">Fake Financial Data API</p>
        <p className="text-left font-semibold">
          <span className=" text-green-500">GET</span> All Company Info
        </p>
        <div>
          
        </div>
        <p>result</p>
      </div>
      <Footer />
    </div>
  );
};

export default Docs;
