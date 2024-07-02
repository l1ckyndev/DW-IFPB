function calculadora (num1, num2, operador){
    switch (operador) {
        case '+':
            return num1 + num2
    
        case '-':
            return num1 - num2
     
        case '*':
            return num1 * num2
        
        case '/':
            return num1 / num2
        
        default:
            return 'Operação inválida'
    }
}

console.log(calculadora(1, 1, '+')) // 2
console.log(calculadora(1, 1, '-')) // 0
console.log(calculadora(1, 1, '*')); // 1
console.log(calculadora(1, 1, '/')); // 1  
console.log(calculadora(1, 2, '&')); //Operação invalida 