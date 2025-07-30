import axios from "axios";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Navbar";

const ShowBookByName = () => {
  const [book, setBook] = useState({});
  const { title } = useParams();
  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axios
      .get(`${apiUrl}/books/title/${title}`, config)
      .then((response) => {
        setBook(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="min-h-[91vh] flex flex-col justify-between  bg-gradient-to-b from-[#f7efe6] to-white">
      <Navbar />
      <div className=" mx-auto w-[85%] md:w-[70%] lg:w-[50%] mt-8 mb-4 p-6 bg-white shadow-2xl rounded-xl flex flex-col md:flex-row items-center gap-8">
        <div className="w-48 h-[230px] flex-shrink-0">
          <img
            src={`${apiUrl}/uploads/${book.image}`}
            alt={book.title}
            className="w-full h-full bg-cover rounded-lg border"
          />
        </div>

        <div className="flex-1 space-y-4">
          <h1 className="text-3xl font-bold text-gray-800">{book.title}</h1>
          <p className="text-lg text-gray-600">
            <span className="font-semibold text-gray-700">Author:</span>{" "}
            {book.author}
          </p>
          <p className="text-lg text-gray-600">
            <span className="font-semibold text-gray-700">Published:</span>{" "}
            {book.publishYear}
          </p>
          <p className="text-lg text-gray-600">
            <span className="font-semibold text-gray-700">Genre:</span>{" "}
            {book.genre}
          </p>
          <p className="text-lg text-gray-600">
            <span className="font-semibold text-gray-700">Quantity:</span>{" "}
            {book.quantity}
          </p>
          <p className="text-lg text-gray-600">
            <span className="font-semibold text-gray-700">Price:</span> ₹
            {book.price}
          </p>
          <p className="text-gray-700 leading-relaxed">
            <span className="font-semibold">Description:</span>{" "}
            {book.description}
          </p>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default ShowBookByName;
