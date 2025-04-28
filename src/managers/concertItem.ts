import Item from "../item"

export default class ConcertItem extends Item {

  updateQuality() {
    if (this.sellIn <= 0) return this.quality = 0

    let bonus = 1;

    switch (true) {
      case (this.sellIn <= 5):
        bonus = 3;
        break;
      case (this.sellIn <= 10):
        bonus = 2;
        break;
    }

    this.quality += bonus;
  }

  updateSellIn() {
    this.sellIn--;
  }
}