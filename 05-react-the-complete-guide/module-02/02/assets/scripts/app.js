import { apiKey } from "./util.js";
console.log(apiKey);
import number from "./util.js";
console.log(number);

import * as objecNames from "./util.js";

let n = 1;
for (let i = 0; i < 2; i++) {
  console.log(objecNames[`${"userName" + n}`]);
  n++;
}

console.log(objecNames.default);

// -------------------------------------------------

const User = class User {
  constructor(name, age, email) {
    this.name = name;
    this.age = age;
    this.email = email;
  }

  greet() {
    console.log(this);
  }
};

console.log(new User("Igor", 37));

const user1 = new User("Igor", 37, "igor@gmail.com");

user1.greet();

// -------------------------------------------------

const numbers = [10, 20, 30, 40];

const result = numbers.findIndex((number) => number === 50);

console.log(result);

const hobbies = ["Sports", "Cooking", "Coding"];
const newHobbies = hobbies.map((hobbie, index) => hobbie + "-" + (index + 1));

console.log(newHobbies);

const names = ["Isabella", "Luara", "Igor"];
const arrayOfObjectNames = names.map((name) => ({ name }));

for (let i = 0; i < arrayOfObjectNames.length; i++) {
  console.log(arrayOfObjectNames[i].name);
}
// -------------------------------------------------

const aula24 = function (userNameData1, userNameData2) {
  const [firstName, lastName] = userNameData1;

  console.log(firstName, lastName);

  const { name, age } = userNameData2;

  console.log(name, age);
};

aula24(["Igor", "Rebouças"], { name: "Igor", age: 37 });

// -------------------------------------------------

const aula26 = function (guests1, guests2, guestList) {
  const totalGuests = [...guests1, ...guests2];

  console.log(totalGuests);

  const guestListUpdated = { ...guestList, guests3: "Igor" };

  console.log(guestListUpdated);
};

aula26(["Isabella", "Luara", "Luana"], ["Igor", "Eduardo", "Gustavo"], {
  guest1: "Isabella",
  guest2: "Luara",
});

// -------------------------------------------------
