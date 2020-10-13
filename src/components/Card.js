export default class Card {
  constructor(cardSelector, { data, userId, handlerCardClick, handlerLikeCard, handlerDeleteCard }) {
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes;
    this._id = data._id;
    this._ownerId = data.owner._id;
    this._userId = userId;
    this._cardSelector = cardSelector;
    this._handlerCardClick = handlerCardClick;
    this._handlerLikeCard = handlerLikeCard;
    this._handlerDeleteCard = handlerDeleteCard;
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
    this._btnLike.classList.toggle('like__btn_active');
    this._handlerLikeCard({ id: this._id, like: this._btnLike.classList.contains('like__btn_active') })
      .then((result) => {
        this._countLike.textContent = result.likes.length;
      })
      .catch((error) => {
        console.log(error);
        this._btnLike.classList.toggle('like__btn_active');
      });
  }

  _isOwn() {
    return this._ownerId === this._userId;
  }

  _setEventListeners() {
    this._btnLike.addEventListener('click', () => this._handleLikeCard());
    if (this._isOwn()) {
      this._btnTrush.addEventListener('click', () => this._handleDeleteCard());
    }
    this._cardElementImage.addEventListener('click', () =>
      this._handlerCardClick({
        link: this._link,
        name: this._name,
        description: this._name,
      }),
    );
  }

  generateCard() {
    this._element = this._getTemplate();
    this._btnLike = this._element.querySelector('.like__btn');
    this._btnTrush = this._element.querySelector('.card__btn_action_trush');
    this._cardElementImage = this._element.querySelector('.card__image');
    this._countLike = this._element.querySelector('.like__count');

    if (!this._isOwn()) {
      this._btnTrush.classList.add('card__btn_visible');
    }

    if (this._likes.some((item) => item._id === this._userId)) {
      this._btnLike.classList.toggle('like__btn_active');
    }

    //В отличии от других элементов карточки, этот записываю в константу и просто помещаю текст,
    //т.к. Caption используется только в одном месте при создании и не имеет смысл создавать локальные переменные для данного объекта Card
    const cardElementCaption = this._element.querySelector('.card__caption');

    this._cardElementImage.src = this._link;
    this._cardElementImage.alt = this._name;
    cardElementCaption.textContent = this._name;
    this._countLike.textContent = this._likes.length;

    this._setEventListeners();

    return this._element;
  }
}
