import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(selector, inputSelectors, { handlerSubmit, handlerOpen }) {
    super(selector);
    this._handlerSubmit = handlerSubmit;
    this._handlerOpen = handlerOpen;

    //В случае если будут добавляться инпуты, не нужно будет модифицировать класс
    this._inputSelectors = inputSelectors;
    this._inputSelectorsKeys = Object.keys(inputSelectors);
    this._inputSelectorsKeys.forEach((key) => {
      this["_" + key] = this._popupElement.querySelector(inputSelectors[key]);
    });
  }

  _getInputValues() {
    let inputValues = {};
    this._inputSelectorsKeys.map((key) => {
      inputValues[key] = this["_" + key].value;
    });

    return inputValues;
  }

  _setInputValues(info) {
    this._inputSelectorsKeys.forEach((key) => {
      this["_" + key].value = info[key];
    });
  }

  _handleSubmitPopup(evt) {
    evt.preventDefault();
    this._handlerSubmit(this._getInputValues());
    this.close();
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupElement.addEventListener(
      "submit",
      this._handleSubmitPopup.bind(this)
    );
  }

  open(info) {
    super.open();
    this._setInputValues(info);
    this._handlerOpen();
  }

  close() {
    super.close();
    this._popupForm.reset();
  }
}
