function add(n1: number, n2: number): number {
  return n1 + n2;
}

let combineValues: (a: number, b: number) => number;

combineValues = add;

console.log(combineValues(8, 8));

function addAndHandle(n1: number, n2: number, cb: (a: number) => void) {
  const result = n1 + n2;
  cb(result);
}

addAndHandle(10, 5, (num) => {
  console.log(num);
});
