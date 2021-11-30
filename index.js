const Cashier = require("./Cashier.js");
const Manager = require("./Manager.js");

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("메뉴: 1. 아메리카노(1s)    2. 카페라떼(2s)    3. 프라프치노(3s)");
setInterval(() => {
  Manager.checkOrderList();
}, 1000);

rl.on("line", (input) => {
  Cashier.getOrder(+input);
});
