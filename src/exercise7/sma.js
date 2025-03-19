function sma(arrayOfNumbers, period) {
    if (!Array.isArray(arrayOfNumbers) || arrayOfNumbers.some(num => !Number.isInteger(num) || num < 0)) {
        throw new Error("Функция принимает только массив целых неотрицательных чисел");
    }
    if (!Number.isInteger(period) || period <= 0) {
        throw new Error("Период должен быть целым положительным числом");
    }
    let arrayOfNumRes = [];
    let sumCurrent = 0;
    for(let i = 0; i < arrayOfNumbers.length; i++) {
        sumCurrent += arrayOfNumbers[i];
        if (i < period) {
            arrayOfNumRes.push(Number((sumCurrent / period).toFixed(3)));
        } else {
            sumCurrent -= arrayOfNumbers[i - period]; // Вычитаем старый элемент из суммы
            arrayOfNumRes.push(Number((sumCurrent / period).toFixed(3))); // Скользящее среднее
        }
    }
    return arrayOfNumRes;
}

let userInput = prompt("Введите числа через запятую:");
let numbersArray = userInput.split(",").map(num => parseInt(num.trim(), 10));
let periodInput =   Number(prompt("период"));

console.log(JSON.stringify(sma(numbersArray, periodInput)));
console.log(JSON.stringify(sma([1, 2, 3], 3)));
console.log(JSON.stringify(sma([1, 2, 3], 1)));
console.log(JSON.stringify(sma([1, 2, 3], 2)));
