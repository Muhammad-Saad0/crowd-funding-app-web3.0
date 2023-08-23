import React from "react";
import { TbBusinessplan } from "react-icons/tb";

const Navbar = () => {
  return (
    <nav
      className="flex items-center w-full justify-between p-5 bg-white
    shadow-lg fixed top-0 left-0"
    >
      <a
        href="/"
        className="flex flex-row items-center space-x-1 text-xl
      font-bold"
      >
        <span>Genesis</span>
        <TbBusinessplan />
      </a>
      <div>
        <button
          className="bg-blue-600 px-3 py-2 leading-tight text-white rounded-full 
        font-light hover:bg-blue-700"
        >
          Connect Wallet
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
