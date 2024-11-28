// Write a function that return the reverse of a string?

function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}
console.log(reverseString("Interview, Happy"));

// OR

function reverseStr(str) {
  return str.split("").reverse().join("");
}
console.log(reverseStr("I Love JavaScript"));
