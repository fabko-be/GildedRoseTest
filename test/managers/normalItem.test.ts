import NormalItem from "../../src/managers/normalItem"

describe("Regular Item", () => {
  it("Items degrade by one with each passing day", () => {
    const normalItem = new NormalItem("Sword", 5, 5);
    normalItem.updateQuality();
    normalItem.updateSellIn();
    expect(normalItem.quality).toBe(4);
    expect(normalItem.sellIn).toBe(4);
  });

  it("Items degrade by two by passed date with each passing day", () => {
    const regularItem = new NormalItem("Sword", -1, 5);
    regularItem.updateQuality();
    regularItem.updateSellIn();
    expect(regularItem.quality).toBe(3);
  });
});