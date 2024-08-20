/**Questão 7: Escreva uma função chamada groupByFirstLetter que recebe um array de
strings e retorna um objeto onde cada chave é uma letra, e o valor é um array de strings que
começam com aquela letra. Por exemplo:

groupByFirstLetter(["apple", "banana", "avocado", "blueberry", "cherry"]);

Retorna:
{
a: ["apple", "avocado"],
b: ["banana", "blueberry"],
c: ["cherry"]
}
*/

function groupByFirstLetter(theArray: string[]): { [key: string]: string[] }{
    let obj = {};

    for(let word of theArray){

        let firstLetter = word.charAt(0); // Pega a primeira letra da primeira palavra do array
        let arraySection = [];

        for(let wordIndex = 0; wordIndex < theArray.length; wordIndex++){ // Esse loop serve para percorrer todo o array e analisar se mais alguma palavra do array possui a inicial obtida anteriormente.

            if (theArray[wordIndex].charAt(0) === firstLetter){
                arraySection.push(theArray[wordIndex]);
            };
        };

        obj[firstLetter] = arraySection;
        arraySection = [];
    };

    return obj;
};

const arr = ["banana", "apple", "date", "eggplant", "cherry", "avocado", "durian", "dragon fruit", "blueberry"];

console.log(groupByFirstLetter(arr));