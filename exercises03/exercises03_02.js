function randomNumber(qty) {
  let randomArray = [];
  for (i = 0; i < qty; i++) {
    randomArray[i] = Math.ceil(Math.random() * 100);
  }
  return randomArray;
}

//let array = randomNumber(25);

function randomInsert(nbr, arr){
    let position = Math.floor(Math.random()*arr.length);
    arr.splice(position, 0, nbr);
    return arr;
}
//array = randomInsert(1000, array);
console.table(randomInsert(1000,randomNumber(25)));