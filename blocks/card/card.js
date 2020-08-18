const initialCards = [
  {
      name: 'Хижина чудес',
      link: './images/card-mystery-shack.jpg',
      description: 'Хижина в лесу под лучами солнца.'
  },
  {
      name: 'Каньон',
      link: './images/card-canyon.jpg',
      description: 'Деревня на дне каньона на закате.'
  },
  {
      name: 'Поместе Нортвест',
      link: './images/card-northwest-manor.jpg',
      description: 'Старый и большой особняк под ливнем.'
  },
  {
      name: 'От заката до рассвета',
      link: './images/card-from-dusk-to-dawn.jpg',
      description: 'Заброшенный продуктовый магазин.'
  },
  {
      name: 'Остров Задавалы',
      link: './images/card-island-was-asked.jpg',
      description: 'Остров посреди озера в тумане.'
  },
  {
      name: 'Город будущего',
      link: './images/card-future-city.jpg',
      description: 'Вид на гладиаторскую арену в городе будущего.'
  }
];

const cards = content.querySelector('.cards');

const deleteCard = (evt) => {
  evt.target.parentElement.remove();
}

const likeCard = (evt) => {
  if (evt.target.textContent === String.fromCodePoint(9825)) {
    evt.target.textContent = String.fromCodePoint(10084);
  } else {
    evt.target.textContent = String.fromCodePoint(9825);
  }
}

const addCards = (cardData) => {
  const cardTemplate = document.querySelector('#card-template').content;
  const cardElement = cardTemplate.cloneNode(true);
  const cardElementImage = cardElement.querySelector('.card__image');
  const cardElementCaption = cardElement.querySelector('.card__caption');
  const cardElementBtnTrush = cardElement.querySelector('.card__btn_action_trush');
  const cardElementBtnLike = cardElement.querySelector('.card__btn_action_like');

  cardElementImage.src = cardData.link;
  cardElementImage.alt = cardData.description;
  cardElementCaption.textContent = cardData.name;

  cards.prepend(cardElement);

  cardElementBtnTrush.addEventListener('click', deleteCard);
  cardElementBtnLike.addEventListener('click', likeCard);
  cardElementImage.addEventListener('click', togglePopup);
}

initialCards.forEach(addCards);
