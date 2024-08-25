/**Questão 14: Escreva uma função chamada expandRange que recebe uma string
representando um intervalo de números (por exemplo, "1-5,8,11-14") e retorna um array de
todos os números contidos nesse intervalo. Por exemplo:
expandRange("1-3,5,7-9"); // retorna [1, 2, 3, 5, 7, 8, 9] */

function expandRange(str){

    if (str.length === 0 || typeof str !== 'string'){
        return null
    }

    const arrResult = [];
    let strParts = str.split(',');

    for(let part of strParts){
        if (part.includes('-')){
            let [numStart, numEnd] = part.split('-');
            numStart = Number(numStart);
            numEnd = Number(numEnd);

            for(; numStart <= numEnd; numStart++){
                arrResult.push(numStart)
            };
        } else {
            arrResult.push(Number(part));
        };
    };

    return arrResult
 };

 console.log(expandRange('1-5, 6, 7-12, 13, 14-30'));
