function userCreator(name, score) {
  this.name = name;
  this.score = score;
}

userCreator.prototype.increment = function () {
  this.score++;
};

userCreator.prototype.login = function () {
  console.log("login");
};

const user1 = new userCreator("Ari", 3);
user1.increment();
console.log(user1.score);
