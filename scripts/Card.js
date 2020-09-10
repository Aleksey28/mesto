class Card {
  constructor (data, cardSelector){
    this._name = data.name;
    this._link = data.link;
    this._description = data.description;
    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    const cardElement = document.querySelector(this._cardSelector).content.querySelector('.card').cloneNode(true);
    return cardElement;
  }

  render() {
    this._element = this._getTemplate();

    const cardElementImage = this._element.querySelector('.card__image');
    const cardElementCaption = this._element.querySelector('.card__caption');

    cardElementImage.src = this._link;
    cardElementImage.alt = this._description;
    cardElementCaption.textContent = this._name;

    return this._element;
  }
}
