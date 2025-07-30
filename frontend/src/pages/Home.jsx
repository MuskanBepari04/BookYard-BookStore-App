import { useContext, useEffect } from "react";
import axios from "axios";
import BookContext from "../context/BookContext";
import HeroSection from "../component/homeComponents/HeroSection";

const Home = () => {
  const genres = [
    "self help",
    "fiction",
    "non fiction",
    "Biography",
    "comic",
    "mystry-thriller",
    "romance",
    "poetry",
  ];

  const { books, setBooks, loading, setLoading } = useContext(BookContext);

  const apiUrl = import.meta.env.VITE_API_URL;
  useEffect(() => {
    setLoading(true);
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axios
      .get(`${apiUrl}/books`, config)
      .then((response) => {
        setBooks(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="w-full flex flex-col items-center">
      <HeroSection />
    </div>
  );
};

export default Home;
