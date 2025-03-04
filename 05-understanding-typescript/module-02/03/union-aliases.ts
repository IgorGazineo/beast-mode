type Combinable = number | string;

function combine(input1: Combinable, input2: Combinable) {
  let result: number | string;
  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  } else {
    result = String(input1) + String(input2);
  }
  return result;
}

const combinedAges = combine(30, 26);
console.log(combinedAges);
const combinedNames = combine("Max", "Anna");
console.log(combinedNames);

/*

*/
