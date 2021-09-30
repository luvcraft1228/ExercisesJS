function randomNumber(qty) {
  let randomArray = [];
  for (i = 0; i < qty; i++) {
    randomArray[i] = Math.ceil(Math.random() * 100);
  }
  return randomArray;
}
function myFilter(num){
    //impairs divisible par 5
    if(num%5 ==0 && num%2!=0)
    return true;
}
function copyMyFilter(array){
    let newArray = [...array];
    return newArray.filter(myFilter);
}

console.table(copyMyFilter(randomNumber(100)));
