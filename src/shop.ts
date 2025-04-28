import Item from "./item";

export const MAX_QUALITY = 50;
export const MIN_QUALITY = 0;
export const LEGENDARY_SELLIN = Infinity

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