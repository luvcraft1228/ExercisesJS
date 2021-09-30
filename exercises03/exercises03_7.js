let far, celsius = [0, 12, -2, 6, -18, 32];

//console.log(((celsius.reduce((a, b) => a + b) / celsius.length) * 9) / 5 + 32);



console.log(
  `La moyenne des temperatures au dessus du point de congelation est de ${
    celsius
      .filter((temp) => temp > 0)
      .map((a) => (a * 9) / 5 + 32)
      .reduce((a, b) => a + b) / celsius.filter((temp) => temp > 0).length
  } deg F `
);

/*far = celsius
    .filter((temp) => temp > 0)
    .map((a) => (a * 9) / 5 + 32);

console.log(`La moyenne des temperatures au dessus du point de congelation est de ${far.reduce((a, b) => a + b)/far.length} deg F`)*/
    


