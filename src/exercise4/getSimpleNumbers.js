function getSimpleNumbers(touple) {
    let [start, end] = touple; // Распаковка значений кортежа (массива)

    if (start < 2 || end < 2) {
        throw new Error("Оба числа должны быть не меньше 2.");
    }

    let sieve = new Array(end + 1).fill(true); // Создаем массив булевых значений (true)
    sieve[0] = sieve[1] = false; // 0 и 1 — не простые числа

    // Алгоритм Решета Эратосфена
    for (let i = 2; i * i <= end; i++) {
        if (sieve[i]) {
            for (let j = i * i; j <= end; j += i) {
                sieve[j] = false; // Убираем составные числа
            }
        }
    }

    // Формируем список простых чисел в заданном диапазоне
    let primes = [];
    for (let i = start; i <= end; i++) {
        if (sieve[i]) primes.push(i);
    }

    return primes;
}

// Запрашиваем у пользователя два числа через пробел
let userInput = prompt("Введите два числа через пробел:");
// Разбиваем строку на массив, преобразуем элементы в числа
let [userStart, userEnd] = userInput.split(" ").map(num => parseInt(num, 10));
let res = getSimpleNumbers([userStart, userEnd]);

console.log(res);
