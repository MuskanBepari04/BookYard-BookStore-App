
import { AiOutlineClose } from 'react-icons/ai';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle } from 'react-icons/bi'

const BookModal = ({ book, onClose }) => {
  return (
     <div
      className="fixed inset-0 z-50 bg-black bg-opacity-70 flex justify-center items-center px-4"
      onClick={onClose}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className="bg-white rounded-2xl p-6 w-full max-w-2xl shadow-xl relative"
      >
        <AiOutlineClose
          className="absolute top-4 right-4 text-2xl  hover:text-red-500 cursor-pointer"
          onClick={onClose}
        />

        {/* Book Info */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Book Image */}
          <div className="flex justify-center items-center md:w-1/3">
            <img
              src={`http://localhost:5555/uploads/${book.image}`}
              alt={book.title}
              className="w-40 h-52 object-cover rounded-lg shadow-md"
            />
          </div>

          {/* Book Details */}
          <div className="md:w-2/3 space-y-3">
            <div className="flex items-start gap-2 text-lg font-semibold">
              <PiBookOpenTextLight className="text-blue-500 text-2xl" />
              {book.title}
            </div>

            <div className="flex items-center gap-2 text-gray-700">
              <BiUserCircle className="text-green-500 text-xl" />
              {book.author}
            </div>

          <div className="flex items-center gap-2">
              <p className="text-sm text-gray-600">
              <span className="font-semibold">Genre:</span> {book.genre}
            </p>
          </div>

           <div className="flex items-center gap-2">
             <p className="text-sm text-gray-600">
              <span className="font-semibold">Published:</span> {book.publishYear}
            </p>
           </div>

          <div className="flex items-center gap-2">
              <p className="text-sm text-gray-600">
              <span className="font-semibold">Quantity:</span> {book.quantity}
            </p>
          </div>

            <div className="flex items-center gap-2">
              <p className="text-sm text-gray-600">
              <span className="font-semibold">Price:</span> ₹{book.price}
            </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookModal;
