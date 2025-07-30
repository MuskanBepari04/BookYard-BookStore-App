import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const apiUrl = import.meta.env.VITE_API_URL;
  const [form, setForm] = useState({
    email: "",
    securityAnswer: "",
    newPassword: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(`${apiUrl}/auth/forgot-password`, form);
      alert("Succesfull");
      navigate("/books");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('../images/your-image.jpg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className=" relative z-10 border border-white bg-opacity-90 p-8 rounded-md shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-semibold text-center mb-6 text-white">
          Reset Password
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Email"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full px-4 py-2 border text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
          />

          <input
            type="text"
            placeholder="Security Answer"
            onChange={(e) =>
              setForm({ ...form, securityAnswer: e.target.value })
            }
            className="w-full px-4 py-2 border text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
          />

          <input
            type="text"
            placeholder="New Password"
            onChange={(e) => setForm({ ...form, newPassword: e.target.value })}
            className="w-full px-4 py-2 border text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
          />

          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold mt-4 py-2 px-4 cursor-pointer  rounded-md transition duration-200"
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
