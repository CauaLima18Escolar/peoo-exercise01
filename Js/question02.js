/**Questão 2: Escreva uma função chamada countWords que recebe uma string como
argumento e retorna o número de palavras contidas na string. Considere que as palavras
são separadas por espaços em branco. Por exemplo:
countWords("A quick brown fox"); // retorna 4 */

function countWords(str){
    let strWords = str.trim().split(' ').length;
    return strWords;
};

console.log(countWords('A quick brown fox'))