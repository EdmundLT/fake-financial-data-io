import React from "react";
import moment from "moment";
const Footer = () => {
  const year = moment().format("YYYY");
  return (
    <div className="bg-gray-400 p-2 md:flex justify-around">
      <p className="pb-2">Copyright &copy; EdmundLT {year}</p>
      <a href="https://github.com/EdmundLT" className="hover:text-lg ">
        <p>Github</p>
      </a>
    </div>
  );
};

export default Footer;
