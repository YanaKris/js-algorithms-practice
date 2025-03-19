function mergeSort(arrayOfNumbers) {
    if (arrayOfNumbers.length <= 1) {
        return arrayOfNumbers; // Базовый случай: массив из 1 или 0 элементов уже отсортирован
    }

    let middle = Math.floor(arrayOfNumbers.length / 2); // Находим середину массива
    let left = arrayOfNumbers.slice(0, middle); // Левая половина
    let right = arrayOfNumbers.slice(middle); // Правая половина

    return merge(mergeSort(left), mergeSort(right)); // Рекурсивно сортируем и объединяем
}

function merge(left, right) {
    let result = [];
    let leftIndex = 0, rightIndex = 0;

    // Пока есть элементы в обеих частях, сравниваем и добавляем меньший
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    // Добавляем оставшиеся элементы (если есть)
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

// Пример использования:
let numbers = [38, 27, 43, 3, 9, 82, 1, 12, 90, 13];
console.log(mergeSort(numbers)); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
let numbers1 = [13, 45, 2, 11, 23, 17];
console.log(mergeSort(numbers1)); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
let numbers2 = [90, 24, 15, 2, 7, 40];
console.log(mergeSort(numbers2)); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
