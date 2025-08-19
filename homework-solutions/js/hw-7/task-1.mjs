/*
1. Бесконечные аргументы
  - Напишите функцию, принимающую на вход любое количество массивов
  - Функция возвращает массив содержащий все элементы переданных массивов.
  - Например: mergeArrays([1,2], [3,4], [5,6]) // [1,2,3,4,5,6]
  - Решить с использованием Spread operator
*/
function mergeArrays(...arrays) {
  const result = []
  for (const arr of arrays) {
    result.push(...arr)
  }
  return result;
}

console.log(mergeArrays([1, 2], [2, 3]));

/*
  2. Devide by _
    - Написать функцию, которая преобразует любое предложение в вот_Такой_Вот_Вид и возвращает его. 
    - Первое слово должно начинаться с буквы в нижнем регистре, у остальных -  верхнем. 
    - Пример: I am super engineer => i_Am_Super_Engineer
  */
function devideBy(sentence) {
  if (!sentence) {
    return ''
  }

  const splitted = sentence.split(/\s+/);
  const [firstWord, ...rest] = splitted;
  console.log(splitted)
  console.log(rest)

  const firstWordResult = firstWord[0].toLowerCase() + firstWord.slice(1).toLowerCase();
  const otherWordsResult = rest.map(word => word[0].toUpperCase() + word.slice(1).toLowerCase());

  const result = [firstWordResult, ...otherWordsResult].join('_');
  return result;
}

console.log(devideBy('HeLLo WoRLD'))
/*
  3. Фибаначчи
    - Напишите функцию fibonacci(n), возвращающую энное число Фибоначчи
    - числа Фибоначчи (строка Фибоначчи) — числовая последовательность,
      первые два числа которой являются 0 и 1, а каждое последующее за ними число
      является суммой двух предыдущих
    - Например fibonacci(8) //21
  */
function fibonacci(n) {
  const arr = [0, 1];

  if (n === 0 || n === 1) {
    return arr[n];
  } else {
    for (let i = 2; i <= n; i++) {
      arr[i] = arr[i - 1] + arr[i - 2];
    }
  }

  return arr[n];
}

console.log(fibonacci(3))

export { mergeArrays, fibonacci, devideBy };
