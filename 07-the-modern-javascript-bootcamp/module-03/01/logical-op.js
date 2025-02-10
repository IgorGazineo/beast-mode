const cl = console.log;

let temp = 100;

if (temp >= 60 && temp <= 90) {
  cl("It is pretty nice out");
} else if (temp <= 0 || temp >= 120) {
  cl("Do not go outside");
} else {
  cl("Eh. Do what you want");
}

let isGuestOneVegan = false;
let isGuestTwoVegan = false;

if (isGuestOneVegan && isGuestTwoVegan) {
  cl("Only offer up vegan dishes.");
} else if (isGuestOneVegan || isGuestTwoVegan) {
  cl("Make sure to offer up some vegan options.");
} else {
  cl("Offer up anything on the menu.");
}
