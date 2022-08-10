import React from "react";
import Changelog from "./Changelog";
import { changeLogData } from "../../data/data";
const Update = () => {
  return (
    <div className="container mx-auto p-2 text-center space-y-2 pb-4">
      <p className="text-2xl font-semibold">Update Logs</p>
      <div className="hidden md:grid md:grid-cols-4">
        <p className="md:col-span-1">Version</p>
        <p className="md:col-span-3">Contents</p>
      </div>
      {changeLogData
        .slice(0)
        .reverse()
        .map((log) => {
          return (
            <Changelog
              key={log.version}
              version={log.version}
              date={log.date}
              content={log.content}
              
            />
          );
        })}
    </div>
  );
};

export default Update;
