/**Questão 9: Escreva uma função chamada areAnagrams que recebe duas strings como
argumentos e retorna true se as strings forem anagramas (ou seja, se uma string puder ser
rearranjada para formar a outra) e false caso contrário. Ignore espaços e diferenças entre
maiúsculas e minúsculas. Por exemplo:
areAnagrams("listen", "silent"); // retorna true
areAnagrams("hello", "world"); // retorna false */

function areAnagrams(firstStr: string, secondStr: string): boolean{
    firstStr = firstStr.toLowerCase().split('').sort().join('');
    secondStr = secondStr.toLowerCase().split('').sort().join('');

    return firstStr === secondStr
};

console.log(areAnagrams("listen", "silent"))