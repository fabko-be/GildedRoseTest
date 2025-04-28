import Item from "./item";

export default class Shop {
  private readonly items: Item[];
  constructor(items: Item[] = []){
    this.items = items;
  }

  updateQuality(): Item[] {
    for (let item of this.items) {
      item.updateQuality();
      item.updateSellIn();
    }
    return this.items;
  }
}