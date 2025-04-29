import Item from "../item"

export default class InfinityItem extends Item {

  updateQuality() {}

  updateSellIn() {
    if(this.sellIn === Infinity) return
    this.sellIn = Infinity;
  }
}