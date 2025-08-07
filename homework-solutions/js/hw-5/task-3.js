/**
 * Создать строку с информацией о количестве гласных и согласных букв в слове.
 * Переменная `word` уже создана и содержит строку со словом.
 * Ожидаемый результат для `hello`: "hello contains 2 vowels and 3 consonants".
 */
const word = 'hello';

let vowelsAndConsonantsResult = '';
const vowels = 'aeoui';
let vowelCount = 0;
let consonantCount = 0;

for (i = 0; i < word.length; i++) {
    if (vowels.includes(word[i])) {
        vowelCount++;
    } else {
        consonantCount++;
    }

}

console.log(`${word} contains ${vowelCount} vowels and ${consonantCount} consonants`)

//export { vowelsAndConsonantsResult };
