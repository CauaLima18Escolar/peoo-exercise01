/**Questão 6: Crie uma função chamada concatenateArrays que recebe dois arrays de strings
e retorna um novo array onde cada elemento é a concatenação das strings que estão nas
mesmas posições nos arrays de entrada. Se os arrays tiverem tamanhos diferentes, o
restante das strings deve ser adicionado ao final do array resultante. Por exemplo:
concatenateArrays(["a", "b", "c"], ["1", "2", "3", "4"]);
// retorna ["a1", "b2", "c3", "4"] */

function concatenateArrays(firstArray, secondArray){
    let concatenatedArr = [] // Array que vai servir de base para receber a concatenação dos demais arrays
    return concatenatedArr.concat(firstArray, secondArray)
};

let fruitsArray = ['Maça', 'Uva', 'Morango']
let vegetablesArray = ['Brócolis', 'Tomate', 'Cenoura']

console.log(concatenateArrays(fruitsArray, vegetablesArray))