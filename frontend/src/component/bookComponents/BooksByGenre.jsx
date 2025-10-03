import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { MdOutlineAddBox } from "react-icons/md";


const BooksByGenre = () => {
  const { genre } = useParams();
  const [book, setBook] = useState([]);
  const [searchInput, setSearchInput] = useState("");

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
      <div className=" px-8 bg-gradient-to-b from-[#e6d6be] to-white">
        <div className="flex justify-between mb-8 pt-4">
          <h2 className="font-bold text-2xl times2">Avaliable Books : </h2>
          <div className=" border-2 items-center gap-3 p-1.5 px-4 rounded-3xl hidden md:flex">
            <input
              type="text"
              placeholder="Search Any Book"
              className="bg-transparent outline-none"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <Link to={`/books/title/${searchInput}`}>
              <IoSearch className="text-3xl" />
            </Link>
          </div>
          <div className="flex justify-around">
            <Link
              to={`/books/add`}
              className="shadow-2xl flex gap-2 justify-center items-center bg-[#E07A5F] hover:bg-[#81B29A] cursor-pointer px-3.5 p-2.5 text-lg rounded-4xl hover:text-white"
            >
              <MdOutlineAddBox className="text-2xl" />
              Add Book
            </Link>
          </div>
        </div>
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
      </div>
    </>
  );
};

export default BooksByGenre;
