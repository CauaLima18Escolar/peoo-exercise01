/**Questão 4: Escreva uma função chamada replaceWord que recebe três argumentos: uma
string original, uma palavra a ser substituída e uma palavra substituta. A função deve
retornar a string original com todas as ocorrências da palavra a ser substituída trocadas
pela palavra substituta. Por exemplo:
replaceWord("The quick brown fox jumps over the lazy dog", "fox", "cat"); */

function replaceWord(orgStr: string, word: string, substitute: string){
    return orgStr.replaceAll(word, substitute);
};

console.log(replaceWord("fox and dog, dog, dog, fox, fox", "fox", "cat"));

