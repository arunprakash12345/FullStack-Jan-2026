import { Route, Routes, Navigate } from 'react-router-dom'
import './App.css'

// Pages
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import User from './pages/User'
import PageNotFound from './pages/PageNotFound'

// Component
import Header from './components/Header'

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/users/:id" element={<User isAdmin={true} />} />
        <Route path="/abc" element={<Navigate to="/" />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  )
}

export default App
