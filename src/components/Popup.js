export default class Popup {
  constructor(selector) {
    this._popupElement = document.querySelector(selector);
    this.close = this.close.bind(this);
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  open() {
    this._popupElement.classList.add("popup_opened");
  }

  close() {
    this._popupElement.classList.remove("popup_opened");
  }

  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }

  setEventListeners() {
    this._popupBtnClose = this._popupElement.querySelector(
      ".popup__btn_action_close"
    );

    this._popupElement.addEventListener("click", (evt) => {
      if (evt.target === evt.currentTarget) {
        this.close();
      }
    });

    this._popupBtnClose.addEventListener("click", () => this.close());

    document.addEventListener("keyup", this._handleEscClose);
  }
}
