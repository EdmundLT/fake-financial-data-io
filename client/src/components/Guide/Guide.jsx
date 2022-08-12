import React from "react";
import Navbar from "../Navbar";
// import { Prism } from "@mantine/prism";
import { demoCode } from "../../data/data";
const Guide = () => {
  return (
    <div className="bg-gray-800 text-white">
      <Navbar />
      <div className="container mx-auto text-center py-4">
        <p className="text-3xl font-bold pb-4">Financial Data</p>
        <p>Get </p>
        {/* <div className="text-left">
          <Prism withLineNumbers language="jsx" colorScheme="dark">
            {demoCode}
          </Prism>
        </div> */}
      </div>
    </div>
  );
};

export default Guide;
