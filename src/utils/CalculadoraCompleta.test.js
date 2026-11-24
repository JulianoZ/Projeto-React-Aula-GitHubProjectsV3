import { describe, test, expect } from 'vitest'
import { somar, subtrair, multiplicar, dividir } from './CalculadoraCompleta.js'

describe('CalculadoraCompleta - Testes Unitários', () => {
  test('deve somar dois números corretamente', () => {
    expect(somar(10, 5)).toBe(15)
  })

  test('deve subtrair dois números corretamente', () => {
    expect(subtrair(10, 5)).toBe(5)
  })

  test('deve multiplicar dois números corretamente', () => {
    expect(multiplicar(4, 3)).toBe(12)
  })

  test('deve dividir dois números corretamente', () => {
    expect(dividir(20, 4)).toBe(5)
  })

  test('deve lançar erro ao tentar dividir por zero', () => {
    expect(() => dividir(10, 0)).toThrow('Não é possível dividir por zero')
  })
})
