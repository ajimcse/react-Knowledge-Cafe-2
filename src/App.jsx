
import './App.css'
import Blogs from './componets/Blogs/Blogs'
import BookMarks from './componets/BookMarks/BookMarks'
import Header from './componets/Header/Header'

function App() {


  return (
    <>
      <Header></Header>
      <div className='flex'>
        <Blogs></Blogs>
        <BookMarks></BookMarks>
      </div>
    </>
  )
}

export default App
