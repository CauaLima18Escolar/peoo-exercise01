/**Questão 16: Crie uma função chamada replaceElements que recebe um array de números
inteiros e dois números oldValue e newValue. A função deve substituir todas as ocorrências
de oldValue no array por newValue. Por exemplo:
replaceElements([1, 2, 3, 1, 4], 1, 5); // retorna [5, 2, 3, 5, 4] */ 

function replaceElements(numArray, oldValue, newValue){
    numArray.map((number) => {
        if (number === oldValue){
            numArray.splice(numArray.indexOf(number), 1, newValue);
        };
    });

    return numArray;
};



console.log(replaceElements([1, 2, 3, 1, 4], 1, 5))