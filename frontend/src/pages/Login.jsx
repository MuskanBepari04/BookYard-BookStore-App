import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${apiUrl}/auth/login`, form);
      localStorage.setItem("token", response.data.token);
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
          className="border border-white bg-opacity-90 shadow-lg rounded-[50px] p-8 py-12 w-full  max-w-md space-y-5"
        >
          <h2 className="text-3xl font-bold text-center text-white mb-6">
            Login
          </h2>

          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full text-white px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
          />

          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            className="w-full text-white px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
          />

          <div className="text-right">
            <Link
              to="/auth/forgot-password"
              className=" text-blue-400 hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full cursor-pointer bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-4 rounded-md transition duration-200"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
