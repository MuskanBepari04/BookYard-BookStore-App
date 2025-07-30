import Navbar from "./Navbar";

const About = () => {
  return (
    <div className="bg-gradient-to-b from-[#e6d6be] to-white min-h-screen">
      <Navbar />
      <div className="max-w-5xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-center text-green-800 mb-8">
          About BookYard 📚
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          <span className="font-semibold">BookYard</span> is a smart and simple{" "}
          <span className="font-semibold">Book Management System</span> built
          for organizing and maintaining your personal or institutional library.
          Whether you're managing a small home library, a school collection, or
          a community library, BookYard helps you track and manage books
          efficiently.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          It allows users to easily{" "}
          <span className="font-semibold">
            add, update, delete, and view books
          </span>{" "}
          based on title, author, genre, or publication year. BookYard provides
          a clean and intuitive interface to keep your book inventory organized
          and accessible at all times.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          This application is developed using the{" "}
          <span className="font-semibold">MERN stack</span> (MongoDB,
          Express.js, React, Node.js) with a strong focus on performance and
          responsiveness. BookYard is perfect for students, librarians, or
          anyone who wants a simple digital system for managing book data.
        </p>

        <div className="mt-10 text-center">
          <h2 className="text-2xl font-semibold text-green-700 mb-2">
            ✨ Features:
          </h2>
          <ul className="text-left max-w-lg mx-auto text-gray-600 list-disc list-inside space-y-2">
            <li>Add, update, or delete books as needed</li>
            <li>Dynamic "See More" pages per genre</li>
            <li>
              Add new books with details like title, author, genre,
              year,quantity, price, and description{" "}
            </li>
            <li>Search and filter books by title or genre</li>
            <li>View full details of any book including cover image</li>
            <li>Update or delete book entries when needed</li>
            <li>Responsive and easy-to-use interface for all devices</li>
          </ul>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 italic">Made with ❤️ by Muskan Bepari</p>
        </div>
      </div>
    </div>
  );
};

export default About;
