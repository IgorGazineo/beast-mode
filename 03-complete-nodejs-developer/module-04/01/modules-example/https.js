// import { send } from "./request.mjs";
const { send } = require("./request");
const { read } = require("./response");

function req(url, data) {
  send(url, data);
  return read();
}

const responsData = req("https://google.com", "hello");

console.log(responsData);
