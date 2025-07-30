import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const apiUrl = import.meta.env.VITE_API_URL;
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    storeName: "",
    securityQuestion: "",
    securityAnswer: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${apiUrl}/auth/signup`, form);
      navigate("/books");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center relative"
      style={{ backgroundImage: "url('../images/your-image.jpg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>

      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <form
          onSubmit={handleSubmit}
          className=" bg-opacity-90 border border-white shadow-md rounded-[70px] p-8 py-10 w-full max-w-md space-y-4"
        >
          <h2 className="text-3xl font-bold text-center text-white mb-6">
            Sign Up
          </h2>

          <input
            type="text"
            placeholder="Name"
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full px-4 py-2 border rounded-md focus:outline-none text-white  focus:ring-2 focus:ring-purple-400"
          />

          <input
            type="text"
            placeholder="Phone"
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="w-full px-4 py-2 border rounded-md focus:outline-none text-white  focus:ring-2 focus:ring-purple-400"
          />

          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full px-4 py-2 border rounded-md focus:outline-none text-white  focus:ring-2 focus:ring-purple-400"
          />

          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            className="w-full px-4 py-2 border rounded-md focus:outline-none text-white  focus:ring-2 focus:ring-purple-400"
          />

          <input
            type="text"
            placeholder="Store Name"
            onChange={(e) => setForm({ ...form, storeName: e.target.value })}
            className="w-full px-4 py-2 border rounded-md focus:outline-none text-white  focus:ring-2 focus:ring-purple-400"
          />

          <input
            type="text"
            placeholder="Security Question"
            onChange={(e) =>
              setForm({ ...form, securityQuestion: e.target.value })
            }
            className="w-full px-4 py-2 border rounded-md focus:outline-none text-white focus:ring-2 focus:ring-purple-400"
          />

          <input
            type="text"
            placeholder="Security Answer"
            onChange={(e) =>
              setForm({ ...form, securityAnswer: e.target.value })
            }
            className="w-full px-4 py-2 border rounded-md focus:outline-none text-white focus:ring-2 focus:ring-purple-400"
          />

          <button
            type="submit"
            className="w-full bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-4 rounded-md transition duration-200 cursor-pointer"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
