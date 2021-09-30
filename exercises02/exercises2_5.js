const user1 = {
  fullname: "Marc Tremblay",
  username: "Furry99",
  password: "pa$$word",
};

const getValue = (key, object) => 
(object[key] == undefined ? `Propriete ${key} inexistante` : object[key]);


console.log(getValue("fullname", user1));
console.log(getValue("patate", user1));


