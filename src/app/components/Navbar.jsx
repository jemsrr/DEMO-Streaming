import React from "react";
import Link from "next/link";
import { FaBars } from "react-icons/fa";

const Navbar = async () => {
  return (
    <div>
      <nav className="flex justify-between items-center py-4 px-[10%] bg-blue-500">
        <h1 className="text-2xl font-semibold text-white md:text-4xl">
          DEMO Streaming
        </h1>
        <div className=" hidden md:flex  justify-end gap-6">
          <button className="text-xs font-normal text-white">Log in</button>
          <button className="bg-zinc-900 text-xs font-normal text-white px-4 py-2">
            Start your free trial.
          </button>
        </div>
        <div className=" md:hidden">
          <FaBars />
        </div>
      </nav>
      
    </div>
  );
};

export default Navbar;
