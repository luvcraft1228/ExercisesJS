//1.1
// const isNumber = function (number) {
//   if (!Number.isInteger(number) || isNaN(number)) { //Pas neccessaires
//     console.log("Ce n'est pas un nombre entier.");
//     return false;
//   } else return true;
// };

const even = function (number) {
  let message;
  if (Number.isInteger(number)) { 
    number % 2 == 0 ?  message = "pair" : message = "impair";
    return(`Le nombre est ${message}`); 
  }else return ('Le nombre est invalide');
};
even(2);
even(3);
even("a");
even(2.5);
