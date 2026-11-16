import { useState } from 'react'
import { somar, subtrair, multiplicar, dividir } from '../utils/calculadoraCompleta'

export default function CalculadoraCompleta() {
  const [n1, setN1] = useState(0)
  const [n2, setN2] = useState(0)
  const [resultado, setResultado] = useState(0)
  const [erro, setErro] = useState('')

  const calcular = (operacao) => {
    setErro('')
    try {
      setResultado(operacao(n1, n2))
    } catch (e) {
      setErro(e.message)
      setResultado(0)
    }
  }

  return (
    <div className="p-6 flex flex-col items-center gap-4">
      <h1 className="text-2xl font-bold">Calculadora Completa</h1>

      <div className="flex gap-2">
        <input
          type="number"
          value={n1}
          onChange={(e) => setN1(Number(e.target.value))}
          className="border p-2 rounded"
        />
        <input
          type="number"
          value={n2}
          onChange={(e) => setN2(Number(e.target.value))}
          className="border p-2 rounded"
        />
      </div>

      <div className="flex gap-2">
        <button onClick={() => calcular(somar)} className="bg-blue-500 text-white px-4 py-2 rounded">+</button>
        <button onClick={() => calcular(subtrair)} className="bg-red-500 text-white px-4 py-2 rounded">-</button>
        <button onClick={() => calcular(multiplicar)} className="bg-green-600 text-white px-4 py-2 rounded">×</button>
        <button onClick={() => calcular(dividir)} className="bg-purple-600 text-white px-4 py-2 rounded">÷</button>
      </div>

      {erro ? (
        <p className="text-red-600 font-semibold">{erro}</p>
      ) : (
        <p className="text-xl">Resultado: <strong>{resultado}</strong></p>
      )}
    </div>
  )
}