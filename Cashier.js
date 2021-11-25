const menu = require("./menu.js");
const Order = require("./Order.js");

class Cashier {
  constructor() {
    this.name = "Adela";
    this.currentOrderId = null;
    this.priceFromCustomer = null;
  }

  getOrder(newOrderId) {
    this.currentOrderId = newOrderId;
    this.addToOrderList();
  }

  addToOrderList() {
    Order.pushOrderList(this.currentOrderId);
  }

  //   giveOrderNumToCustomer() {
  //     return Order.getOrderNum();
  //   }

  //   giveChargeToCustomer() {
  //     const currentMenu = menu.filter((e) => e.id === this.currentOrderId)[0];
  //     const charge = this.priceFromCustomer - currentMenu.price;
  //     if (charge < 0) {
  //       throw Error("돈이 부족한데 어케 거슬러?!?!?!");
  //     }
  //     return charge;
  //   }

  //   getMoneyFromCustomer(money) {
  //     this.priceFromCustomer = money;
  //   }
}

module.exports = new Cashier();
