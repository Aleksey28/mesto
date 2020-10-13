export default class Card {
  constructor(cardSelector, { data, handleCardClick, handleLikeCard, handleDeleteIconClick }) {
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes;
    this._description = data.description;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._handleLikeCard = handleLikeCard;
    this._handleDeleteIconClick = handleDeleteIconClick;
  }

  _getTemplate() {
    const cardElement = document.querySelector(this._cardSelector).content.querySelector('.card').cloneNode(true);
    return cardElement;
  }

  _handleDeleteCard() {
    this._element.remove();
    this._element = null;
  }

  _handleLikeCard() {
    this._elementLike.classList.toggle('like__btn_active');
  }

  _setEventListeners() {
    const cardElementBtnTrush = this._element.querySelector('.card__btn_action_trush');

    this._elementLike.addEventListener('click', () => this._handleLikeCard());
    cardElementBtnTrush.addEventListener('click', () => this._handleDeleteCard());
    this._cardElementImage.addEventListener('click', () =>
      this._handleCardClick({
        link: this._link,
        name: this._name,
        description: this._description,
      }),
    );
  }

  generateCard() {
    this._element = this._getTemplate();
    this._elementLike = this._element.querySelector('.like__btn');
    this._cardElementImage = this._element.querySelector('.card__image');
    this._elementLikeCount = this._element.querySelector('.like__count');

    //В отличии от других элементов карточки, этот записываю в константу и просто помещаю текст,
    //т.к. Caption используется только в одном месте при создании и не имеет смысл создавать локальные переменные для данного объекта Card
    const cardElementCaption = this._element.querySelector('.card__caption');

    this._cardElementImage.src = this._link;
    this._cardElementImage.alt = this._description;
    cardElementCaption.textContent = this._name;
    this._elementLikeCount.textContent = this._likes.length;

    this._setEventListeners();

    return this._element;
  }
}
