// Write a function that checks whether a given string is a pallindrome?

// Pallindrome: A pallindrome is aword that reads the same forward and backword.

console.log(isPallindrome("racecar"));

function isPallindrome(str){
    const reverseStr = str.split("").reverse().join("");
    return str === reverseStr;
}