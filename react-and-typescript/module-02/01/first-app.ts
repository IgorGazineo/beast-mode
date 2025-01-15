let userName = "Max";

// userName = 34;
userName = "Max";

let userAge = 34;

let isValid = true;

// -------------

type StringOrNum = string | number;

let userID: StringOrNum = "abc1";
userID = 123;

// userID = true;

// let user: object;

type User = {
  name: string;
  age: number;
  isAdmin: boolean;
  id: string | number;
};

let user: User;

user = {
  name: "Max",
  age: 34,
  isAdmin: true,
  id: "abc", // 123
};

// user = {};

// let hobbies: Array<string>;
let hobbies: { name: string; age: number }[];

hobbies = [{ name: "Igor", age: 37 }];
// hobbies = [1, 2, 3]

function add(a: number, b: number): number {
  const result = a + b;
  return result;
}

type AddFn = (a: number, b: number) => number;

function calculate(a: number, b: number, calcFn: AddFn) {
  calcFn(a, b);
}

calculate(2, 5, add);

interface Credentials {
  password: string;
  email: string;
}

// interface Credentials {
//   mode: string;
// }

let creds: Credentials;

creds = {
  password: "abc",
  email: "test@gmail",
};

class AuthCredentials implements Credentials {
  userName: string;
  password: string;
  email: string;
}

function login(credentials: Credentials) {}

login(new AuthCredentials());

// type Admin = {
//   permission: string[];
// };

// type AppUser = {
//   userName: string;
// };

// type AppAdmin = Admin & AppUser;

interface Admin {
  permission: string[];
}

interface AppUser {
  userName: string;
}

interface AppAdmin extends Admin, AppUser {}

let admin: AppAdmin = {
  permission: ["login"],
  userName: "Max",
};

type Role = "admin" | "user" | "editor";

let role: Role;

role = "admin";
// role = 'abc'

function performAction(action: string | number, role: Role) {
  if (role === "admin" && typeof action === "string") {
    // ...
  }
}

let roles: Array<Role>;
roles = ["admin", "editor"];

type DataStorage<T> = {
  storage: T[];
  add: (data: T) => void;
};

const textStorage: DataStorage<string> = {
  storage: [],
  add(data) {
    this.storage.push(data);
  },
};

textStorage.add("Igor");
textStorage.add("Luara");
textStorage.add("Isabella");

console.log(textStorage.storage);
