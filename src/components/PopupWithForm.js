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

  _grtInputValue(inputElement) {
    return !!inputElement ? inputElement.value : null;
  }

  _getInputValues() {
    return {
      name: this._grtInputValue(this._popupInputName),
      profession: this._grtInputValue(this._popupInputProfession),
      link: this._grtInputValue(this._popupInputlink),
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

  _handleSubmitPopup(evt) {
    evt.preventDefault();
    this._handlerSubmit(this._getInputValues());
    this.close();
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupElement.addEventListener("submit", this._handleSubmitPopup.bind(this));
  }

  open(info) {
    super.open();
    this._setInputValues(info);
  }
}
