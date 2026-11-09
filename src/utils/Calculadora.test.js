import { describe, test, expect } from 'vitest'
import { somar, subtrair } from './Calculadora.js'

describe('Calculadora - Testes Unitários', () => {
  test('deve somar dois números corretamente', () => {
    expect(somar(2, 3)).toBe(5)
  })

  test('deve subtrair dois números corretamente', () => {
    expect(subtrair(5, 2)).toBe(3)
  })
})