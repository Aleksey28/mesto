import Popup from './Popup.js';

export default class PopupWithConfirm extends Popup {
  constructor(selector, { handlerSubmit, handlerOpen }) {
    super(selector);
    this._handlerSubmit = handlerSubmit;
    this._handlerOpen = handlerOpen;
  }

  _handleSubmitPopup(evt) {
    evt.preventDefault();
    this._handlerSubmit();
    this.close();
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupElement.addEventListener('submit', this._handleSubmitPopup.bind(this));
  }

  open() {
    super.open();
    this._handlerOpen();
  }

  close() {
    super.close();
  }
}
