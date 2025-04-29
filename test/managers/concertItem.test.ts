import ConcertItem from "../../src/managers/concertItem"
import {MIN_QUALITY} from "../../src/shop";

describe("Concert Item", () => {
  it("Items upgrade by 3 if SellIn is 5 or less but not 0", () => {
    const concertItem = new ConcertItem("Backstage Pass", 5, 5);
    concertItem.updateSellIn();
    concertItem.updateQuality();
    expect(concertItem.quality).toBe(8);
    expect(concertItem.sellIn).toBe(4);
  });

  it("Items upgrade by 2 if SellIn is 10 or less but higher than 5 ", () => {
    const concertItem = new ConcertItem("Backstage Pass", 8, 5);
    concertItem.updateSellIn();
    concertItem.updateQuality();
    expect(concertItem.quality).toBe(7);
    expect(concertItem.sellIn).toBe(7);
  });

  it("Items upgrade by one if SellIn is higher than 10", () => {
    const concertItem = new ConcertItem("Backstage Pass", 12, 5);
    concertItem.updateSellIn();
    concertItem.updateQuality();
    expect(concertItem.quality).toBe(6);
    expect(concertItem.sellIn).toBe(11);
  });

  it("Items has no quality if sellIn is null", () => {
    const concertItem = new ConcertItem("Backstage Pass", 1, 9);
    concertItem.updateSellIn();
    concertItem.updateQuality();
    expect(concertItem.quality).toBe(MIN_QUALITY);
    expect(concertItem.sellIn).toBe(0);
  });

});