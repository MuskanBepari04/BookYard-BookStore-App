import HeroSection from "../component/homeComponents/HeroSection";
import Footer from "../component/Footer";
import About from "../component/About";
import Contact from "../component/Contact";

const Home = () => {

  return (
    <div className="w-full ">
      <HeroSection />
    <div className="bg-gradient-to-b from-[#e6d6be] to-white"> 
        <About/>
      <Contact/>
    </div>
      <Footer/>
    </div>
  );
};

export default Home;
