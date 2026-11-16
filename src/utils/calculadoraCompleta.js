export const somar = (a, b) => a + b
export const subtrair = (a, b) => a - b
export const multiplicar = (a, b) => a * b

export const dividir = (a, b) => {
  if (b === 0) {
    throw new Error('Não é possível dividir por zero')
  }
  return a / b
}