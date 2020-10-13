export default class Section {
  constructor({ items, renderer }, selector) {
    this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(selector);
  }

  _clear() {
    this._container.innerHTML = '';
  }

  addItem(element) {
    this._container.prepend(element);
  }

  render() {
    this._clear();
    this._items.forEach((item) => {
      this.addItem(this._renderer(item));
    });
  }
}
