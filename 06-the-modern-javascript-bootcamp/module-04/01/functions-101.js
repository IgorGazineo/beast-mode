let greetUser = function () {
  console.log("Welcome " + process.argv[2]);
};

// greetUser();

function convertFahrenheitToCelsius(temp) {
  return ((temp - 32) * 5) / 9;
}

console.log(convertFahrenheitToCelsius(32));
console.log(convertFahrenheitToCelsius(68));

