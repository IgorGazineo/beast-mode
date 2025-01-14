const cl = console.log;

let isAccountLocked = false;
let userRole = "user";

if (isAccountLocked) {
  cl("Is account locked");
} else if (userRole === "admin") {
  cl("Welcome Admin!");
} else {
  cl("Welcome!");
}

let temp = 45;

if (temp === 45) {
  cl("Go for it. It is pretty nice.");
} else if (temp === 31) {
  cl("It is freezing outside!");
} else if (temp === 110) {
  cl("It is hot outside!");
}
