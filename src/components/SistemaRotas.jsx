// components/SistemaRotas.jsx
import { Routes, Route } from "react-router-dom"
import MainContent from "./MainContent"
import Sobre from "../pages/Sobre"
import Contato from "../pages/Contato"
import  Produto from "../pages/Produto"
import Servico from "../pages/Servico"
import Calculadora from "../pages/Calculadora"

function SistemaRotas() {
  return (
    <Routes>
      <Route path="/" element={<MainContent />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/contato" element={<Contato />} />
      <Route path="/servico" element={<Servico />} />
      <Route path="/produto" element={<Produto />} />
      <Route path="/calculadora" element={<Calculadora />} />
      
      
    </Routes>
    
  )
}

export default SistemaRotas