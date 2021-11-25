const menu = require("./menu.js");

class Order {
  constructor() {
    this.orderList = [];
    this.orderNum = 0;
  }

  getOrderNum() {
    return this.orderNum;
  }

  pushOrderList(id) {
    const currentMenu = menu.filter((e) => e.id === id)[0];
    this.orderList.push(currentMenu);
    this.orderNum++;
  }
}

module.exports = new Order();
