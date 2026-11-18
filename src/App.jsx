
import { useState } from 'react'
import './App.css'
import Blogs from './componets/Blogs/Blogs'
import BookMarks from './componets/BookMarks/BookMarks'
import Header from './componets/Header/Header'




function App() {
const [bookmarks, setBookmars] = useState([]);

 const handleAddToBookmark = blog =>{
  console.log('bookmark adding song')
 }

  return (
    <>
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
        <Blogs handleAddToBookmark={handleAddToBookmark}></Blogs>
        <BookMarks></BookMarks>
      </div>
    </>
  )
}

export default App
