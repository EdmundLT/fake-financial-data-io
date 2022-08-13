import React from "react";
import { DocsData } from "../data/data";
const Route = () => {
  return (
    <div className="container mx-auto px-6 text-left space-y-2 pb-4">
      <p className="text-2xl font-semibold pt-8 pb-4">Routes</p>
      <ul className="space-y-2">
        {DocsData.map((route, index) => {
          return (
            <div>
              <li className="flex pl-6 space-x-12" key={index}>
                <p className="font-bold">{route.method}</p>
                <a href={route.url} className="text-blue-500 underline">
                  {route.shortUrl}
                </a>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default Route;
