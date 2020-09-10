class Card {
  constructor (data, cardSelector, openPopup){
    this._name = data.name;
    this._link = data.link;
    this._description = data.description;
    this._cardSelector = cardSelector;
    this._openPopup = openPopup;
  }

  _getTemplate() {
    const cardElement = document.querySelector(this._cardSelector).content.querySelector('.card').cloneNode(true);
    return cardElement;
  }

  _handleDeleteCard() {
    this._element.remove();
  }

  _handleLikeCard() {
    if (this._elementLike.textContent === String.fromCodePoint(9825)) {
      this._elementLike.textContent = String.fromCodePoint(10084);
    } else {
      this._elementLike.textContent = String.fromCodePoint(9825);
    };
  }

  _handleShowCardImage() {
    const showPopup = document.querySelector('.popup_type_show');
    const showPopupImage = showPopup.querySelector('.popup__image');
    const showPopupCaption = showPopup.querySelector('.popup__caption');

    showPopupImage.src = this._link;
    showPopupImage.alt = this._description;
    showPopupCaption.textContent = this._name;
    this._openPopup(showPopup);
  }

  _setEventListeners() {
    const cardElementBtnTrush = this._element.querySelector('.card__btn_action_trush');
    const cardElementBtnLike = this._element.querySelector('.card__btn_action_like');

    cardElementBtnLike.addEventListener('click', () => this._handleLikeCard());
    cardElementBtnTrush.addEventListener('click', () => this._handleDeleteCard());
    this._cardElementImage.addEventListener('click', () => this._handleShowCardImage());
  }

  render() {
    this._element = this._getTemplate();
    this._elementLike = this._element.querySelector('.card__btn_action_like');
    this._cardElementImage = this._element.querySelector('.card__image');

    const cardElementCaption = this._element.querySelector('.card__caption');

    this._cardElementImage.src = this._link;
    this._cardElementImage.alt = this._description;
    cardElementCaption.textContent = this._name;

    this._setEventListeners();

    return this._element;
  }
}
