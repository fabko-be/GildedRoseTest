import Item from "../item"
import {MAX_QUALITY} from "../shop";

export default class AppreciatingItem extends Item {

  updateQuality() {
    const bonus = 1
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