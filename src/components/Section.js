export default class Section {
  constructor({ renderer }, selector) {
    this._renderer = renderer;
    this._container = document.querySelector(selector);
  }

  _clear() {
    this._container.innerHTML = "";
  }

  addItem(element) {
    this._container.prepend(element);
  }

  render(items) {
    this._clear();
    items.forEach((item) => {
      this._renderer(item);
    });
  }
}
