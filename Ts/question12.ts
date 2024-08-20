/**Questão 12: Escreva uma função chamada combineStrings que recebe um array de strings
e retorna uma única string que consiste em todas as strings do array concatenadas,
separadas por um espaço. Por exemplo:
combineStrings(["Hello", "world", "this", "is", "JavaScript"]);
// retorna "Hello world this is JavaScript" */

function combineStrings(stringArray: string[]): string{
    return stringArray.join(' ')
}

console.log(combineStrings(["Hello", "world", "this", "is", "JavaScript!"]))