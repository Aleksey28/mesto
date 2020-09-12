class Card {
  constructor (data, cardSelector, openPopup, popupSelector){
    this._name = data.name;
    this._link = data.link;
    this._description = data.description;
    this._cardSelector = cardSelector;
    //Передаю внешнюю функцию для открытия попапа
    this._openPopup = openPopup;
    //Также передаю селектор попапа, который необходимо будет открыть
    this._popupSelector = popupSelector;
  }

  _getTemplate() {
    const cardElement = document.querySelector(this._cardSelector).content.querySelector('.card').cloneNode(true);
    return cardElement;
  }

  _handleDeleteCard() {
    this._element.remove();
  }

  _handleLikeCard() {
    this._elementLike.textContent = this._elementLike.textContent === String.fromCodePoint(9825) ? String.fromCodePoint(10084) : String.fromCodePoint(9825);
  }

  _handleShowCardImage() {
    const showPopup = document.querySelector(this._popupSelector);
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

  generateCard() {
    this._element = this._getTemplate();
    this._elementLike = this._element.querySelector('.card__btn_action_like');
    this._cardElementImage = this._element.querySelector('.card__image');

    //В отличии от других элементов карточки, этот записываю в константу и просто помещаю текст,
    //т.к. Caption используется только в одном месте при создании и не имеет смысл создавать локальные переменные для данного объекта Card
    const cardElementCaption = this._element.querySelector('.card__caption');

    this._cardElementImage.src = this._link;
    this._cardElementImage.alt = this._description;
    cardElementCaption.textContent = this._name;

    this._setEventListeners();

    return this._element;
  }
}
