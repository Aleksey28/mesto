export default class Section {
  constructor({ items, renderer }, selector) {
    this._renderedItems = items;
    this._renderer = renderer;
    this._container = document.querySelector(selector);
  }

  _clear() {
    this._container.innerHTML = "";
  }

  addItem(element) {
    this._container.prepend(element);
  }

  rendererItem() {
    this._clear();
    this._renderedItems.forEach((item) => {
      this._renderer(item);
    });
  }
}
