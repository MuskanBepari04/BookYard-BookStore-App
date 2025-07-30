import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { FaAnglesRight } from "react-icons/fa6";
import { MdOutlineDelete } from "react-icons/md";
import { MdOutlineAddBox } from "react-icons/md";
import { BiShow } from "react-icons/bi";
import BookModal from "./BookModal";
const ShowBookByGenre = () => {
  const [book, setBook] = useState([]);
  const [showModal, setShowModal] = useState(false);
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
  const [booksByGenre, setBooksByGenre] = useState({});
  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const fetchBooks = async () => {
      const result = {};
      for (const genre of genres) {
        try {
          const response = await axios.get(
            `${apiUrl}/books/genre/${genre}`,
            config
          );
          result[genre] = response.data.slice(0, 4);
        } catch (error) {
          console.error(`Error fetching genre ${genre}:`, error);
        }
      }
      setBooksByGenre(result);
    };

    fetchBooks();
  }, []);

  return (
    <>
      <div className="flex justify-between mb-8">
        <h2 className="font-bold text-2xl times2">Avaliable Books : </h2>
        <div className="flex justify-around">
          <Link
            to={`/books/add`}
            className="shadow-2xl flex gap-2 justify-center items-center bg-[#E07A5F] hover:bg-[#81B29A] cursor-pointer p-2.5 text-lg rounded-xl hover:text-white"
          >
            <MdOutlineAddBox className="text-2xl" />
            Add New Book
          </Link>
        </div>
      </div>
      {genres.map((genre) => (
        <div key={genre} className="mb-10">
          <div className="flex justify-between mb-4">
            <h2 className="font-bold times text-xl">{genre}:</h2>
            <Link
              to={`/books/genre/${genre}`}
              className="flex items-center text-lg gap-1 hover:underline hover:text-blue-800"
            >
              See More
              <FaAnglesRight className="text-lg" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-9 gap-4">
            {(booksByGenre[genre] || []).map((book) => (
              <div
                key={book._id}
                className="flex flex-col justify-self-center justify-center items-center w-80 lg:w-[300px] p-5 text-center rounded-xl gap-2 py-4 shadow-2xl bg-white"
              >
                <Link to={`/books/title/${book.title}`}>
                  <img
                    src={`${apiUrl}/uploads/${book.image}`}
                    alt={book.title}
                    className="w-36 h-40 transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 shadow-2xl"
                  />
                </Link>
                <div className="times text-lg font-semibold">{book.title}</div>
                <div className="times2">By {book.author}</div>
                <div className="flex gap-8 mt-2">
                  <BiShow
                    className="text-3xl hover:text-blue-800 text-black cursor-pointer"
                    onClick={() => setShowModal(true)}
                  />
                  <Link to={`/books/title/${book.title}`}>
                    <BsInfoCircle className="text-2xl hover:text-blue-800" />
                  </Link>
                  <Link to={`/books/update/${book._id}`}>
                    <AiOutlineEdit className="text-2xl hover:text-blue-800" />
                  </Link>
                  <Link to={`/books/delete/${book._id}`}>
                    <MdOutlineDelete className="text-2xl hover:text-blue-800" />
                  </Link>
                </div>
                {showModal && (
                  <BookModal book={book} onClose={() => setShowModal(false)} />
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default ShowBookByGenre;
