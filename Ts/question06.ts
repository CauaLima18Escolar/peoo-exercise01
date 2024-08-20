/**Questão 6: Crie uma função chamada concatenateArrays que recebe dois arrays de strings
e retorna um novo array onde cada elemento é a concatenação das strings que estão nas
mesmas posições nos arrays de entrada. Se os arrays tiverem tamanhos diferentes, o
restante das strings deve ser adicionado ao final do array resultante. Por exemplo:
concatenateArrays();
// retorna ["a1", "b2", "c3", "4"] */

function concatenateArrays(firstArray: (any[]), secondArray: any[]): any[] | null{
    let concatenatedArr = [] // Array que vai servir de base para receber a concatenação dos demais
    let index = 0

    if (secondArray.length < firstArray.length){
        return null
    }

    for(; index < firstArray.length; index++){

        let concatenated = firstArray[index] + secondArray[index]
        concatenatedArr.push(concatenated)
    };

    if (secondArray.length > firstArray.length){
        return concatenatedArr = concatenatedArr.concat(secondArray.slice(index))
    }

    return concatenatedArr
};

let fruitsArray = ['Maça', 'Uva', 'Morango']
let vegetablesArray = ['Brócolis', 'Tomate', 'Cenoura']

console.log(concatenateArrays(["a", "b", "c"], ["1", "2", "3", "4", "5", "6"]))