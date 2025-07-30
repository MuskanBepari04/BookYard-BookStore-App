import Navbar from "../Navbar";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div
      className="bg-cover w-full bg-center min-h-screen  h-[75vh] lg:h-[80vh] xl:h-[95vh] flex flex-col gap-20 lg:gap-15"
      style={{
        backgroundImage: "url('../images/hero-img.png')",
      }}
    >
    
      <Navbar />
      <div className="borde w-fit p-9 flex flex-col gap-2 lg:ml-40 lg:mt-14 xl:mt-14 md:mt-28 md:ml-20">
        <h1 className="text-[#E07A5F] font-bold text-4xl lg:text-5xl 2xl:text-6xl">
          BookYard
        </h1>
        <h3 className="text-[#81B29A] text-2xl">
          Step into your personal library.
        </h3>
        <div className="flex items-center gap-4 mt-4">
          <Link
            to={"/auth/login"}
            className="hover:bg-[#81B29A] cursor-pointer text-white bg-[#E07A5F] text-center p-2 text-sm md:text-lg md:px-3 rounded-lg w-[40%]"
          >
            Login
          </Link>
          <Link
            to={"/auth/signup"}
            className="hover:bg-[#81B29A] cursor-pointer text-white bg-[#E07A5F] text-center p-2 text-xs md:text-lg md:px-3 rounded-lg  w-[40%]"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
