export default class Card {
  constructor(data, cardSelector, handleCardClick) {
    this._name = data.name;
    this._link = data.link;
    this._description = data.description;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);
    return cardElement;
  }

  _handleDeleteCard() {
    this._element.remove();
    this._element = null;
  }

  _handleLikeCard() {
    this._elementLike.classList.toggle("card__btn_active_like");
  }

  _setEventListeners() {
    const cardElementBtnTrush = this._element.querySelector(
      ".card__btn_action_trush"
    );
    const cardElementBtnLike = this._element.querySelector(
      ".card__btn_action_like"
    );

    cardElementBtnLike.addEventListener("click", () => this._handleLikeCard());
    cardElementBtnTrush.addEventListener("click", () =>
      this._handleDeleteCard()
    );
    this._cardElementImage.addEventListener("click", () =>
      this._handleCardClick({
        link: this._link,
        name: this._name,
        description: this._description,
      })
    );
  }

  generateCard() {
    this._element = this._getTemplate();
    this._elementLike = this._element.querySelector(".card__btn_action_like");
    this._cardElementImage = this._element.querySelector(".card__image");

    //В отличии от других элементов карточки, этот записываю в константу и просто помещаю текст,
    //т.к. Caption используется только в одном месте при создании и не имеет смысл создавать локальные переменные для данного объекта Card
    const cardElementCaption = this._element.querySelector(".card__caption");

    this._cardElementImage.src = this._link;
    this._cardElementImage.alt = this._description;
    cardElementCaption.textContent = this._name;

    this._setEventListeners();

    return this._element;
  }
}
