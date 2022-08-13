import React from "react";

const Navbar = () => {
  return (
    <div
      className="p-4 bg-gray-600 border-b-2 border-black flex justify-start md:justify-around text-white"
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
        {/* <a href="/guide/">
          <p>Guide</p>
        </a> */}
        <a href="/docs/">
          <p>Guides</p>
        </a>
        <a href="https://github.com/EdmundLT/fake-financial-data-io">
          <p>Github</p>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
