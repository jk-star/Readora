import { Routes, Route } from 'react-router'
import Header from './components/Header/Header'

import Home from './pages/Home/Home'
import Books from './pages/Books/Books'
import Categories from './pages/Categories/Categories'

import BookDetails from './pages/BookDetails/BookDetails'

import Reader from './pages/Reader/Reader'

import Library from './pages/Library/Library'

import Login from './pages/Login/Login'

import Register from './pages/Register/Register'

import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'
function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="min-h-screen w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books />} />
          <Route path="/books/:id" element={<BookDetails />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/reader/:id" element={<Reader />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/library" element={
            <ProtectedRoute>
              <Library />
            </ProtectedRoute>
          } />
        </Routes>
      </main>
    </div>

  )
}

export default App
