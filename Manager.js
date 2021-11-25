const Order = require("./Order.js");
const Barista = require("./Barista.js");

class Manager {
  constructor() {
    this.lastOrderId = null;
    this.checkOrderList();
  }

  checkOrderList() {
    setInterval(() => {
      if (Order.orderList.length > 0) {
        // 주문 있을 경우
        const lastIndex = Order.orderList.length - 1;
        const currentLastOrder = Order.orderList[lastIndex].id;
        if (this.lastOrderId !== currentLastOrder) {
          this.lastOrderId = currentLastOrder;
          this.handOrderToBarista(this.lastOrderId);
        }
      }
    }, 1000);
  }

  handOrderToBarista(id) {
    // Barista에게 만들어야할 음료의 아이디를 줌
    Barista.makeDrink(id);
  }

  updateWaitingListBoard(obj) {
    console.log(obj);
    DashBoard.addToDashBoard(obj);
  }
}

const manager = new Manager();
console.log(manager);

module.exports = new Manager();
