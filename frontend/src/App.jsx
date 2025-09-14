
import { Route, Routes } from 'react-router-dom'
import ShowBook from './pages/ShowBook'
import UpdateBook from './pages/UpdateBook'
import DeleteBook from './pages/DeleteBook'
import AddBook from './pages/AddBook'
import Home from './pages/Home'
import About from './component/About.jsx'
import ShowBookByName from './component/bookComponents/ShowBookByName.jsx'
import BooksByGenre from './component/bookComponents/BooksByGenre.jsx'
import Contact from './component/Contact.jsx'
import Signup from './pages/Signup.jsx'
import Login from './pages/Login.jsx'
import ForgotPassword from './pages/ForgotPassword.jsx'
import ShowBookByGenre from './component/bookComponents/ShowBookByGenre.jsx'


const App = () => {
  return (
    <>
    
   <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/auth/signup' element={<Signup/>}></Route>
    <Route path='/auth/login' element={<Login/>}></Route>
    <Route path='/auth/forgot-password' element={<ForgotPassword/>}></Route>
    <Route path='/about' element={<About/>}></Route>
    <Route path='/books' element={<ShowBookByGenre/>}></Route>
    <Route path='/contact' element={<Contact/>}></Route>
    <Route path='/books/:id' element={<ShowBook/>}></Route>
    <Route path='/books/title/:title' element={<ShowBookByName/>}></Route>
    <Route path='/books/genre/:genre' element={<BooksByGenre/>}></Route>
    <Route path='/books/update/:id' element={<UpdateBook/>}></Route>
    <Route path='/books/delete/:id' element={<DeleteBook/>}></Route>
    <Route path='/books/add' element={<AddBook/>}></Route>
   </Routes>
   </>
  )
}

export default App
