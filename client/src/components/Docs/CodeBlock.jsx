import React from "react";

const CodeBlock = ({ method, methodDescription, url, result, note }) => {
  return (
    <div className="container mx-auto p-4">
      <p className="text-left font-semibold pb-4">
        <span className=" text-green-500">{method}</span> {methodDescription}
      </p>
      <div className="py-4">
        <pre className="bg-gray-200 text-black p-1 rounded-md select-all">
          {url}
        </pre>
      </div>
      <p>👇result</p>
      <div className="py-4">
        <pre className="bg-gray-200 text-black p-1 rounded-md select-all">
          {result}
        </pre>
        {note && (
          <p className="p-2">
            <b className="text-red-200">Note: </b>
            {note}
          </p>
        )}
      </div>
    </div>
  );
};

export default CodeBlock;
