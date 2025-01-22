function add(n1: number, n2: number) {
  return n1 + n2;
}

function printResult(num: number): void {
  console.log("Result: " + num);
}

printResult(add(3, 5));

let combineValues: (n1: number, n2: number) => number;

combineValues = add;

console.log(combineValues(8, 8));
