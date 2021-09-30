const user1 = {
  fullname: "Marc Tremblay",
  username: "Furry99",
  password: "pa$$word",
};

function getRandomValue(obj) {
  let indexes = Object.keys(obj);
  let index = Math.floor(Math.random() * indexes.length);
  return indexes[index];
}
console.log(getRandomValue(user1)); //pas key, value
