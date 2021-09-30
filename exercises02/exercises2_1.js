/*Exercise 2.1*/

const copyObject = (object) => ({...object});

const user1 = {
    fullname: "Marc Tremblay",
    username:"Furry99",
    passowrd:"pa$$word"
}

user2 = copyObject(user1);
console.log(user1);
console.log(user2);


