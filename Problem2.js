// Write a function the returns the longest word in the sentence.

console.log(findLongestWord("I Love Coding in Javascript"));

function findLongestWord(str) {
  let words = str.split(" ");
  let longestWord = "";
  for (let word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
}
