class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items = []) {
    this.items = items;
  }

  updateNormalItem(i) {
    if (this.items[i].quality > 0) {
      this.items[i].quality -= 1;
      if (this.items[i].sellIn < 0) {
        this.items[i].quality = this.items[i].quality - 1;
      }
    }
    this.items[i].sellIn = this.items[i].sellIn - 1;
  }

  updateOtherItems(i) {
    if (this.items[i].quality < 50) {
      this.items[i].quality = this.items[i].quality + 1;
      if (this.items[i].name === 'Backstage passes to a TAFKAL80ETC concert') {
        if (this.items[i].sellIn < 11) {
          if (this.items[i].quality < 50) {
            this.items[i].quality = this.items[i].quality + 1;
          }
        }
        if (this.items[i].sellIn < 6) {
          if (this.items[i].quality < 50) {
            this.items[i].quality = this.items[i].quality + 1;
          }
        }
      }
    }
  }

  // updateSellIn(i) {
  //   if (this.items[i].name !== 'Sulfuras, Hand of Ragnaros') {
  //     this.items[i].sellIn = this.items[i].sellIn - 1;
  //   }
  // }

  updateExpiredItems(i) {
    if (this.items[i].sellIn < 0) {
      if (this.items[i].name === 'Aged Brie') {
        if (this.items[i].quality < 50) {
          this.items[i].quality = this.items[i].quality + 1;
        }
      } else if (this.items[i].name === 'Backstage passes to a TAFKAL80ETC concert') {
        this.items[i].quality = this.items[i].quality - this.items[i].quality;
      }
    }
  }


  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      if(this.items[i].name !== 'Aged Brie' && this.items[i].name !== 'Backstage passes to a TAFKAL80ETC concert' && this.items[i].name !== 'Sulfuras, Hand of Ragnaros'){
        this.updateNormalItem(i);
      }
      else if (this.items[i].name === 'Sulfuras, Hand of Ragnaros'){}
      else if (this.items[i].name === 'Aged Brie'){
        
      }
    }
    // for (let i = 0; i < this.items.length; i++) {
    //   if (this.items[i].name !== 'Aged Brie' && this.items[i].name !== 'Backstage passes to a TAFKAL80ETC concert') {
    //     if (this.items[i].name !== 'Sulfuras, Hand of Ragnaros') {
    //       this.updateNormalItem(i);
    //     }
    //   } else {
    //     this.updateOtherItems(i);
    //   }
    //
    //
    //   // this.updateSellIn(i);
    //
    //   this.updateExpiredItems(i);
    // }

    return this.items;
  }
}
const item = new Item('Sulfuras, Hand of Ragnaros', 1, 10);
const gildedRose = new Shop([item]);
var items = gildedRose.updateQuality();
console.log(items[0]);
var items = gildedRose.updateQuality();
var items = gildedRose.updateQuality();
console.log(items);
