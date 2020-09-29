export default class Popup {
  constructor(selector) {
    this._popupElement = document.querySelector(selector);
  }

  open() {
    this._popupElement.classList.add("popup_opened");
  }

  close() {
    this._popupElement.classList.remove("popup_opened");
  }

  _handleEscClose() {
    if (evt.key === "Escape") {
      this.close();
    }
  }
}
