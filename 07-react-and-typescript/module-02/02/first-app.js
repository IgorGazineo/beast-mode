var userID = "abc1";
userID = 123;
var user;
user = {
    name: "Igor",
    age: 37,
    isAdmin: true,
    id: 234,
};
var hobbies;
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
function add(n1, n2) {
    return n1 + n2;
}
// console.log(add(12, 30));
function calculate(a, b, calcFn) {
    return calcFn(a, b);
}
calculate(7, 7, add);
var user1 = {
    name: "Igor",
    age: 37,
};
var user2 = {
    name: "Isabella",
    age: 2,
};
var admin = { permissions: ["login"], userName: "Max" };
var admin2 = admin;
var role = "admin";
role = "user";
role = "editor";
function performAction(action, role) {
    if (role === "admin" && typeof action === "string") {
        console.log("O valor de role: ".concat(role));
    }
}
performAction("Greet", "admin");
/*
Aula - 23

dentro da função, crie uma condição que checa se o valor de "role" é igual a "admin"
e se o tipo do parâmetro "action" é "string".

caso a condição seja verdadeira, execute um console com o argumento: `O valor de role: ${role}`.

execute a função -> performAction('Greet', 'admin')

*/
