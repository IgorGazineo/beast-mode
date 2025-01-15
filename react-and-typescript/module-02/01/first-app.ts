let userName = "Max";

// userName = 34;
userName = "Max";

let userAge = 34;

let isValid = true;

// -------------

let userID: string | number = "abc1";
userID = 123;

// userID = true;

// let user: object;

let user: {
  name: string;
  age: number;
  isAdmin: boolean;
  id: string | number;
};

user = {
  name: "Max",
  age: 34,
  isAdmin: true,
  id: "abc", // 123
};

// user = {};
