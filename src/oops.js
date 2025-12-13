const userCreator = (name, score) => {
  const newUser = Object.create(userFunctionStore);
  newUser.name = name;
  newUser.score = score;
  return newUser;
};

const userFunctionStore = {
  increment: function () {
    this.score++;
  },
  login: function () {
    console.log("Logged In");
  },
};

const user1 = userCreator("Ari", 3);
const user2 = userCreator("Jae", 5);

user1.increment();
console.log(user1.score);
user2.increment();
console.log(user2.score);

console.log(user1.hasOwnProperty("score"));
console.log(user1.hasOwnProperty("increment"));
