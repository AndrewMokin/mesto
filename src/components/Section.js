export default class Section {
  constructor ({items,renderer},contanerSelector) {
    this._renderItems = items;
    this._renderer = renderer;
    this._contaner = contanerSelector;
  }
  render (items) {
    items.forEach(item => {
      this._contaner.append(this._renderer(item))
    });
  }
  addItem(element) {
    this._contaner.prepend(element);
  }
}
