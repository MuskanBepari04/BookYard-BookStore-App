import axios from "axios";
import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BookContext from "../context/BookContext";

const DeleteBook = () => {
  const { id } = useParams();
  const { setLoading } = useContext(BookContext);
  const navigate = useNavigate();
  const apiUrl = import.meta.env.VITE_API_URL;

  const handleDeleteBook = () => {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axios
      .delete(`${apiUrl}/books/${id}`, config)
      .then(() => {
        setLoading(false);
        navigate("/books");
      })
      .catch((error) => {
        alert("Error Deleting");
        console.log(error);
      });
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-red-50 px-4">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full text-center border border-red-300">
        <h2 className="text-2xl font-bold text-red-600 mb-4">Confirm Delete</h2>
        <p className="text-gray-700 mb-6">
          Are you sure you want to delete this book? This action cannot be
          undone.
        </p>

        <div className="flex justify-center gap-4">
          <button
            onClick={handleDeleteBook}
            className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-md font-medium transition duration-200"
          >
            Yes, Delete
          </button>

          <button
            onClick={() => navigate("/books")}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-6 py-2 rounded-md font-medium transition duration-200"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteBook;
