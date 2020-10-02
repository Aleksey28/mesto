export default class Popup {
  constructor(selector) {
    this._popupElement = document.querySelector(selector);
    this._popupForm = this._popupElement.querySelector(".popup__container");
    this._popupBtnClose = this._popupElement.querySelector(
      ".popup__btn_action_close"
    );
  }

  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }

  _handleMouseDownClose(evt) {
    if (evt.target === evt.currentTarget) {
      this.close();
    }
  }

  open() {
    this._popupElement.classList.add("popup_opened");
    document.addEventListener("keyup", this._handleEscClose.bind(this));
  }

  close() {
    this._popupElement.classList.remove("popup_opened");
    document.removeEventListener("keyup", this._handleEscClose.bind(this));
  }

  setEventListeners() {
    this._popupElement.addEventListener(
      "mousedown",
      this._handleMouseDownClose.bind(this)
    );
    this._popupBtnClose.addEventListener("click", this.close.bind(this));
  }
}
