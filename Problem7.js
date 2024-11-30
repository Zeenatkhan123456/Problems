// write a fuction to check if the given number is prime or not?

console.log(isPrime(7));
console.log(isPrime(4));

function isPrime(num) {
  for (let i = 2; i <= num / 2; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
