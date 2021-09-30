function Person(first, last, age) { //test constructeur
  this.firstName = first;
  this.lastName = last;
  this.age = age;
}

let father = new Person("David", "Brais", 30);  //exterieur fonction

const persons = [
  father,
  new Person("Marc-Andre", "Marchand", 29), //interieur fonction
  {
    firstName: "Michael", //litteral
    lastName: "Eaton",
    age: 33
  },
  {
    firstName: "Francois",
    lastName: "Cote",
    age: 39
  }
];
function sortByName(array){
    array.sort((a, b) => (a.firstName+a.lastName).localeCompare(b.firstName+b.lastName, "fr"));
}
function sortByAge(array){
   array.sort((a,b) => b.age-a.age);
}

sortByAge(persons);
console.log("Par age");
console.table(persons);
console.log("Par nom");
sortByName(persons);
console.table(persons);
