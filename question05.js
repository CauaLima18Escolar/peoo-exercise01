/**Questão 5: Escreva uma função chamada findDuplicate que recebe um array de números
inteiros e retorna o primeiro elemento que aparece mais de uma vez. Se não houver
elementos duplicados, a função deve retornar null. Por exemplo:
findDuplicate([1, 2, 3, 4, 2]); // retorna 2
findDuplicate([1, 2, 3, 4, 5]); // retorna null */

function findDuplicate(numbersArray){
    let seen = [] // Array que armazena todos os números que já foram vistos antes

    for(let indexOfNumber = 0; indexOfNumber < numbersArray.length; indexOfNumber++){
        let num = numbersArray[indexOfNumber]
        
        if (seen.includes(num)){ // O array de números vistos inclue o número atual?
            return num
        };

        seen.push(num) // Inclua o número atual no array de números vistos
    };

    return null
};

let numArray = [1, 3, 2, 4, 5]

console.log(findDuplicate(numArray))