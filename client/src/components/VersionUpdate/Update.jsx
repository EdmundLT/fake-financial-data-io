import React from "react";
import Changelog from "./Changelog";
import { changeLogData } from "../../data/data";
const Update = () => {
  return (
    <div className="container mx-auto p-2 text-center space-y-2 pb-4">
      <div className="overflow-x-auto">
        <table className="table w-3/4 mx-auto">
          <thead>
            <tr>
              <th>Version</th>
              <th>Date</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {changeLogData
              .slice(0)
              .reverse()
              .map((log) => {
                return (
                  <tr>
                    <th>{log.version}</th>
                    <td>{log.date}</td>
                    <td>{log.content}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Update;
