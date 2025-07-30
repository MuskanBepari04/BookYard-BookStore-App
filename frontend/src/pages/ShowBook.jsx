import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ShowBook = () => {
  
  const {id} =useParams();
  const [book , setBook]=useState({})
  const apiUrl = import.meta.env.VITE_API_URL;
  useEffect(()=>{
      const token = localStorage.getItem('token');
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };
    axios
    .get(`${apiUrl}/books/${id}` , config)
    .then((response)=>{
      setBook(response.data)
    })
    .catch((error)=>{
      console.log(error);
    })
  },[])
  return (
    <div className='m-12 p-8 border-blue-600'>
      <div>Book id is :  {book._id}</div>
      <div>Book Title : {book.title}</div>
      <div>Book Author : {book.author}</div>
      <div>Book Publish Year : {book.publishYear}</div>
      <div>Book Created at : </div>
      <div>Book Updated at : </div>
    </div>
  )
}

export default ShowBook
