// import { apiKey } from "./util.js";
// import value from "./util.js";
// import userNameD, { userName1, userName2 } from "./util.js";
// import  from "./util.js";
import * as usersName from "./util.js";
console.log(usersName.default);

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`My name is ${this.name}. I am ${this.age} years old.`);
  }
}

const user1 = new User("Igor", 37);

user1.greet();

const hobbies = ["Sports", "Cooking", "Coding"];

const newHobbies = hobbies.map((hobbie, index) => `${hobbie}-${index + 1}`);

console.log(newHobbies);

const names = ["Isabella", "Luara", "Igor"];
const arrayOfObjectNames = names.map((name) => ({ name }));

console.log(arrayOfObjectNames);

const userNameData1 = ["Igor", "Rebouças"];
const [firstName, lastName] = userNameData1;

console.log(`My name is ${firstName} ${lastName}`);

const userNameData2 = {
  name: "Igor",
  age: 37,
};

const { name, age } = userNameData2;

console.log(`My name is ${name}. I am ${age} years old.`);

const guests1 = ["Isabella", "Luara", "Luana"];
const guests2 = ["Igor", "Eduardo", "Gustavo"];

const totalGuests = [...guests1, ...guests2];

console.log(totalGuests);

const guestList = { guest1: "Isabella", guest2: "Luara" };

const guestListUpdated = { ...guestList, guest3: "Igor" };

console.log(guestListUpdated);
/*

*/
