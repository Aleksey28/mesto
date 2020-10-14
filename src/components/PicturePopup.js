import Popup from './Popup.js';

export default class PicturePopup extends Popup {
  constructor(selector) {
    super(selector);

    this._imageElement = this._popupElement.querySelector('.popup__image');
    this._captionElement = this._popupElement.querySelector('.popup__caption');
  }

  open({ link, name, description }) {
    this._imageElement.src = link;
    this._imageElement.alt = description;
    this._captionElement.textContent = name;

    super.open();
  }
}
