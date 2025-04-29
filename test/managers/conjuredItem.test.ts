import ConjuredItem from "../../src/managers/conjuredItem"

describe("Regular Item", () => {
  it("Items degrade by 2 with each passing day", () => {
    const conjuredItem = new ConjuredItem("Sword", 5, 5);
    conjuredItem.updateSellIn();
    conjuredItem.updateQuality();
    expect(conjuredItem.quality).toBe(3);
    expect(conjuredItem.sellIn).toBe(4);
  });

  it("Items can't have less than 0 quality", () => {
    const conjuredItem = new ConjuredItem("Sword", 5, 0);
    conjuredItem.updateSellIn();
    conjuredItem.updateQuality();
    expect(conjuredItem.quality).toBe(0);
    expect(conjuredItem.sellIn).toBe(4);
  });
});