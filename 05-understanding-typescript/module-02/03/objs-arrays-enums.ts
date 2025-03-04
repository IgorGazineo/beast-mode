enum Role {
  ADMIN,
  AUTHOR,
  READ_ONLY,
}

const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: { ADMIN: number; AUTHOR: number; READ_ONLY: number };
} = {
  name: "Maximilian",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: Role,
};

console.log(Role.ADMIN);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}
