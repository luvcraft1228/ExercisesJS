function randomNumber(qty) {
  let randomArray = [];
  for (i = 0; i < qty; i++) {
    randomArray[i] = Math.ceil(Math.random() * 100);
  }
  return randomArray;
}

console.table((randomNumber(30).filter(a=>a**2>5000)));

