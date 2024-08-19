/**Questão 10: Escreva uma função chamada reverseWords que recebe uma string como
argumento e retorna uma nova string onde a ordem das palavras é invertida, mas a ordem
das letras em cada palavra permanece a mesma. Por exemplo:
reverseWords("The quick brown fox"); // retorna "fox brown quick The" */

function reverseWords(str){
    let reverseStr = str.trim().split(' ').reverse().join(' ')
    return reverseStr
};

console.log(reverseWords("The quick brown fox"));