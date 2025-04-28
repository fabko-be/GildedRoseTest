import Item from "../item";

export default class NormalItem extends Item {
  updateQuality() {
    let minus = this.sellIn <= 0 ? 2 : 1
    if (this.quality - minus <= 0) this.quality = 0;
  }

  updateSellIn() {
    this.sellIn--;
  }
}