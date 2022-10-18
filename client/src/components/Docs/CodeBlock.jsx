import React from "react";

const CodeBlock = ({ method, methodDescription, url, result, note }) => {
  return (
    <div className="container mx-auto p-4">
      <p className="text-left font-semibold pb-4">
        <span className=" text-green-500">{method}</span> {methodDescription}
      </p>
      <div className="py-4">
        <div className="mockup-code ">
          <pre data-prefix="1">
            <code>var axios = require('axios');</code>
          </pre>
          <pre data-prefix="2">
            <code></code>
          </pre>

          <pre data-prefix="3">
            <code>var config = &#123;</code>
          </pre>

          <pre data-prefix="4">
            <code>&#32;&#32;method: '{method}',</code>
          </pre>

          <pre data-prefix="5">
            <code>&#32;&#32;url: '{url}',</code>
          </pre>

          <pre data-prefix="6">
            <code>&#32;&#32;headers: &#123; &#125;</code>
          </pre>

          <pre data-prefix="7">
            <code>&#125;;</code>
          </pre>

          <pre data-prefix="8">
            <code></code>
          </pre>
          <pre data-prefix="9">
            <code>axios(config)</code>
          </pre>
          <pre data-prefix="10">
            <code>.then(function (response) &#123;</code>
          </pre>
          <pre data-prefix="11">
          <code>&#32;&#32;console.log(JSON.stringify(response.data));</code>
          </pre>
          <pre data-prefix="12">
            <code>&#125;)</code>
          </pre>
          <pre data-prefix="13">
            <code>.catch(function (error) &#123;</code>
          </pre>
          <pre data-prefix="14">
          <code>&#32;&#32;console.log(error);</code>
          </pre>
          <pre data-prefix="15">
          <code>&#125;);</code>
          </pre>
        </div>

        {/* <pre className="bg-gray-200 text-black p-1 rounded-md select-all">
          
        </pre> */}
      </div>
      <p>👇result</p>
      <div className="py-4">
        <pre className="bg-base-200 text-gray-300 p-1 rounded-md select-all border border-green-400">
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
