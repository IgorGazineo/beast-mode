let userInput: unknown;
let userName: string = "Igor";

userInput = 5;
userInput = "5";
if (typeof userInput === "string") {
  userName = userInput;
}

function generateError(message: string, code: number): never {
  throw { message, errorCode: code };
}

const result = generateError("An error occurred!", 500);

console.log(result);
