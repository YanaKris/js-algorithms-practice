function getNOD(first, second) {
    return second === 0 ? first : getNOD(second, first % second);
}

// Запрашиваем у пользователя два числа через пробел
let userInput = prompt("Введите два числа через пробел:");
// Разбиваем строку на массив, преобразуем элементы в числа
let [userFirst, userSecond] = userInput.split(" ").map(num => parseInt(num, 10));
let res = getNOD(userFirst, userSecond);

console.log(res);