let isVegan = process.argv;
let isGuestOneVegan = isVegan[2] === "true" ? true : false;
let isGuestTwoVegan = isVegan[3] === "true" ? true : false;

if (isGuestOneVegan && isGuestTwoVegan) {
  console.log("Only offer up vegan dishes.");
} else if (isGuestOneVegan || isGuestTwoVegan) {
  console.log("Make sure to offer up some vegan options.");
} else {
  console.log("Offer up anything on the menu.");
}
