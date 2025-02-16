var userInput;
var userName = "Igor";
userInput = 5;
userInput = "5";
if (typeof userInput === "string") {
    userName = userInput;
}
function generateError(message, code) {
    if (code === undefined) {
        return "Missing the number error";
    }
    else {
        throw { message: message, errorCode: code };
    }
}
var result = generateError("An error occurred!", 400);
console.log(result);
