/*
 1. isPalindrom
 Написать функцию, которая принимает на вход слово и проверяет, является ли это слово палиндромом
*/

function isPalindrom(word) {
  if (typeof word !== 'string') {
    return false;
  }

  const normalWord = word.toLowerCase();
  const reverseWord = word.split('').reverse().join('').toLowerCase();
  return normalWord === reverseWord;
}

console.log(isPalindrom('Madam'));

/*
 2. findLongestWords()
 Написать функцию, которая принимает предложение (слова разделенные только пробелами) в качестве параметра 
 и возвращает слово с наибольшим количеством букв. 
 Если таких слов несколько - возвращает их все.
*/

function findLongestWords(sentence) {
  if (!sentence || typeof sentence !== 'string') {
    return [];
  }

  const splitted = sentence.split(' ');

  const maxWordLength = Math.max(...splitted.map(word => word.length));

  const result = splitted.filter(word => word.length === maxWordLength);
  return result;
}

console.log(findLongestWords('Hello world cucumber solo dadasfdsfdewq vncxas homework'))

export { isPalindrom, findLongestWords };
