import React from "react";

const Header = () => (
  <header className="p-4 flex justify-between items-center bg-transparent">
    <h1 className="text-2xl font-bold text-cyan-400">Erqy.codes</h1>
    <nav>
      <a href="#contact" className="px-4 py-2 border border-cyan-400 rounded hover:bg-cyan-400 hover:text-white">
        Contact me
      </a>
    </nav>
  </header>
);

export default Header;
