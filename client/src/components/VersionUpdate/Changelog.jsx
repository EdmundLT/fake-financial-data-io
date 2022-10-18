import React from "react";

const Changelog = ({ version, date, content }) => {
  return (
    <div className="md:grid md:grid-cols-4 border-b-2 border-t-2 py-2">
      <tr>
        <th>{version}</th>
        <td>{date}</td>
        <td>{content}</td>
      </tr>
    </div>
  );
};

export default Changelog;
