function calculadora(num1, num2, operador,) {
    const operacoes = {
      '+': (a, b) => a + b,
      '-': (a, b) => a - b,
      '*': (a, b) => a * b,
      '/': (a, b) => a / b
    };
  
    if (operacoes[operador]) {
      return operacoes[operador](num1, num2);
    } else {
      return 'Operação invalida'
    }
  }
  
console.log(calculadora(1, 1, '+')) // 2
console.log(calculadora(1, 1, '-')) // 0
console.log(calculadora(1, 1, '*')); // 1
console.log(calculadora(1, 1, '/')); // 1  
console.log(calculadora(1, 2, '&')); //Operação invalida 