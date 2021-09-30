function roll(faces) {
  return Math.ceil(Math.random() * faces);
}

function diceThrows(faces, nbrThrows) {
  let throws = [];
  for (i = 0; i < nbrThrows; i++) {
    throws.push(roll(faces));
  }
  let throwCalc = [];
  throws.forEach((element) => {
    throwCalc[element - 1] == null
      ? (throwCalc[element - 1] = 1)
      : (throwCalc[element - 1] += 1);
  });
  return throwCalc;
}

/*function throws(faces, nbrThrows){
  let throws = [];
}*/

function printResult(array){
  let string;
  string = "Face    Hits\n------------\n";
 for (element in array){
   string += `| ${+element + 1}  | ${array[element]} |\n`;
 }
 string += "------------";
  return string;
}

console.log(printResult(diceThrows(6,1000)));


