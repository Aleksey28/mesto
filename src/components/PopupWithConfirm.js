import Popup from './Popup.js';

export default class PopupWithConfirm extends Popup {
  constructor(selector) {
    super(selector);
  }

  _handleSubmitPopup(evt) {
    evt.preventDefault();
    this._handlerSubmit();
    this.close();
  }

  setHandlerSubmit(handlerSubmit) {
    this._handlerSubmit = handlerSubmit;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupElement.addEventListener('submit', this._handleSubmitPopup.bind(this));
  }
}
