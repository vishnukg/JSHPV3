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

  // This will fail, as
  // "this" object doesnt point
  // to the object which invoked the function.
  // Arrow functions dervie this from the scope around it.
  // i.e it looks up for this.
  // Where as normal method dervies this from the object where the
  // method is defined. function looks left for deriving "this" object
  increment2: () => {
    this.score += 2;
  },
};

const user1 = userCreator("Ari", 3);

user1.increment();
console.log(user1.score);
user1.increment2();
console.log(user1.score);
