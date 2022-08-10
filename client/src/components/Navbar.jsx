import React from "react";

const Navbar = () => {
  return (
    <div
      className="p-4 bg-white border border-gray-200 flex justify-start md:justify-around
    backdrop-filter backdrop-blur-lg bg-opacity-30"
    >
      <a href="/">
        <p className="text-2xl select-none cursor-pointer">
          Fake Financial Data{" "}
          <span className="text-xs px-1 border border-black rounded-full">
            beta
          </span>
        </p>
      </a>

      <div className="pt-1 space-x-6 select-none hidden md:flex">
        <a href="/guide/">
          <p>Guide</p>
        </a>
        <a href="/docs/">
          <p>Documentation</p>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
