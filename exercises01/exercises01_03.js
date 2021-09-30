//1.3

const multiplication = function (number) {
  if (Number.isInteger(number)) { //number checkup....
    var i;
    for (i = 0; i <= 10; i++) {
      console.log(`${i} * ${number} = ${i * number}`);
    }
  } else console.log('Pas un entier');
};

multiplication(5);
multiplication(100);
multiplication("a");
