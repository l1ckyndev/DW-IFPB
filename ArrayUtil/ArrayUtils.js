// Função para encontrar o valor Minimo
export function min(numbers) {
    // Conferindo se o Array foi passado como parametro
    if (!Array.isArray(numbers) || numbers.length === 0) {
        return "Parametro invalido"
    }
    
    // Retornando o menor valor
    return Math.min(...numbers);
}

// Função para encontrar o valor Maximo
export function max(numbers) {
    // Conferindo se o Array foi passado como parametro
    if (!Array.isArray(numbers) || numbers.length === 0) {
        return "Parametro invalido"
    }

    // Retornando o maior valor
    return Math.max(...numbers);
}

// Função para gerar um Array com valores dentro de um range específico
export function range(value1, value2, value3) {
    const numbers = [];

    if (value2 === undefined && value3 === undefined) {
        // Caso onde apenas um argumento é passado (assumindo que seja o valor final)
        for (let i = 0; i < value1; i++) {
            numbers.push(i);
        }
    } else if (value3 === undefined) {
        // Caso onde dois argumentos são passados (assumindo que são início e fim)
        for (let i = value1; i < value2; i++) {
            numbers.push(i);
        }
    } else {
        // Caso onde três argumentos são passados (assumindo início, fim e passo)
        for (let i = value1; i < value2; i += value3) {
            numbers.push(i);
        }
    }

    return numbers;
}

// Função para zipar alguns arrays
export function zip(names, numbers, booleans) {
    const ziper = []

    // caso os booleans não existam
    if (booleans === undefined) {
        for (let i = 0; i < names.length; i++) {
            let combinedArray = [names[i], numbers[i]];
            ziper.push(combinedArray);  
        }
    } else {
        for (let i = 0; i < names.length; i++) {
            let combinedArray = [names[i], numbers[i], booleans[i]];
            ziper.push(combinedArray);  
        }
    }

    return ziper;
}

// adicionando elemetos unicos a um array
export function uniq(numbers) {
    const uniquer = []

    //verificando se está incluso na lista se não estiver adiciona
    for (let i = 0; i < numbers.length; i++) {
        if (!uniquer.includes(numbers[i])) {
            uniquer.push(numbers[i])
        } 
    } 

    return uniquer
}

// Organizando um array
export function sortNum(numbers) {
    return numbers.sort((a, b) => a - b);
}