import { Routes, Route } from 'react-router'
import Header from './components/Header/Header'

import Home from './pages/Home/Home'
import Books from './pages/Books/Books'
import Categories from './pages/Categories/Categories'

import BookDetails from './pages/BookDetails/BookDetails'

import Reader from './pages/Reader/Reader'
function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="min-h-screen flex items-center justify-center">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books />} />
          <Route path="/books/:id" element={<BookDetails />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/reader/:id" element={<Reader />} />
        </Routes>
      </main>
    </div>

  )
}

export default App
