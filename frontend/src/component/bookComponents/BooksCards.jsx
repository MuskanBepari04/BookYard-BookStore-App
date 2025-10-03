import { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";

const BooksCards = ({ books }) => {

  const apiUrl = import.meta.env.VITE_API_URL;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-9 gap-4">
      {books.map((book) => (
        <div
          key={book._id}
          className="flex flex-col justify-self-center justify-center items-center w-80 lg:w-[300px] p-5 text-center rounded-xl gap-2 py-4 shadow-2xl bg-white"
        >
          <Link to={`/books/title/${book.title}`}>
            <div className="flex justify-center items-center mt-4 ">
              <img
                src={`${apiUrl}/uploads/${book.image}`}
                alt={book.title}
                className=" w-36 h-40 transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 shadow-2xl"
              />
            </div>
          </Link>
          <div className="times text-lg font-semibold">{book.title}</div>
          <div className="times2">By {book.author}</div>
          <div className="flex gap-8 mt-2">
           
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
  );
};

export default BooksCards;
