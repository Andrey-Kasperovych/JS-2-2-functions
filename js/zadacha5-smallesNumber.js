/*
 * Напиши функцию findSmallesNumber(numbers) для поиска самого маленького числа в массиве,
 * при условии что числа уникальные (не повторяются).
 */

const findSmallesNumber = function (massNumbers) {
    let smallestNumber = massNumbers[0];
    for (const number of massNumbers) {
        // console.log(number);
        if (number < smallestNumber) {
            smallestNumber = number;
        } else {
            continue;
        }
    }
    return smallestNumber;
};

console.log(findSmallesNumber([3, 8, 12, -2, 15])); // -2
console.log(findSmallesNumber([100, 54, 8, 12, 47])); // 8
console.log(findSmallesNumber([7, 21, 84, 15, 4])); // 4

const findSmallesNumber = function (massNumbers) {};
