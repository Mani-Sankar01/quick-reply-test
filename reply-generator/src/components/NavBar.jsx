import React from "react";
import viteLogo from "/vite.svg";
const NavBar = () => {
  return (
    <nav className="border-b md:px-8">
      <div className="flex items-center p-4">
        <img src={viteLogo} alt="Logo" className="h-8" />
        <span className="ml-2 font-bold">Quick Reply</span>
      </div>
    </nav>
  );
};

export default NavBar;
