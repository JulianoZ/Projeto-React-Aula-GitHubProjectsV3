// components/Header.jsx
import Navbar from "./Navbar"

function Header() {
  return (
    <header className="bg-blue-600">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold text-white">
          Curso de GitHub e Git - Computação Pecege
        </h1>
        <Navbar />
      </div>
    </header>
  )
}

export default Header