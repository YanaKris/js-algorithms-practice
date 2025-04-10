function getNumbersIdBySum(numbers, targetSum) {
  let result = [];
  let numMap = new Map();

  for (let i = 0; i < numbers.length; i++) {
    let complement = targetSum - numbers[i]; // Искомое число

    if (numMap.has(complement)) {
      result.push([numMap.get(complement), i]); // Добавляем индексы пары
    }

    numMap.set(numbers[i], i); // Запоминаем текущее число и его индекс
  }

  return result.length > 0 ? result : null;
}

let userInput = prompt("Введите числа через пробел:");
let numbersArray = userInput.split(" ").map((num) => parseInt(num.trim(), 10));
let userInput2 = parseInt(prompt("Введите сумму:"), 10);

let pairs = getNumbersIdBySum(numbersArray, userInput2);

// Выводим результат в нужном формате
if (pairs) {
  console.log(pairs.map((pair) => `[${pair.join(", ")}]`).join(" / "));
} else {
  console.log("null");
}
for (let i = 0; i < numbersArray.length; i++) {
  console.log(numbersArray[i]);
}
