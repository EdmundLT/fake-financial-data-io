import React from "react";

const Changelog = ({ version, date, content }) => {
  return (
    <div className="md:grid md:grid-cols-4 border-b-2 border-t-2 py-2">
      <p className="md:col-span-1 font-semibold pb-2">
        v{version} - <span className="text-sm">{date}</span>
      </p>
      <p className="md:col-span-3 font-medium">{content}</p>
    </div>
  );
};

export default Changelog;
