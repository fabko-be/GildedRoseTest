export default abstract class Item {
  name: string;
  sellIn: number;
  quality: number;
  abstract updateQuality(): void;
  abstract updateSellIn(): void;

  constructor(name: string, sellIn: number, quality: number){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}