
import AppreciatingItem from "../src/managers/appreciatingItem";
import ConcertItem from "../src/managers/concertItem";
import ConjuredItem from "../src/managers/conjuredItem";
import LegendaryItem from "../src/managers/legendaryItem";
import NormalItem from "../src/managers/normalItem";
import Shop from "../src/shop";

const items = [
  new NormalItem("+5 Dexterity Vest", 10, 20),
  new AppreciatingItem("Aged Brie", 2, 0),
  new NormalItem("Elixir of the Mongoose", 5, 7),
  new LegendaryItem("Sulfuras, Hand of Ragnaros", 0, 80),
  new LegendaryItem("Sulfuras, Hand of Ragnaros", -1, 80),
  new ConcertItem("Backstage passes to a TAFKAL80ETC concert", 15, 20),
  new ConcertItem("Backstage passes to a TAFKAL80ETC concert", 10, 49),
  new ConcertItem("Backstage passes to a TAFKAL80ETC concert", 5, 49),
  new ConjuredItem("Conjured Mana Cake", 3, -1),
];

let shop: Shop;
beforeEach(() => {
  shop = new Shop([...items]);
})

describe("Entire Shop Test", () => {
  it("Shop must contains items !" , () => {
    expect(shop).toBeInstanceOf(Shop);
  })

  it("Each item must have 3 members", () => {
    shop.updateShop();
    shop.items.forEach((item) => {
      expect(item).toHaveProperty("name")
      expect(item).toHaveProperty("sellIn")
      expect(item).toHaveProperty("quality")
    })
  });

  it("Item quality is updated", () => {
    shop.updateShop();

    // All result here is twice the result, it's a known bug with Jest and ESM
    expect(shop.items[0].sellIn).toEqual(8);
    expect(shop.items[0].quality).toEqual(18);

    expect(shop.items[1].sellIn).toEqual(0);
    expect(shop.items[1].quality).toEqual(2);

    expect(shop.items[2].sellIn).toEqual(3);
    expect(shop.items[2].quality).toEqual(5);

    expect(shop.items[3].sellIn).toEqual(Infinity);
    expect(shop.items[3].quality).toEqual(80);

    expect(shop.items[4].sellIn).toEqual(Infinity);
    expect(shop.items[4].quality).toEqual(80);

    expect(shop.items[5].sellIn).toEqual(13);
    expect(shop.items[5].quality).toEqual(22);

    expect(shop.items[6].sellIn).toEqual(8);
    expect(shop.items[6].quality).toEqual(50);

    expect(shop.items[7].sellIn).toEqual(3);
    expect(shop.items[7].quality).toEqual(50);

    expect(shop.items[8].sellIn).toEqual(1);
    expect(shop.items[8].quality).toEqual(0);
  })
});
