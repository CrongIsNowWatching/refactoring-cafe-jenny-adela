const Manager = require("./Manager.js");
const menu = require("./menu.js");

class Barista {
  constructor() {
    this.status = {
      doing: false,
      done: true,
    };
    this.currentDrink = null;
  }

  makeDrink(id) {
    if (this.status.doing) {
      throw Error("지금 뭐 만드는 중이라 접수 못받아요");
    }

    this.currentDrink = id;

    const drink = menu.filter((e) => e.id === this.currentDrink)[0];
    const drinkTime = drink.time;
    this.updateStatus(true);
    this.notifyManager();

    setTimeout(() => {
      this.updateStatus(false);
      this.notifyManager();
      this.currentDrink = null;
    }, drinkTime);

    // 음료마다 만드는 시간이 다름
    // 지금 만드는 음료가 뭔지도 알아야 할 것 같아요
  }

  notifyManager() {
    // Manager한테 시작인지 끝인지 알림
    const { doing, done } = this.status;

    const obj = {
      id: this.currentDrink,
      status: {
        doing,
        done,
      },
    };

    console.dir(Manager);

    Manager.updateWaitingListBoard(obj);
  }

  updateStatus(isStart) {
    if (isStart) {
      this.status.doing = true;
      this.status.done = false;
    } else {
      this.status.doing = false;
      this.status.done = true;
    }
  }
}

module.exports = new Barista();
