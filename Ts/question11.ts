/**Questão 11: Escreva uma função chamada findMissingElement que recebe dois arrays de
números inteiros. O segundo array é idêntico ao primeiro, exceto por um elemento que está
faltando. A função deve retornar o elemento que está faltando. Por exemplo:
findMissingElement([1, 2, 3, 4, 5], [2, 3, 1, 5]); // retorna 4 */

function findMissingElement(firstArray: any[], secondArray: any[]): boolean | any{
    for(let element of firstArray){
        if(!secondArray.includes(element)){
            return element
        };
    };

    return true;
};

console.log(findMissingElement([1, 2, 3, 4, 5], [2, 4, 3, 1, 5]));