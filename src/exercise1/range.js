function range(start, end) {
    let result = [];
    for (let i = start; i <= end; i++) {
        result.push(i);
    }
    return result;
}

// Получаем ввод от пользователя
let start = parseInt(prompt("Введите начало диапазона:"), 10);
let end = parseInt(prompt("Введите конец диапазона:"), 10);

// Выводим результат в консоль
console.log(range(start, end));
