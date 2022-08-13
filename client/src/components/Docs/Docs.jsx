import React from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";
import {DocsData} from "../../data/data"
import CodeBlock from "./CodeBlock"
const Docs = () => {
  return (
    <div className="bg-gray-800 text-white">
      <Navbar />
      <div className="grid grid-cols-1 mx-auto container space-y-4 px-6">
        {DocsData.map((demo, index)=> {
          return (
            <CodeBlock 
              key={index}
              method={demo.method}
              methodDescription={demo.methodDescription}
              url={demo.url}
              result={demo.result}
              note={demo.note}
            />
          )
        })}
      </div>
      <Footer />
    </div>
  );
};

export default Docs;
