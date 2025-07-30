import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import BookContext from "../context/BookContext";
import axios from "axios";
import Navbar from "../component/Navbar";

const UpdateBook = () => {
  const apiUrl = import.meta.env.VITE_API_URL;
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
  const { id } = useParams();
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    axios
      .get(`${apiUrl}/books/${id}`, config)
      .then((response) => {
        setLoading(false);
        setTitle(response.data.title);
        setAuthor(response.data.author);
        setPublishYear(response.data.publishYear);
        setImage(response.data.image);
        setGenre(response.data.genre);
        setDescription(response.data.description);
        setQuantity(response.data.quantity);
        setPrice(response.data.price);
      })
      .catch((error) => {
        alert("Add data Properly");
        console.log(error);
      });
  }, [id]);

  const handleUpdateClick = (e) => {
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
    axios
      .put(`${apiUrl}/books/${id}`, data, config)
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
          Update Book
        </h2>

        <form
          onSubmit={handleUpdateClick}
          className="w-full max-w-2xl bg-white rounded-2xl p-8 shadow-xl border border-gray-200 space-y-6"
        >
          <div>
            <label className="block text-lg font-medium">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-2 w-full border rounded-md px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-lg font-medium">Author</label>
            <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="mt-2 w-full border rounded-md px-3 py-2"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-lg font-medium">Publish Year</label>
              <input
                type="text"
                value={publishYear}
                onChange={(e) => setPublishYear(e.target.value)}
                className="mt-2 w-full border rounded-md px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-lg font-medium">Genre</label>
              <select
                value={genre}
                onChange={(e) => setGenre(e.target.value)}
                className="mt-2 w-full border rounded-md px-3 py-2"
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
            <label className="block text-lg font-medium">Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
              className="mt-2 w-full border rounded-md px-3 py-2"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-lg font-medium">Quantity</label>
              <input
                type="text"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                className="mt-2 w-full border rounded-md px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-lg font-medium">Price</label>
              <input
                type="text"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="mt-2 w-full border rounded-md px-3 py-2"
              />
            </div>
          </div>

          <div>
            <label className="block text-lg font-medium">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows="4"
              className="mt-2 w-full border rounded-md px-3 py-2 resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg text-lg"
          >
            Update Book
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateBook;
