class UserCreator {
  //Public class level static method
  //shared by all instances
  static describe() {
    console.log("Creates Users");
  }

  //Private static value
  // This private staic field can only be accessed within the constructor of the class
  // where the private static field is defined
  // also this is because this is not an instance field
  static #count = 0;
  //Public instance field
  //so every object gets its own loggedIn field
  // This is stored in the [[fields]] property of the function object UserCreator.
  // Then its added to every user object
  loggedIn = false;
  // This is a private property. First its defined in [[Fields]] propertyof UserCreator function object
  // When a user is created, the user object gets this private property stored in its new hidden property
  // called [[PrivateElements]]. Please note that this is an instnace variable so every user object gets it
  #score;
  constructor(name, score) {
    if (UserCreator.#count >= 2) {
      throw Error("Max users reached");
    }
    this.name = name;
    this.#score = score;
    UserCreator.#count++;
  }
  increment() {
    this.#score++;
  }
  login() {
    this.loggedIn = true;
  }
  printScore() {
    console.log(this.#score);
  }
}

const user1 = new UserCreator("Ari", 3);
user1.login();
user1.increment();
console.log(user1.loggedIn);
console.log(user1.score);
user1.printScore();
const user2 = new UserCreator("Jae", 5);
console.log(user2.loggedIn);
