/****************/
/* Exercises 01 */
/****************/


//1.1
const isNumber = function(number){
  if(!Number.isInteger(number) || isNaN(number)){
    console.log("Ce n'est pas un nombre entier.");
    return false;
  } else return true;
}

const even = function(number){
  let message;
  if (isNumber(number)){
    if(number%2 == 0){
      message="pair";
    }else message = "impair";
  console.log(`Le nombre est ${message}`);
  }
}
even(2);
even(3);
even("a");
even(2.5);

//1.2

const waterStatus = function(temp){
  if(isNumber(temp)){
    if (temp <=0) message = "solide";
    else if(temp <100) message ="liquide";
    else message = "gazeu";
     console.log(`L'eau est sous l'etat ${message}`);
    }
  }
waterStatus(-10);
waterStatus(10);
waterStatus(100);
waterStatus(120);
waterStatus("a");

//1.3 

const multiplication = function(number){
  if(isNumber(number)){
    var i;
    for (i=0; i < 11; i++){
      console.log(`${i} * ${number} = ${i*number}`);
    }
  }
}

multiplication(5);
multiplication(100);
multiplication("a");

//1.4

const esTuVieux = function(firstname, lastname, yob){
  const currentYear = (new Date().getFullYear());
  if(typeof(firstname) == "string" && typeof(lastname) == "string" && yob<currentYear){
     let age = currentYear-yob;
    console.log(age);
    let status = "";
      switch(true){
        case (age<25):
          status = "jeune";
          break;
        case (age<50):
          status = "plus tout jeune";
          break;
        case (age<75):
          status = "vieillissant";
          break;
        case (age>=75): 
          status = "vieux";
          break; 
      }
    console.log(`${firstname} ${lastname} est ${status}`);
     }else console.log("Entrez des informations valides svp");
}


esTuVieux("David","Brais",1991);
esTuVieux(12,"Brais",1991);

//1.5
let table = [1, 10, 2,4,false,"a"];
let sum = 0;
table.forEach(tableSum);
function tableSum(item){
  if(!isNaN(item)){
    sum+=item;
  }  
}
console.log(sum);

//1.5 v2


for(let chiffre of table){
  sum += Number.isNaN(chiffre) ? 0 : chiffre;
}
console.log(sum);

//1.6
const primeNumber = function(inferiorTo){
  if(isNumber(inferiorTo) && inferiorTo>0){
    primes = [0,1];
    for(let i=2; i<inferiorTo; i++){
      let isPrime = true;
      for(let j=2; j<i; j++){
      
        if(i%j ==0){
          isPrime = false;
          break;
        }
      }
     if(isPrime){
       primes.push(i);
     }     
    }
    console.table(primes);
  }
}
primeNumber(10);

































