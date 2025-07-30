import axios from "axios";
import { useContext, useState } from "react";
import BookContext from "../context/BookContext";
import { useNavigate } from "react-router-dom";
import Navbar from "../component/Navbar";

const AddBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [image, setImage] = useState(null);
  const [genre, setGenre] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);

  const { setLoading } = useContext(BookContext);
  const navigate = useNavigate();
  const apiUrl = import.meta.env.VITE_API_URL;

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleAddClick = async (e) => {
    e.preventDefault();
    const data = {
      title,
      author,
      publishYear,
      genre,
      description,
      image,
      quantity,
      price,
    };
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    };
    await axios
      .post(`${apiUrl}/books`, data, config)
      .then((response) => {
        setLoading(false);
        navigate("/books");
      })
      .catch((error) => {
        alert("Add data Properly");
        console.log(error);
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f7efe6] to-white">
      <Navbar />
      <div className="flex flex-col items-center px-4 py-10">
        <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">
          Add a New Book
        </h2>

        <form
          className="w-full max-w-2xl bg-white rounded-2xl p-8 shadow-xl border border-gray-200 space-y-6"
          onSubmit={handleAddClick}
        >
          <div>
            <label
              htmlFor="title"
              className="block text-lg font-medium text-gray-700"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              placeholder="Book Name"
              onChange={(e) => setTitle(e.target.value)}
              className="mt-2 w-full border border-gray-300 rounded-md px-3 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="author"
              className="block text-lg font-medium text-gray-700"
            >
              Author
            </label>
            <input
              type="text"
              id="author"
              placeholder="Author Name"
              onChange={(e) => setAuthor(e.target.value)}
              className="mt-2 w-full border border-gray-300 rounded-md px-3 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="publishYear"
                className="block text-lg font-medium text-gray-700"
              >
                Publish Year
              </label>
              <input
                type="text"
                id="publishYear"
                placeholder="Publish Year"
                onChange={(e) => setPublishYear(e.target.value)}
                className="mt-2 w-full border border-gray-300 rounded-md px-3 py-2"
              />
            </div>
            <div>
              <label
                htmlFor="genre"
                className="block text-lg font-medium text-gray-700"
              >
                Genre
              </label>
              <select
                id="genre"
                value={genre}
                onChange={(e) => setGenre(e.target.value)}
                className="mt-2 w-full border border-gray-300 rounded-md px-3 py-2"
              >
                <option value="">Select Genre</option>
                <option value="self help">Self Help</option>
                <option value="comic">Comic</option>
                <option value="mystry-thriller">Mystery-Thriller</option>
                <option value="romance">Romance</option>
                <option value="fiction">Fiction</option>
                <option value="non fiction">Non-Fiction</option>
                <option value="Biography">Biography</option>
                <option value="poetry">Poetry</option>
              </select>
            </div>
          </div>

          <div>
            <label
              htmlFor="image"
              className="block text-lg font-medium text-gray-700"
            >
              Image
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="mt-2 w-full border border-gray-300 rounded-md px-3 py-2 file:cursor-pointer"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="quantity"
                className="block text-lg font-medium text-gray-700"
              >
                Quantity
              </label>
              <input
                type="text"
                id="quantity"
                placeholder="Enter Quantity"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                className="mt-2 w-full border border-gray-300 rounded-md px-3 py-2"
              />
            </div>
            <div>
              <label
                htmlFor="price"
                className="block text-lg font-medium text-gray-700"
              >
                Price
              </label>
              <input
                type="text"
                id="price"
                placeholder="Enter Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="mt-2 w-full border border-gray-300 rounded-md px-3 py-2"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="description"
              className="block text-lg font-medium text-gray-700"
            >
              Description
            </label>
            <textarea
              id="description"
              placeholder="Enter Book Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows="4"
              className="mt-2 w-full border border-gray-300 rounded-md px-3 py-2 resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white text-lg font-medium py-2 rounded-lg transition-all duration-300"
          >
            Add Book
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBook;
