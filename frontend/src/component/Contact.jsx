import Navbar from "./Navbar";

const Contact = () => {
  return (
    <div className="min-h-screen  bg-gradient-to-b from-[#f7efe6] to-white">
      <Navbar />
      <div className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-center text-green-800 mb-10">
          Contact Us ✉️
        </h1>

        <p className="text-center text-gray-700 mb-10">
          Have any questions or feedback about{" "}
          <span className="font-semibold">BookYard</span>? We'd love to hear
          from you! Fill out the form below and we’ll get back to you shortly.
        </p>

        <form className="bg-white shadow-md rounded-lg p-8 space-y-6">
          <div>
            <label
              className="block text-gray-700 font-semibold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your name"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div>
            <label
              className="block text-gray-700 font-semibold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Your email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div>
            <label
              className="block text-gray-700 font-semibold mb-2"
              htmlFor="subject"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              placeholder="Subject"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div>
            <label
              className="block text-gray-700 font-semibold mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              id="message"
              rows="5"
              placeholder="Write your message here..."
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition duration-300"
          >
            Send Message
          </button>
        </form>

        <div className="mt-10 text-center text-gray-600">
          <p>
            Or email us directly at{" "}
            <span className="text-green-700 font-semibold">
              bookyard.support@gmail.com
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
