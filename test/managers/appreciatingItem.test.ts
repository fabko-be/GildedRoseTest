import AppreciationItem from "../../src/managers/appreciatingItem"

describe("Appreciating Item", () => {
  it("Items upgrade by one with each passing day", () => {
    const appreciatingItem = new AppreciationItem("Aged Brie", 5, 5);
    appreciatingItem.updateSellIn();
    appreciatingItem.updateQuality();
    expect(appreciatingItem.quality).toBe(6);
    expect(appreciatingItem.sellIn).toBe(4);
  });

  it("Items can't be upgrade more than 50 quality", () => {
    const appreciatingItem = new AppreciationItem("Aged Brie", 5, 50);
    appreciatingItem.updateSellIn();
    appreciatingItem.updateQuality();
    expect(appreciatingItem.quality).toBe(50);
    expect(appreciatingItem.sellIn).toBe(4);
  })
});