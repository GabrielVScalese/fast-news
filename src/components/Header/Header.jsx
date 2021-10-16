import React from "react";

import "./Header.css";
import { HiFire } from "react-icons/hi";

const Header = () => {
  return (
    <div className="header-container">
      <h1>Fast News</h1>
      <HiFire className="header-icon" />
    </div>
  );
};

export default Header;
