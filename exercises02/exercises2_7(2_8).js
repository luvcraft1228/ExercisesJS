let fibo = [0, 1];

function fibonacci(position = 2, i = 2) {
  if (fibo.length <= position && i > 1) {
    let newFibo = fibo[fibo.length - 1] + fibo[fibo.length - 2];
    fibo.push(newFibo);
    return fibonacci(position, fibo.length);
  } else return fibo[position];
}

console.log(fibonacci(11));
