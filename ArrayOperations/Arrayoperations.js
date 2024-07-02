// Arrayoperations.js

export function sum(numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}

export function sumOdds(numbers) {
    const imp = []
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 !== 0){
            imp.push(numbers[i])
        } 
    }
    return sum(imp)
}

export function product(numbers){
    return numbers.reduce((acc, curr) => acc * curr, 1);
}

export function sum1(numbers){
    var somatorio = 0
    
    for (let i = 0;i < numbers.length; i++){
        somatorio += numbers[i] 
   }

   return somatorio
}

export function product1(numbers){
    var produtorio = 1

    for (let i = 0; i < numbers.length; i++){
        produtorio *= numbers[i]
    }

    return produtorio
}