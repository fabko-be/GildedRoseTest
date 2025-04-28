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
});