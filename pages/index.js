const content = document.querySelector('.content');
const editButton = content.querySelector('.profile__btn_action_edit');
const addButton = content.querySelector('.profile__btn_action_add');

const popupEdit = document.querySelector('.popup_type_edit');
const popupEditInputName = popupEdit.querySelector('.popup__input_type_name');
const popupEditInputProfession = popupEdit.querySelector('.popup__input_type_profession');

const popupAdd = document.querySelector('.popup_type_add');
const popupAddInputName = popupAdd.querySelector('.popup__input_type_name');
const popupAddInputlink = popupAdd.querySelector('.popup__input_type_link');

const popupShow = document.querySelector('.popup_type_show');
const popupImage = popupShow.querySelector('.popup__image');
const popupCaption = popupShow.querySelector('.popup__caption');

const profileName = content.querySelector('.profile__name');
const profileProfession = content.querySelector('.profile__profession');

const cards = content.querySelector('.cards');

const cardTemplate = document.querySelector('#card-template').content;

const openPopup = (popupToOpen) => {
  popupToOpen.classList.add('popup_opened');
}

const closePopup = (evt, popupToClose) => {
  const popupToCloseBtnClose = popupToClose.querySelector('.popup__btn_action_close');
  // Данное уловия срабатывают, если:
  // - было вызвано событие из блока на нажатие вне контейнера попап, для закрытия блока;
  // - было вызвано события из блока на нажатие кнопки закрытия, соответственно для закрытия блока.
  // Можно подвязать функцию к событиям нажатия только кнопок. Но закрытие попап при нажатии вне контейнера - довольно удобно.
  if(evt.currentTarget === popupToClose && (evt.currentTarget === evt.target || evt.target === popupToCloseBtnClose)) {
    popupToClose.classList.remove('popup_opened');
  }
}

const deleteCard = (evt) => {
  evt.target.closest('.card').remove();
}

const likeCard = (evt) => {
  if (evt.target.textContent === String.fromCodePoint(9825)) {
    evt.target.textContent = String.fromCodePoint(10084);
  } else {
    evt.target.textContent = String.fromCodePoint(9825);
  }
}

const addCards = (cardData) => {

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
  cardElementImage.addEventListener('click', (evt) => {
    openPopup(popupShow);
    popupImage.src = evt.target.src;
    popupImage.alt = evt.target.alt;
    popupCaption.textContent = evt.target.closest('.card').querySelector('.card__caption').textContent;
  });
}

const submitPopupEdit = (evt) => {
  evt.preventDefault();

  profileName.textContent = popupEditInputName.value;
  profileProfession.textContent = popupEditInputProfession.value;
  evt.currentTarget.classList.remove('popup_opened');
}

const submitPopupAdd = (evt) => {
  evt.preventDefault();

  addCards({
    name: popupAddInputName.value,
    link: popupAddInputlink.value,
    description: popupAddInputName.value
  });

  evt.currentTarget.classList.remove('popup_opened');
}

editButton.addEventListener('click', () => {
  openPopup(popupEdit);
  popupEditInputName.value = profileName.textContent;
  popupEditInputProfession.value = profileProfession.textContent;
});

addButton.addEventListener('click', () => {
  openPopup(popupAdd);
  popupAddInputName.value = '';
  popupAddInputlink.value = '';
});

popupEdit.addEventListener('click', () => {
  closePopup(event, popupEdit);
});

popupAdd.addEventListener('click', () => {
  closePopup(event, popupAdd);
});

popupShow.addEventListener('click', () => {
  closePopup(event, popupShow);
});

popupEdit.addEventListener('submit', submitPopupEdit);
popupAdd.addEventListener('submit', submitPopupAdd);

initialCards.forEach(addCards);
