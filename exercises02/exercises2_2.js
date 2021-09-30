/*Exercise 2.2*/
const user1 = {
  firstname: "Marc",
  lastname: "Tremblay",
  fullname(){
      return `Je me nomme ${this.firstname} ${this.lastname}`;
  }
};

console.log(user1.fullname());



