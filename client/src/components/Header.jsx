import React from "react";
import { SiSqlite, SiExpress, SiReact, SiNodedotjs } from "react-icons/si";
const Header = () => {
  return (
    <div className="container mx-auto py-40 text-center space-y-6">
      <p className="text-2xl pt-10">
        Want a free API to test your stock Application or Data Analysis?
      </p>
      <p>Fake Stock data API for testing and data analysis practice.</p>
      <div className="flex justify-center gap-4 pb-2">
        <p>Powered by</p>
        <SiSqlite className="w-8 h-8" />
        <SiExpress className="w-8 h-8 " />
        <SiReact className="w-8 h-8 " />
        <SiNodedotjs className="w-8 h-8 " />
      </div>
    </div>
  );
};

export default Header;
