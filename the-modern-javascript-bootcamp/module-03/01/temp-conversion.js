let cl = console.log;
let fahrenheit = 50;

// const tempConversion = function (fahrenheit, tempType) {
//   let celsius = -32;
//   let kelvin = 459.67;
//   let type = tempType === "celsius" ? celsius : kelvin;
//   return ((fahrenheit + type) * 5) / 9;
// };

let celsius = ((fahrenheit - 32) * 5) / 9;
let kelvin = ((fahrenheit + 459.67) * 5) / 9;

cl(celsius);
cl(kelvin);
