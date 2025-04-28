import AppreciationItem from "../../src/managers/appreciatingItem"

describe("Appreciating Item", () => {
  it("Items upgrade by one with each passing day", () => {
    const appreciatingItem = new AppreciationItem("Aged Brie", 5, 5);
    appreciatingItem.updateQuality();
    appreciatingItem.updateSellIn();
    expect(appreciatingItem.quality).toBe(6);
    expect(appreciatingItem.sellIn).toBe(4);
  });
});