export default class Popup {
  constructor(selector) {
    this._popupElement = document.querySelector(selector);
  }

  open() {
    this._popupElement.classList.add("popup_opened");
  }
}
