//1.2

const waterStatus = function (temp) {
  if (!isNaN(temp)) { //is!Nan
    if (temp <= 0) message = "solide";
    if (temp < 100) message = "liquide";
    else message = "gazeux";
    return `L'eau est sous l'etat ${message}`; //return ici
  }return("Entrer une valeur numerique");
};
console.log(waterStatus(-10)); //solide
console.log(waterStatus(10)); //liquide
console.log(waterStatus(110)); //gazeu
console.log(waterStatus('a'));//erreure
