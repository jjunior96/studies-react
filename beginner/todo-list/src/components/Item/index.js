/* eslint-disable no-plusplus */
class Item {
  static lastId = 0;

  constructor(text) {
    this.id = Item.lastId++;
    this.text = text;
    this.done = false;
  }
}

export default Item;
