import Item from "../item"
import {MAX_QUALITY} from "../shop";

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

    if (this.quality + bonus > MAX_QUALITY) {
      this.quality = MAX_QUALITY;
    } else {
      this.quality += bonus;
    }
  }

  updateSellIn() {
    this.sellIn--;
  }
}