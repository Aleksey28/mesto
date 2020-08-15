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

const addCards = (cardData) => {
  const cardTemplate = document.querySelector('#card-template').content;
  const cardElement = cardTemplate.cloneNode(true);
  const cardElementImage = cardElement.querySelector('.card__image');
  const cardElementCaption = cardElement.querySelector('.card__caption');

  cardElementImage.src = cardData.link;
  cardElementImage.alt = cardData.description;
  cardElementCaption.textContent = cardData.name;

  cards.append(cardElement);
}

initialCards.forEach(addCards);
