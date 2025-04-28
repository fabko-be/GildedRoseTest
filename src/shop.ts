import Item from "./item";

export const MAX_QUALITY = 50;
export const MIN_QUALITY = 0;
export const LEGENDARY_SELLIN = Infinity

export default class Shop {
  private readonly items: Item[];
  constructor(items: Item[] = []){
    this.items = items;
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