import InfinityItem from "../../src/managers/legendaryItem";

describe("Legendary Item", () => {
  const quality = 5
  const sellIn = Infinity;

  it("Legendary must not be degraded and can always be sold ", () => {
    const normalItem = new InfinityItem("Ragnaros", 5, quality);
    normalItem.updateQuality();
    normalItem.updateSellIn();
    expect(normalItem.quality).toBe(quality);
    expect(normalItem.sellIn).toBe(sellIn);
  });
});