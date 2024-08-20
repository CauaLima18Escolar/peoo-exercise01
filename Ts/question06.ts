/**Questão 6: Crie uma função chamada concatenateArrays que recebe dois arrays de strings
e retorna um novo array onde cada elemento é a concatenação das strings que estão nas
mesmas posições nos arrays de entrada. Se os arrays tiverem tamanhos diferentes, o
restante das strings deve ser adicionado ao final do array resultante. Por exemplo:
concatenateArrays();
// retorna ["a1", "b2", "c3", "4"] */

function concatenateArrays<B>(firstArray: B[], secondArray: B[]): B[] | null{
    let concatenatedArr: B[] = [] // Array que vai servir de base para receber a concatenação dos demais
    let index = 0

    if (secondArray.length < firstArray.length){
        return null
    }

    for(; index < firstArray.length; index++){

        const concatenated = String(firstArray[index]) + String(secondArray[index]);
        concatenatedArr.push(concatenated as B);
    };

    if (secondArray.length > firstArray.length){
        return concatenatedArr = concatenatedArr.concat(secondArray.slice(index))
    }

    return concatenatedArr
};

console.log(concatenateArrays(["a", "b", "c"], ["1", "2", "3", "4", "5", "6"]))