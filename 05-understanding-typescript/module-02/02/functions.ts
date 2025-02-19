function add(n1: number, n2: number): number {
  return n1 + n2;
}

const combineValues: (a: number, b: number) => number = function (n1, n2) {
  return n1 + n2;
};

console.log(combineValues(9, 9));

const addAndHandle = function (
  n1: number,
  n2: number,
  cb: (a: number) => void
) {
  const result = n1 + n2;

  cb(result);
};

addAndHandle(10, 5, function (result) {
  console.log(result);
});


