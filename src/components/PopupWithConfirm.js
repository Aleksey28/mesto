import Popup from './Popup.js';

export default class PopupWithConfirm extends Popup {
  constructor(selector) {
    super(selector);
    this._popupBtnLabelStatic = this._popupElement.querySelector('.popup__btn-label_type_static');
    this._popupBtnLabelDoing = this._popupElement.querySelector('.popup__btn-label_type_doing');
    this._popupAvatar = this._popupElement.querySelector('.popup__avatar');
  }

  _handleSubmitPopup(evt) {
    evt.preventDefault();
    this._handlerSubmit();
  }

  toggleLoading() {
    this._popupBtnLabelStatic = this._popupBtnLabelStatic.classList.toggle('popup__btn-label_visible');
    this._popupBtnLabelDoing = this._popupBtnLabelDoing.classList.toggle('popup__btn-label_visible');
  }

  setHandlerSubmit(handlerSubmit) {
    this._handlerSubmit = handlerSubmit;
  }

  setUserInfo({ avatar }) {
    this._popupAvatar.src = avatar;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupElement.addEventListener('submit', this._handleSubmitPopup.bind(this));
  }
}
