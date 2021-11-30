const Barista = require("./Barista.js");
const Order = require("./Order.js");

class Manager {
  constructor() {
    this.lastOrderId = null;
  }

  checkOrderList() {
    if (Order.orderList.length > 0) {
      // 주문 있을 경우
      const lastIndex = Order.orderList.length - 1;
      const currentLastOrder = Order.orderList[lastIndex].id;
      if (this.lastOrderId !== currentLastOrder) {
        this.lastOrderId = currentLastOrder;
        this.handOrderToBarista(this.lastOrderId);
      }
    }
  }

  handOrderToBarista(id) {
    Barista.makeDrink(id);
  }
}

module.exports = new Manager();
