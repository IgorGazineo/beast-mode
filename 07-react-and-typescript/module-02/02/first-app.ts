let userID: number | string = "abc1";
userID = 123;

let user: {
  name: string;
  age: number;
  isAdmin: boolean;
  id: string | number;
};

user = {
  name: "Igor",
  age: 37,
  isAdmin: true,
  id: 234,
};

let hobbies: { name: string; age: number }[];

// hobbies = ["Sports", "Cooking", "Reading"];

hobbies = [
  {
    name: "Max",
    age: 34,
  },
  {
    name: "Igor",
    age: 36,
  },
];

function add(n1: number, n2: number): number {
  return n1 + n2;
}

// console.log(add(12, 30));

function calculate(a: number, b: number, calcFn: AddFn) {
  return calcFn(a, b);
}

calculate(7, 7, add);

type AddFn = (c: number, d: number) => number;

interface User {
  name: string;
  age: number;
}

const user1: User = {
  name: "Igor",
  age: 37,
};

const user2: User = {
  name: "Isabella",
  age: 2,
};

type Admin = {
  permissions: string[];
};

type AppUser = {
  userName: string;
};

type AppAdmin = Admin & AppUser;

const admin: AppAdmin = { permissions: ["login"], userName: "Max" };

interface Admin2 {
  permissions: string[];
}

interface AppUser2 {
  userName: string;
}

interface AppAdmin2 extends Admin2, AppUser2 {}

const admin2: AppAdmin2 = admin;

let role: Role = "admin";

role = "user";
role = "editor";
// role = "abc";

type Role = "user" | "admin" | "editor";

function performAction(action: string | number, role: Role) {
  if (role === "admin" && typeof action === "string") {
    console.log(`O valor de role: ${role}`);
  }
}

performAction("Greet", "admin");

/*
Aula - 25

ao final do código, adicione o código abaixo:
let roles1: Array<Role>;
roles1 = ['admin', 'editor'];

let roles2: Role[];
roles2 = ['admin', 'editor'];

type DataStorage<T> = {
	storage: T[];
	add: (data: T) => void;
};

const textStorage: DataStorage<string> = {
	storage: [],
	add(data) {
		this.storage.push(data);
	}
}

const userStorage: DataStorage<User> = {
	storage: [],
	add(user) {}
}

function merge<T, U>(a: T, b: U) {
	return {
		...a,
		...b
	}
}

const newUser = merge<{name: string}, {age: number}>({name: 'Max'}, {age: 34}) {

}
*/
