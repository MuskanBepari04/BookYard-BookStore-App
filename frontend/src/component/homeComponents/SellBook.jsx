import { useState } from "react"
import { AiOutlineClose } from 'react-icons/ai';
import axios from 'axios';


import { useNavigate } from "react-router-dom";
const SellBook = ({book, onClose}) => {

    const[quantity , setQuantity]=useState('')
    const navigate=useNavigate();
     const apiUrl = import.meta.env.VITE_API_URL;
    const handleSell=()=>{
        if (!quantity || isNaN(quantity) || Number(quantity) <= 0) {
    alert("Please enter a valid quantity.");
    return;
  }

     const id=book._id;
     console.log(id);
     console.log(quantity)
     console.log("Quantity (raw):", quantity);
console.log("Quantity (Number):", Number(quantity));
      const token = localStorage.getItem("token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axios
  .put(`${apiUrl}/books/sell/${id}`, { quantity: Number(quantity) }, config)
  .then((response) => {
    alert("Successfull");
    onClose
    navigate('/books')
  })
      .catch((error) => {
  console.error("Axios error:", error);
  alert(error.response?.data?.message || "Something went wrong");
});
    }

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
          <form onSubmit={(e) => e.preventDefault()} className="flex flex-col md:flex-row gap-6">
  
           <input  type="number"
  min="1" placeholder="Enter Quantity" value={quantity} onChange={(e)=>setQuantity(e.target.value)} className="p-2 border" />
           <button onClick={handleSell} className="border p-2 cursor-pointer">Sell</button>
          </form>
        </div>
      </div>
  )
}

export default SellBook

