const user1 = {
  fullname: "Marc Tremblay",
  username: "Furry99",
  password: "pa$$word",
};

function getValue(key, object) {
  return key in object ? object[key] : `Propriete ${key} inexistante`;
}

console.log(getValue("fullname", user1));
console.log(getValue("patate", user1));
