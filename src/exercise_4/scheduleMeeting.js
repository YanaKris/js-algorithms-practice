const dayStart = "07:30"; // начало дня
const dayEnd = "17:45"; // конец дня;

function scheduleMeeting(startTime, durationMinutes) {
  let [hours, minutes] = startTime.split(":").map(Number); // Разбиваем строку и конвертируем в числа
  let totalMinutesStartMeeting = hours * 60 + minutes; // Переводим всё в минуты
  let totalMinutesEndMeeting = hours * 60 + minutes + durationMinutes;

  let [hoursStart, minutesStart] = dayStart.split(":").map(Number);
  let totalMinutesStart = hoursStart * 60 + minutesStart;

  let [hoursEnd, minutesEnd] = dayEnd.split(":").map(Number);
  let totalMinutesEnd = hoursEnd * 60 + minutesEnd;

  return (
    totalMinutesStartMeeting >= totalMinutesStart &&
    totalMinutesEndMeeting <= totalMinutesEnd
  );
}

let userInputStartMeeting = prompt(
  'Введите время начала встречи в формате "чч:мм"'
);
let userInputDuration = Number(
  prompt("Введите длительность встречи в минутах")
);

console.log(scheduleMeeting(userInputStartMeeting, userInputDuration));
