import { useState } from "react";
import BookContext from "./BookContext";


const BookContextProvider = ({children}) => {
    const [books, setBooks]=useState([]);
    const [loading, setLoading]=useState(false);
    const [showType , setShowType]=useState('tabele');
  return (
    <div>
      <BookContext.Provider value={{books , setBooks , loading , setLoading , showType ,setShowType}}>
        {children}
      </BookContext.Provider>
    </div>
  )
}

export default BookContextProvider
