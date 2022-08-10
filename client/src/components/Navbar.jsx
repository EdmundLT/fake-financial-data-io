import React from "react";

const Navbar = () => {
  return (
    <div
      className="p-4 bg-gray-400 border-b-2 border-black flex justify-start md:justify-around
    backdrop-filter backdrop-blur-lg bg-opacity-30 text-white"
    >
      <a href="/">
        <p className="text-2xl select-none cursor-pointer">
          Fake Financial Data{" "}
          <span className="text-xs px-1 border border-white rounded-full hover:bg-green-500 hover:text-black">
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
        {/* <a href="/known-issue/">
          <p>Known Issues</p>
        </a> */}
      </div>
    </div>
  );
};

export default Navbar;
