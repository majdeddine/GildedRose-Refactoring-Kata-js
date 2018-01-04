describe('Gilded Rose', function () {

  it('should foo', function () {
    const gildedRose = new Shop([new Item('foo', 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toEqual('foo');
  });

  // it("sellIn should decrease by one after each update", function(){
  //   const gildedRose = new Shop ([ new Item])
  // })

  describe('normal items', function () {

    it('quality should decrease by one', function () {
      const gildedRose = new Shop([new Item('foo', 2, 3)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(2);
    });

    it('quality should decrease by two when expiered', function () {
      const gildedRose = new Shop([new Item('foo', -1, 3)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(1);
    });
  });
});
