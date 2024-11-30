// Write a fuction that checks whether anagrams or not ?
// Anagram : An anagram is a word formed be rearranging the letter of another word.


console.log(isAnagram("listen","silent"));

function isAnagram(str1,str2){
    const sortedStr1 = str1.split("").sort().join("");
    const sorrtedStr2= str2.split("").sort().join("");

    return sortedStr1===sorrtedStr2;
}