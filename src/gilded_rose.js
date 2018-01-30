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

  updateSulfuras(i) {}

  updateAgedBrie(i) {
    if (this.items[i].quality < 50) {
      this.items[i].quality = this.items[i].quality + 1;
    }
    this.items[i].sellIn = this.items[i].sellIn - 1;
  }

  updateBackstagePasse(i) {
     if (this.items[i].quality < 50) {
       this.items[i].quality = this.items[i].quality + 1;
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
       if (this.items[i].sellIn === 0) {
         this.items[i].quality = this.items[i].quality - this.items[i].quality;
       }
     }
     this.items[i].sellIn = this.items[i].sellIn - 1;
  }

  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      if(this.items[i].name !== 'Aged Brie' && this.items[i].name !== 'Backstage passes to a TAFKAL80ETC concert' && this.items[i].name !== 'Sulfuras, Hand of Ragnaros'){
        this.updateNormalItem(i);
      }
      else if (this.items[i].name === 'Sulfuras, Hand of Ragnaros'){
        this.updateSulfuras(i)
      }
      else if (this.items[i].name === 'Aged Brie'){
        this.updateAgedBrie(i)
      }
      else if (this.items[i].name === 'Backstage passes to a TAFKAL80ETC concert') {
        this.updateBackstagePasse(i)
      }
    }

    return this.items;
  }
}
