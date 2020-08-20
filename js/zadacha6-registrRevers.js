/*
 * Напиши функцию changeCase(string) которая заменяет регистр
 * каждого символа в строке на противоположный.
 * Например, если строка «JavaScript», то на выходе должена быть строка «jAVAsCRIPT».
 */

const changeCase = function (string) {
    let allLetters = string.split('');
    let invertAllLetters = '';
    console.log(allLetters);
    for (letter of allLetters) {
        letter === letter.toUpperCase()
            ? (letter = letter.toLowerCase())
            : (letter = letter.toUpperCase());
        invertAllLetters += letter;
    }

    return invertAllLetters;
};

console.log(changeCase('qweRTY')); // QWErty
console.log(changeCase('mAnGo')); // MaNgO
console.log(changeCase('AjAx')); // aJaX

// let letter = 'A';

// letter === letter.toUpperCase();
// console.log(letter === letter.toUpperCase());

// console.log(letter.toUpperCase());
