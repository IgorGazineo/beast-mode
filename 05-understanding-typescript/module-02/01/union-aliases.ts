type Comb = number | string;

function combine(in1: Comb, in2: Comb) {
  let result: Comb;
  if (typeof in1 === "number" && typeof in2 === "number") {
    result = in1 + in2;
  } else {
    result = in1.toString() + in2.toString();
  }
  return result;
}

const combinedAges = combine(30, 26);
const combinedStrings = combine("30", "10");

console.log(combinedAges);
console.log(combinedStrings);
