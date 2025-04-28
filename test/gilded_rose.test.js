const {Shop, Item} = require("../src/gilded_rose");

describe("Gilded Rose", ()=> {
  it("should foo", function() {
    const gildedRose = new Shop([new Item("foo", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("foo");
  });

  it("Items degrade by one with each passing day", () => {
    const shop = new Shop([new Item("foo", 5, 5)])
    const result = shop.updateQuality();
    expect(result[0].sellIn).toBe(4)
    expect(result[0].quality).toBe(4)
  })

  it("Items degrade by two by passed date with each passing day", () => {
    const shop = new Shop([new Item("foo", 0, 5)])
    const result = shop.updateQuality();
    expect(result[0].sellIn).toBeLessThanOrEqual(0)
    expect(result[0].quality).toBe(3)
  })
});
