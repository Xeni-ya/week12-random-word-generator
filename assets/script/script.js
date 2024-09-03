// Шаги для выполнения задания:

// Создай переменную alphabet, в которой будет храниться строка с алфавитом, из которых ты будешь генерировать случайное слово.
// Используя объект Math, создай четыре случайных индекса в диапазоне от 0 до длины вашей alphabet.
// Используя полученные случайные индексы, извлеки соответствующие символы из alphabet и объедини их в строку, чтобы сформировать случайное слово.
// Выведи полученное случайное слово на экран, чтобы проверить результат.

let alphabet = "АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ";

const getRandomIndex = () => {
  let randomIndexOne = Math.floor(Math.random() * alphabet.length);
  let randomIndexTwo = Math.floor(Math.random() * alphabet.length);
  let randomIndexThree = Math.floor(Math.random() * alphabet.length);
  let randomIndexFour = Math.floor(Math.random() * alphabet.length);
}

//console.log('эспрессо'[0]);
const getRandomWord = () => {
  let randomWordOne = alphabet[randomIndexOne];
  let randomWordTwo = alphabet[randomIndexTwo];
  let randomWordThree = alphabet[randomIndexThree];
  let randomWordFour = alphabet[randomIndexFour];

  result = randomWordOne + randomWordTwo + randomWordThree + randomWordFour;
}
console.log(getRandomWord(`случайное слово: ${result}`));
