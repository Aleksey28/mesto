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
const content = document.querySelector('.content');
const editButton = content.querySelector('.profile__btn_action_edit');
const cards = content.querySelector('.cards');


const popup = document.querySelector('.popup');
const popupBtnClose = popup.querySelector('.popup__btn_action_close');
const popupInputName = popup.querySelector('.popup__input_type_name');
const popupInputProfession = popup.querySelector('.popup__input_type_profession');
const profileName = content.querySelector('.profile__name');
const profileProfession = content.querySelector('.profile__profession');




function popupToggle(evt) {

  // Данное уловие срабатывает, если:
  // - было вызвано событие не из блока попап для открытия блока, на данный момент это относится к кнопке редактирования;
  // - было вызвано событие из блока на нажатие вне контейнера попап, для закрытия блока;
  // - было вызвано события из блока на нажатие кнопки закрытия, соответственно для закрытия блока.
  // Можно подвязать функцию к событиям нажатия только кнопок. Но закрытие попап при нажатии вне контейнера - довольно удобно.
  if (evt.currentTarget !== popup ||
    evt.currentTarget === popup && (evt.currentTarget === evt.target || evt.target === popupBtnClose)) {
    popup.classList.toggle('popup_opend');

    if (popup.classList.contains('popup_opend')) {
      popupInputName.value = profileName.textContent;
      popupInputProfession.value = profileProfession.textContent;
    }
  }
}

function formSubmitHandler (evt) {
  evt.preventDefault();

  profileName.textContent = popupInputName.value;
  profileProfession.textContent = popupInputProfession.value;
  popup.classList.remove('popup_opend');
}

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

editButton.addEventListener('click', popupToggle);
popup.addEventListener('click', popupToggle);
popup.addEventListener('submit', formSubmitHandler);

initialCards.forEach(addCards);
