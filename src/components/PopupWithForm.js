import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(selector, inputSelectors, { handlerSubmit, handlerOpen }) {
    super(selector);
    this._handlerSubmit = handlerSubmit;
    this._handlerOpen = handlerOpen;
    this._popupBtnSubmit = this._popupElement.querySelector(
      ".popup__btn_action_submit"
    );
    this._popupBtnSubmitText = this._popupBtnSubmit.textContent;

    //В случае если будут добавляться инпуты, не нужно будет модифицировать класс
    this._inputSelectors = inputSelectors;
    this._inputSelectorsKeys = Object.keys(inputSelectors);
    this._inputSelectorsKeys.forEach((key) => {
      this["_" + key] = this._popupElement.querySelector(inputSelectors[key]);
    });
  }

  _getInputValues() {
    const inputValues = {};
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
    this._popupBtnSubmit.textContent = "Сохранение...";
    this._handlerSubmit(this._getInputValues());
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
    this._popupBtnSubmit.textContent = this._popupBtnSubmitText;
    this._popupForm.reset();
  }
}
