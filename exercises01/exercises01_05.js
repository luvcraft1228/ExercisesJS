//1.5
let table = [1, 10, 2, 4, false, "a"];
let sum = 0;
table.forEach(tableSum);
function tableSum(item) {
  if (!isNaN(item)) {
    sum += item;
  }
}
console.log(sum);

//1.5 v2

for (let chiffre of table) {
  sum += isNaN(chiffre) ? 0 : chiffre;
}
console.log(sum);
