import React from "react";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl" href="/">
          Fake Financial Data&nbsp;
          <span className="text-xs px-1 border border-white rounded-full hover:bg-green-500 hover:text-black">
            beta
          </span>
        </a>
      </div>
      <div className="flex-none px-4">
        <ul className="flex space-x-5">
          <li>
            <a href="/docs/">
              <p>Guides</p>
            </a>
          </li>
          <li tabIndex={0}>
            <a href="https://github.com/EdmundLT/fake-financial-data-io">
              <p>Github</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
