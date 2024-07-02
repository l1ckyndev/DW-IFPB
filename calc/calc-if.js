function calculadora(operador, num1, num2) {
  const operacoes = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => a / b
  };

  if (operacoes[operador]) {
    return operacoes[operador](num1, num2);
  } else {
    throw new Error('Operação inválida');
  }
}

const operador = prompt("Digite o operador (+, -, *, /): ");
const num1 = parseFloat(prompt("Digite o primeiro número: "));
const num2 = parseFloat(prompt("Digite o segundo número: "));

try {
  const resultado = calculadora(operador, num1, num2);
  console.log(`Resultado: ${resultado}`);
} catch (e) {
  console.error(e.message);
}
