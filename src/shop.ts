import Item from "./item";

export const MAX_QUALITY = 50;
export const MIN_QUALITY = 0;
export const LEGENDARY_SELLIN = Infinity

export default class Shop {
  readonly items: Item[];
  constructor(items: Item[] = []){
    this.items = items;
  }

  updateShop = () => {
    this.items.forEach(item => {
      item.updateSellIn();
      item.updateQuality();
    })
  }

  // No more used, was part of the correction for ../test/gilded_rose.bak.ts test

  // updateQuality(): Item[] {
  //   for (let item of this.items) {
  //     item.updateSellIn();
  //     item.updateQuality();
  //   }
  //   return this.items;
  // }
}