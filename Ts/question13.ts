/**Questão 13: Escreva uma função chamada rotateArray que recebe um array e um número
inteiro k como argumentos. A função deve rotacionar o array k posições para a direita. Se k
for negativo, rotacione o array para a esquerda. Por exemplo:
rotateArray([1, 2, 3, 4, 5], 2); // retorna [4, 5, 1, 2, 3]
rotateArray([1, 2, 3, 4, 5], -2); // retorna [3, 4, 5, 1, 2] */

function rotateArray<T>(theArray: T[], num: number): T[]{

    if (num > 0){
        for(num; num !== 0; num--){
            const removedNum = theArray.splice(theArray.length - 1, 1)
            theArray.unshift(removedNum[0])
        };
    };

    if (num < 0){
        for(num; num !== 0; num++){
            const removedNum = theArray.splice(0, 1)
            theArray.push(removedNum[0])
        };
    };

    return theArray
};

console.log(rotateArray(['A', 2, 3, 4, 5], 2))
