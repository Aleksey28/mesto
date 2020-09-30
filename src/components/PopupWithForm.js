import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(selector, handlerSubmit) {
    super(selector);
    this._handlerSubmit = handlerSubmit;
    this._popupInputName = this._popupElement.querySelector(
      ".popup__input_type_name"
    );
    this._popupInputlink = this._popupElement.querySelector(
      ".popup__input_type_link"
    );
    this._popupInputProfession = this._popupElement.querySelector(
      ".popup__input_type_profession"
    );
  }

  _getInputValues() {
    return {
      name: this._popupInputName.value,
      profession: this._popupInputProfession.value,
      link: this._popupInputlink.value,
    };
  }

  _setInputValue(inputElement, value) {
    if (!!inputElement) {
      inputElement.value = value;
    }
  }

  _setInputValues({ name, profession, link }) {
    this._setInputValue(this._popupInputName, name);
    this._setInputValue(this._popupInputProfession, profession);
    this._setInputValue(this._popupInputlink, link);
  }

  setEventListeners() {
    super.setEventListeners();
  }

  open(info) {
    super.open();
    this._setInputValues(info);
  }
}
