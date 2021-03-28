import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark text-white mb-5">
      <div>
        <h1>Employee Directory</h1>
      </div>
    </nav>
  );
}

export default Navbar;
