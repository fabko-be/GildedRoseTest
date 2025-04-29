import Item from "../item"

export default class NormalItem extends Item {

  updateQuality() {
    let minus = 2
    if (this.quality - minus <= 0) {
      this.quality = 0;
    } else {
      this.quality -= minus;
    }
  }

  updateSellIn() {
    this.sellIn--;
  }
}