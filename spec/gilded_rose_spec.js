describe('Gilded Rose', () => {
  it('should foo', () => {
    const gildedRose = new Shop([new Item('foo', 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toEqual('foo');
  });

  it('sellIn should decrease by one after each update', () => {
    const gildedRose = new Shop([new Item()]);
  });

  describe('normal items', () => {
    it('quality should decrease by one', () => {
      const gildedRose = new Shop([new Item('foo', 2, 3)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(2);
    });

    it('quality should decrease by two when expiered', () => {
      const gildedRose = new Shop([new Item('foo', -1, 3)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(1);
    });
  });

  describe('Aged Brie', () => {
    it('quality should increase over time', () => {
      const gildedRose = new Shop([new Item('Aged Brie', 2, 2)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(3);
    });
  });
});
