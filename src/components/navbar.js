import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <Link to={'/'}>
        <h1>ME</h1>
      </Link>
    </div>
  );
}

export default Navbar;
