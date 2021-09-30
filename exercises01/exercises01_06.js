//1.6
const primeNumber = function (inferiorTo) {
  if (isNumber(inferiorTo) && inferiorTo > 0) {
    primes = [0, 1];
    for (let i = 2; i < inferiorTo; i++) {
      let isPrime = true;
      for (let j = 2; j < i; j++) {
        if (i % j == 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime) {
        primes.push(i);
      }
    }
    console.table(primes);
  }
};
primeNumber(10);
