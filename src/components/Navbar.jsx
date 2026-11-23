// components/Navbar.jsx
import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav className="flex gap-4">
      <Link to="/" className="text-white hover:underline">Home</Link>
      <Link to="/sobre" className="text-white hover:underline">Sobre</Link>
      <Link to="/contato" className="text-white hover:underline">Contato</Link>      
      <Link to="/servico" className="text-white hover:underline">Serviço</Link>      
      <Link to="/calculadora" className="text-white hover:underline">Calculadora</Link>
      <Link to="/calculadora-completa" className="text-white hover:underline">Calculadora Completa</Link>
      
    </nav>
  )
}

export default Navbar