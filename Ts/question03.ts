/**Questão 3: Crie uma função chamada isPalindrome que verifica se uma string é um
palíndromo (uma palavra ou frase que é a mesma ao contrário, ignorando espaços,
pontuação e diferença entre maiúsculas e minúsculas). Por exemplo:
isPalindrome("A man a plan a canal Panama"); // retorna true
isPalindrome("Hello"); // retorna false */

function isPalindrome(str: string): boolean {
    let reverseStr = str.toLowerCase().replaceAll(' ', '').split('').reverse().join('');
    str = str.toLowerCase().replaceAll(' ', '');

    return reverseStr === str;
}

console.log(isPalindrome('A man a plan a canal Panama'));