// import { apiKey } from "./util.js";
// import number from "./util.js";
// import * as users from "./util.js";

// console.log(apiKey, number);
// console.log(users.userName1);

// class User {
//   constructor(name = "User", age = 0) {
//     this.name = name;
//     this.age = age;
//   }

//   greet() {
//     console.log(`Hello ${this.name}.`);
//   }
// }

// const user1 = new User("Igor");

// console.log(user1);

// const hobbies = ["Sports", "Cooking", "Coding"];

// const newHobbies = hobbies.map((item, index) => `${item}-${index + 1}`);

// console.log(newHobbies);

const guestList = {
  guest1: "Isabella",
  guest2: "Luara",
};

const guestListUpdated = { ...guestList, guest3: "Igor" };

console.log(guestListUpdated);
