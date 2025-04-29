import LegendaryItem from "../../src/managers/legendaryItem";
import {LEGENDARY_SELLIN} from "../../src/shop";

describe("Legendary Item", () => {
  const quality = 5

  it("Legendary must not be degraded and can always be sold ", () => {
    const legendaryItem = new LegendaryItem("Sulfuras", 5, quality);
    legendaryItem.updateSellIn();
    legendaryItem.updateQuality();
    expect(legendaryItem.quality).toBe(quality);
    expect(legendaryItem.sellIn).toBe(LEGENDARY_SELLIN);
  });

  it("Legendary must not be updated if sellIn is infinity", () => {
    const legendaryItem = new LegendaryItem("Sulfuras", LEGENDARY_SELLIN, quality);
    legendaryItem.updateSellIn();
    legendaryItem.updateQuality();
    expect(legendaryItem.quality).toBe(quality);
    expect(legendaryItem.sellIn).toBe(LEGENDARY_SELLIN);
  })
});