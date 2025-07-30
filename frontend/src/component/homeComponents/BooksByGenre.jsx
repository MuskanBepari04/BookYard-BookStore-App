import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";
import { BiShow } from "react-icons/bi";
import BookModal from "./BookModal";
import Navbar from "../Navbar";

const BooksByGenre = () => {
  const { genre } = useParams();
  const [book, setBook] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const apiUrl = import.meta.env.VITE_API_URL;
  useEffect(() => {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axios
      .get(`${apiUrl}/books/genre/${genre}`, config)
      .then((response) => {
        setBook(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [genre]);

  return (
    <>
      <Navbar />
      <div className="mt-10 px-4 mb-4">
        <h1 className="text-2xl font-semibold mb-10">
          Books in Genre: {genre}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-9 gap-4">
          {book.map((book) => (
            <div
              key={book._id}
              className="flex flex-col justify-self-center justify-center items-center w-80 lg:w-[350px] p-5 text-center rounded-xl gap-2 py-4 shadow-2xl bg-white"
            >
              <Link to={`/books/title/${book.title}`}>
                <img
                  src={`${apiUrl}/uploads/${book.image}`}
                  alt={book.title}
                  className=" w-36 h-40 hover:scale-110 transition"
                />
              </Link>
              <div className="font-semibold">{book.title}</div>
              <div className="text-gray-600">By {book.author}</div>
              <div className="flex gap-6 mt-2">
                <BiShow
                  className="text-3xl hover:text-blue-800 text-black cursor-pointer"
                  onClick={() => {
                    setSelectedBook(book);
                    setShowModal(true);
                  }}
                />
                <Link to={`/books/${book._id}`}>
                  <BsInfoCircle className="text-2xl hover:text-blue-800" />
                </Link>
                <Link to={`/books/update/${book._id}`}>
                  <AiOutlineEdit className="text-2xl hover:text-blue-800" />
                </Link>
                <Link to={`/books/delete/${book._id}`}>
                  <MdOutlineDelete className="text-2xl hover:text-blue-800" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {showModal && selectedBook && (
          <BookModal book={selectedBook} onClose={() => setShowModal(false)} />
        )}
      </div>
    </>
  );
};

export default BooksByGenre;
