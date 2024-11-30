// Write a  function that returns the number of vowels in a string?

console.log(countVowels("Hello,World!"));

function countVowels(str){
    let count =0;
   let vowels = ["a","e", "i","o","u"];
   for (let char of str.toLowerCase()){
    if(vowels.includes(char)){
        count++;
    }
   }
   return count;
   
}