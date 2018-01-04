describe('Gilded Rose', () => {
  it('should foo', () => {
    const gildedRose = new Shop([new Item('foo', 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toEqual('foo');
  });

  describe('sellIn',function(){
    it('sellIn should decrease by one after each update', () => {
      const gildedRose = new Shop([new Item()]);
    });
  })

  describe('quality', function(){
    it('should have minimum value of 0', function(){
      const gildedRose = new Shop([new Item('foo', 0, 0)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(0);
    })

    it('should have a maximum value of 50', function(){
      const gildedRose = new Shop([new Item('Aged Brie', 4, 50)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(50);
    })
  })

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

  describe('Sulfuras', () => {
    it('quality should never change', () => {
      const gildedRose = new Shop([new Item('Sulfuras, Hand of Ragnaros', 0, 10)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(10);
    });

    it('sellIn date should never change', () => {
      const gildedRose = new Shop([new Item('Sulfuras, Hand of Ragnaros', 0, 10)]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toEqual(0);
    });
  });

  describe('Backstage passes', () => {
    it('qualtiy should increase by one', () => {
      const gildedRose = new Shop([new Item('Backstage passes to a TAFKAL80ETC concert', 11, 10)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(11);
    });

    it('qualtiy should increase by two', () => {
      const gildedRose = new Shop([new Item('Backstage passes to a TAFKAL80ETC concert', 10, 11)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(13);
    });

    it('qualtiy should increase by three', () => {
      const gildedRose = new Shop([new Item('Backstage passes to a TAFKAL80ETC concert', 5, 11)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(14);
    });

    it('qualtiy should return 0', () => {
      const gildedRose = new Shop([new Item('Backstage passes to a TAFKAL80ETC concert', 0, 11)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(0);
    });
  });
});
