function verificarTriangulo(a, b, c) {
    // Verificar se todos os lados são positivos
    if (a <= 0 || b <= 0 || c <= 0) {
        return "none";
    }

    // Verificar as condições de existência
    if (a + b <= c || b + c <= a || c + a <= b) {
        return "none";
    }

    // Classificar o triângulo
    if (a === b && b === c) {
        return "equilateral";
    } else if (a === b || b === c || c === a) {
        return "isosceles";
    } else {
        return "scalene";
    }
}

console.log(verificarTriangulo(2, 2, 2));    // equilateral
console.log(verificarTriangulo(10, 10, 10)); // equilateral
console.log(verificarTriangulo(3, 4, 4));    // isosceles
console.log(verificarTriangulo(4, 3, 4));    // isosceles
console.log(verificarTriangulo(4, 4, 3));    // isosceles
console.log(verificarTriangulo(10, 10, 2));  // isosceles
console.log(verificarTriangulo(3, 4, 5));    // scalene
console.log(verificarTriangulo(10, 11, 12)); // scalene
console.log(verificarTriangulo(5, 4, 2));    // scalene
console.log(verificarTriangulo(0, 0, 0));    // none
console.log(verificarTriangulo(3, 4, -5));   // none
console.log(verificarTriangulo(1, 1, 3));    // none
console.log(verificarTriangulo(2, 4, 2));    // none
