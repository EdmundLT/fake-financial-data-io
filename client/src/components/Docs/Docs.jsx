import React from "react";
import Navbar from "../Navbar";
const URL = "http://localhst:8000";
const Docs = () => {
  return (
    <div className="bg-gray-800 text-white">
      <Navbar />
      <div className="grid grid-cols-1 mx-auto container space-y-4">
        <p className="text-3xl p-4">Fake Financial Data API</p>
        <p className="text-left">
          <span className="font-semibold text-green-500">GET</span> All Company
          Info
        </p>
        <div>
        
        </div>
        <p>result</p>
      </div>
    </div>
  );
};

export default Docs;
