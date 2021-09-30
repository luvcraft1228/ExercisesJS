const user1 = {
  fullname: "Marc Tremblay",
  username: "Furry99",
  password: "pa$$word",
};

function deleteFind(char, obj) {
  
  for (let value of Object.entries(obj)) //let key in object
  {
    if (value[1].includes(char)) {
      delete obj[value[0]];
    }
  }
}
console.log(user1);
deleteFind("a", user1);
console.log(user1);
