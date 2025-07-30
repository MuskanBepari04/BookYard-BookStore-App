import { GrMenu } from "react-icons/gr";
import { IoSearch } from "react-icons/io5";
import "../index.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [searchInput, setSearchInput] = useState("");

  return (
    <div className="p-2 text-xl mb-1.5 flex justify-between px-8 lg:px-2 lg:justify-around items-center">
      <div className="flex content-center items-center gap-3 text-lg lg:text-2xl text-[#E07A5F] font-bold">
        <img src="..\images\logo.png" alt="lo" className="h-12 w-12" />
        BookYard
      </div>
      <div className="hidden lg:flex  justify-between gap-24">
        <Link
          to={"/"}
          className="hover:underline cursor-pointer hover:text-[#121063]"
        >
          Home
        </Link>
        <Link to={"/about"} className="hover:underline hover:text-[#121063]">
          About Us
        </Link>
        <Link to={"/contact"} className="hover:underline hover:text-[#121063]">
          Contact Us
        </Link>
      </div>
      <div className="flex justify-between items-center gap-8  md:gap-16">
        <div className=" border-2 text-white items-center gap-3 p-1.5 px-4 rounded-3xl hidden md:flex">
          <input
            type="text"
            placeholder="Search Any Book"
            className="bg-transparent outline-none text-white"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <Link to={`/books/title/${searchInput}`}>
            <IoSearch className="text-3xl" />
          </Link>
        </div>

        <GrMenu className="lg:hidden text-xl lg:text-2xl" />
      </div>
    </div>
  );
};

export default Navbar;
