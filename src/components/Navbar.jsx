import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-navcoler ">
      <ul className="flex justify-center py-4 text-white">
        <li className="px-4 hover:text-teal-500">
          <Link to="/">Home</Link>
        </li>
        <li className="px-4 hover:text-teal-500">
          <Link to="/background">Background</Link>
        </li>
        <li className="px-4 hover:text-teal-500">
          <Link to="/image">Image</Link>
        </li>
        <li className="px-4 hover:text-teal-500">
          <Link to="/quote">Quote Generator</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
