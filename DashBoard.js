const menu = require("./menu.js");

class DashBoard {
  constructor() {
    this.drinkDashBoard = [];
  }

  printDashBoard() {
    const result = this.drinkDashBoard.reduce((acc, val) => {
      const { id, status } = val;
      const { doing, done } = status;

      const drink = menu.filter((e) => e.id === id)[0];
      const { name } = drink;

      const drinkState = doing ? "제조중" : "제조완료";

      const str = `음료: ${name}, 상태: ${drinkState}`;
      acc += str + "\n";

      return acc;
    }, ``);

    console.log(result);
  }

  addToDashBoard(obj) {
    this.drinkDashBoard.push(obj);
    this.printDashBoard();
  }
}

module.exports = new DashBoard();
