
import './App.css'
import Blogs from './componets/Blogs/Blogs'
import BookMarks from './componets/BookMarks/BookMarks'
import Header from './componets/Header/Header'

function App() {


  return (
    <>
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
        <Blogs></Blogs>
        <BookMarks></BookMarks>
      </div>
    </>
  )
}

export default App
