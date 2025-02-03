import { apiKey } from "./util.js";
console.log(apiKey);
// import number from "./util.js";
// console.log(number);
import * as usersName from "./util.js";

console.log(`O nome mais bonito do objeto é: ${usersName.userName1}`);

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`My name is ${this.name}. I am ${this.age} years old.`);
  }
}

const user1 = new User("Isabella", 3);

user1.greet();

const hobbies = ["Sports", "Cooking", "Coding"];

const newHobbies = hobbies.map((item, index) => `${item}-${index + 1}`);

console.log(newHobbies);

const names = ["Isabella", "Luara", "Igor"];

const arrayOfObjectNames = names.map((item) => ({ name: item }));

console.log(arrayOfObjectNames);

const userNameData = ["Igor", "Rebouças"];

const [firstName, lastName] = userNameData;

console.log(firstName, lastName);

const userNameData2 = {
  name: "Igor",
  age: 37,
};

const { name, age } = userNameData2;

console.log(name, age);

const guests1 = ["Isabella", "Luara", "Luana"];
const guests2 = ["Igor", "Eduardo", "Gustavo"];

const totalGuests = [...guests1, ...guests2];

console.log(totalGuests);

const guestList = { guest1: "Isabella", guest2: "Luara" };

const guestListUpdated = { ...guestList, guest3: "Igor" };

console.log(guestListUpdated);
