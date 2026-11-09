import { useState } from 'react'
import { somar, subtrair } from '../utils/Calculadora'

export default function Calculadora() {
  const [n1, setN1] = useState(0)
  const [n2, setN2] = useState(0)
  const [resultado, setResultado] = useState(0)

  return (
    <div className="p-6 flex flex-col items-center gap-4">
      <h1 className="text-2xl font-bold">Calculadora Simples</h1>
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
        <button onClick={() => setResultado(somar(n1, n2))} className="bg-blue-500 text-white px-4 py-2 rounded">+</button>
        <button onClick={() => setResultado(subtrair(n1, n2))} className="bg-red-500 text-white px-4 py-2 rounded">-</button>
      </div>
      <p className="text-xl">Resultado: <strong>{resultado}</strong></p>
    </div>
  )
}