import { GrMenu } from "react-icons/gr";
import "../index.css";
import { Link } from "react-router-dom";

const Navbar = () => {

  return (
    <div className="p-2 text-xl mb-1.5 flex justify-between px-8 lg:px-2 lg:justify-around items-center">
      <div className="flex content-center items-center gap-3 text-lg lg:text-2xl text-[#E07A5F] font-bold">
        <img src="..\images\logo.png" alt="lo" className="h-12 w-12" />
        BookYard
      </div>
      <div className="hidden lg:flex  justify-between gap-20">
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

        <GrMenu className="lg:hidden text-xl lg:text-2xl" />
      </div>
    </div>
  );
};

export default Navbar;
