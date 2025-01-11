import { send } from "./request.mjs";
import { read } from "./response.mjs";

function req(url, data) {
  send(url, data);
  return read();
}

const responsData = req("https://google.com", "hello");

console.log(responsData);
