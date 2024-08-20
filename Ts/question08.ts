/**Questão 8: Escreva uma função chamada compressString que recebe uma string e retorna
uma versão comprimida da string onde cada sequência de caracteres iguais é substituída
pelo caractere seguido pelo número de ocorrências. Se a versão comprimida não for menor
que a string original, retorne a string original. Por exemplo:
compressString("aaabbcccc"); // retorna "a3b2c4"
compressString("abc"); // retorna "abc" */

function compressString(str: string): string | null{
    let compressedStr = '';
    let seen = str.charAt(0);
    let count = 0;

    if (str.length === 0){
        return null;
    };

    for(const letter of str){

        if (seen === letter){
            count += 1;

        } else {
            compressedStr += seen + count;
            seen = letter;
            count = 1;
        };

    };

    compressedStr += seen + count;

    return compressedStr.length < str.length ? compressedStr : str;
};

console.log(compressString('aabbcc'));