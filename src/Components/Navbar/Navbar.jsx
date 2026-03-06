import React from "react";
// ipmort Images start
import logo from "../../assets/logo.png";
import dollar from "../../assets/dollar-1.png";

const Navbar = ({ availableBalance }) => {
  return (
    <div className="navbar max-w-300 mx-auto">
      <div className="flex-1">
        <a className="text-xl">
          <img className="w-15 h-15" src={logo} alt="Dream 11" />
        </a>
      </div>
      <div className="flex">
        <span>{availableBalance}</span>
        <span className="flex ms-1 items-center">
          Coin <img className="ms-1" src={dollar} alt="Dollar" />
        </span>
      </div>
    </div>
  );
};

export default Navbar;
