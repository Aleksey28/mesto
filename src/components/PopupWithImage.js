import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  open({ link, name, description }) {
    const showPopupImage = this._popupElement.querySelector(".popup__image");
    const showPopupCaption = this._popupElement.querySelector(
      ".popup__caption"
    );

    showPopupImage.src = link;
    showPopupImage.alt = description;
    showPopupCaption.textContent = name;

    super.open();
  }
}
