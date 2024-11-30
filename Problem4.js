// write a function to reverse duplicate elements from an array?

console.log(reverseDuplicates([1, 2, 3, 4, 4, 5, 6, 6]));

function reverseDuplicates(array) {
  const uniqueElement = [];
  for (let i = 0; i < array.length; i++) {
    if (uniqueElement.indexOf(array[i]) === -1) {
      uniqueElement.push(array[i]);
    }
  }
  return uniqueElement;
}

// OR

console.log(reverseDuplicate([9, 8, 7, 6, 5, 5, 4, 4]));

function reverseDuplicate(array) {
  return [...new Set(array)];
}
