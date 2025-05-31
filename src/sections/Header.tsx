import React from "react";

export const Header = () => {
  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-100">
      <nav className="flex gap-1 p-0.5 border rounded-full bg-gray-900/10 border-gray-900/15 dark:bg-white/10 dark:border-white/15 backdrop-blur-xs">
        <a href="#" className="nav-items">
          Home
        </a>
        <a href="#" className="nav-items">
          Project
        </a>
        <a href="#" className="nav-items">
          About
        </a>
        <a
          href="#"
          className="nav-items text-white bg-gray-900 dark:text-gray-900 dark:bg-white"
        >
          Contact
        </a>
      </nav>
    </div>
  );
};
