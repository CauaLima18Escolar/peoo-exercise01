/**Questão 1: Escreva uma função chamada intercalateStrings que recebe duas strings de
mesmo tamanho como argumentos e retorna uma nova string onde os caracteres das duas
strings de entrada são intercalados. Por exemplo:
intercalateStrings("abc", "123"); // retorna "a1b2c3" */

function intercalateStrings(str1, str2){
    if (str1.length !== str2.length){
        return null
    };

    let intercalateStr = ''

    for(let letter = 0; letter < str1.length; letter++){
        intercalateStr += str1[letter] + str2[letter]
    };

    return intercalateStr
};

console.log(intercalateStrings('abc', '123'));