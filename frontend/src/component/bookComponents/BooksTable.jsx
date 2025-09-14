import axios from "axios";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";
import { useContext, useEffect } from "react";
import { MdOutlineAddBox } from "react-icons/md";
import BookContext from "../../context/BookContext";

const BooksTable = () => {
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
    <div>
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
      <table className="m-5 p-5 text-xl">
        <thead className="font-bold">
          <tr className="m-2 border-2 border-black">
            <td className="py-2 border-2 border-black">Index</td>
            <td className="py-2 border-2 border-black  text-center px-6 my-2">
              Title
            </td>
            <td className="py-2 border-2 border-black  text-center px-6 my-2">
              Author
            </td>
            <td className="py-2 border-2 border-black text-center px-6 my-2">
              Publish Year
            </td>
            <td className="py-2 border-2 border-black text-center px-6 my-2">
              Operations
            </td>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => (
            <tr key={book._id} className="border-2 border-black">
              <td className="py-2 border-2 border-black  text-center px-6 my-2">
                {index + 1}
              </td>
              <td className="py-2 border-2 border-black  text-center px-6 my-2">
                {book.title}
              </td>
              <td className="py-2 border-2 border-black  text-center px-6 my-2">
                {book.author}
              </td>
              <td className="flex justify-center items-center">
                <img
                  src={`${apiUrl}/uploads/${book.image}`}
                  alt={book.title}
                  className=" w-36 h-24"
                />
              </td>
              <td className="py-2 border-2 border-black  text-center px-6 my-2">
                {book.publishYear}
              </td>
              <td className="border-2 border-black py-2 text-center px-6 my-2 ">
                <div className="flex gap-6">
                  <Link to={`/books/${book._id}`}>
                    <BsInfoCircle className="text-2xl" />
                  </Link>
                  <Link to={`/books/update/${book._id}`}>
                    <AiOutlineEdit className="text-2xl" />
                  </Link>
                  <Link to={`/books/delete/${book._id}`}>
                    <MdOutlineDelete className="text-2xl" />
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BooksTable;
