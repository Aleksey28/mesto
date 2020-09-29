import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(selector, handlerSubmit) {
    super(selector);
    this._handlerSubmit = handlerSubmit;
    this._popupInputName = this._popupElement.querySelector(".popup__input_type_name");
    this._popupInputlink = this._popupElement.querySelector(".popup__input_type_link");
    this._popupInputProfession = this._popupElement.querySelector(
      ".popup__input_type_profession"
    );
  }

  _getInputValues() {
    return;
  }
}
