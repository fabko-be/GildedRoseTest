import NormalItem from "../../src/managers/normalItem"

describe("Regular Item", () => {
  it("Items degrade by one with each passing day", () => {
    const normalItem = new NormalItem("Sword", 5, 5);
    normalItem.updateSellIn();
    normalItem.updateQuality();
    expect(normalItem.quality).toBe(4);
    expect(normalItem.sellIn).toBe(4);
  });

  it("Items degrade by two by passed date with each passing day", () => {
    const regularItem = new NormalItem("Sword", -1, 5);
    regularItem.updateSellIn();
    regularItem.updateQuality();
    expect(regularItem.quality).toBe(3);
  });

  it("Items quality can't be under 0", () => {
    const regularItem = new NormalItem("Sword", 5, 0);
    regularItem.updateSellIn();
    regularItem.updateQuality();
    expect(regularItem.quality).toBe(0);
  });
});