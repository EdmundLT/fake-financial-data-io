import React, { useState } from "react";

import { DemoResult } from "../data/data";

const Try = () => {
  const [showDemoResult, setShowDemoResult] = useState(false);

  return (
    <div className="container mx-auto p-2 text-center space-y-4">
      <div className="text-left px-6">
        <p className="text-3xl font-semibold pt-8 pb-4">Demo</p>
        <p className="pb-2">
          Method: <b className="text-green-500">GET</b>
        </p>
        <div className="mockup-code">
          <pre data-prefix="$">
            <code>http://ffd-api.click/api/v1/findata/demo</code>
          </pre>
          <pre data-prefix=">" className="text-warning">
            <code>fetching...</code>
          </pre>
          <pre data-prefix=">" className="text-success">
            <code>done!</code>
          </pre>
        </div>
      
        <div className="py-6 flex justify-center">
          <div
            className=" bg-green-500 w-40 text-center rounded-full p-2
         text-black cursor-pointer hover:text-white hover:bg-black select-none"
            onClick={() => {
              setShowDemoResult(!showDemoResult);
            }}
          >
            {showDemoResult ? "👇 Hide Results" : "👇 Show Results"}
          </div>
        </div>
        {showDemoResult ? (
          <pre
            className="bg-gray-200 text-black h-auto w-auto p-1 rounded-md 
          select-all"
          >
            {DemoResult}
          </pre>
        ) : (
          <pre
            className="bg-gray-200 text-black h-auto w-auto p-1 rounded-md 
          select-all"
          >{`{}`}</pre>
        )}
      </div>

      <p className="text-left px-6 text-xl">
        🎉 Congrat! This is your first fetch!
      </p>
    </div>
  );
};

export default Try;
