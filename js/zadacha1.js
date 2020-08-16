/*
 * Напиши функцию calculateTotalPrice(items)
 * которая принимает массив цен (чисел) и возвращает их сумму
 */

// const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];
// let total = 0;

const calculateTotalPrice = function (item) {
    console.log(item);
    let total = 0;

    for (const value of item) {
        // console.log(value);
        total += value;
        // console.log(total);
    }

    //  console.log(total);
    return total;
};

calculateTotalPrice([54, 28, 105]);
console.log(calculateTotalPrice([54, 28, 105]));
calculateTotalPrice([54, 28, 105]);
calculateTotalPrice([54, 28, 105]);
