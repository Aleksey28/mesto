const content = document.querySelector('.content');
const editButton = content.querySelector('.profile__btn_action_edit');
const addButton = content.querySelector('.profile__btn_action_add');

const popupArr = Array.from(document.querySelectorAll('.popup'));

const popupEdit = document.querySelector('.popup_type_edit');
const popupEditContainer = popupEdit.querySelector('.popup__container');
const popupEditInputName = popupEdit.querySelector('.popup__input_type_name');
const popupEditInputProfession = popupEdit.querySelector('.popup__input_type_profession');

const popupAdd = document.querySelector('.popup_type_add');
const popupAddContainer = popupAdd.querySelector('.popup__container');
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
  document.addEventListener('keyup', closeOpenedPopup);
};

const closePopup = (popupToClose) => {
  popupToClose.classList.remove('popup_opened');
  document.removeEventListener('keyup', closeOpenedPopup);
};

const closeOpenedPopup = (evt) => {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
};

const deleteCard = (evt) => {
  evt.target.closest('.card').remove();
};

const likeCard = (evt) => {
  if (evt.target.textContent === String.fromCodePoint(9825)) {
    evt.target.textContent = String.fromCodePoint(10084);
  } else {
    evt.target.textContent = String.fromCodePoint(9825);
  };
};

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
};

const submitPopupEdit = (evt) => {
  evt.preventDefault();

  profileName.textContent = popupEditInputName.value;
  profileProfession.textContent = popupEditInputProfession.value;
  closePopup(popupEdit);
};

const submitPopupAdd = (evt) => {
  evt.preventDefault();

  addCards({
    name: popupAddInputName.value,
    link: popupAddInputlink.value,
    description: popupAddInputName.value
  });

  closePopup(popupAdd);
};

editButton.addEventListener('click', () => {
  openPopup(popupEdit);
  popupEditInputName.value = profileName.textContent;
  popupEditInputProfession.value = profileProfession.textContent;

  //Если не сделать reset то:
  //1. кнопка отправки будет заблокирована в любом случае, так как на момент инициализации валидации поля попап не заполнены.
  //2. В случае если оставить форму с ошибками и закрыть, то при открытии ошибки останутся, а данные будут перезаполнены.
  resetValidationForForm(popupEditContainer, {
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__btn_action_submit',
    inactiveButtonClass: 'popup__btn__disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
  });
});

addButton.addEventListener('click', () => {
  openPopup(popupAdd);
  popupAddInputName.value = '';
  popupAddInputlink.value = '';

  resetValidationForForm(popupAddContainer, {
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__btn_action_submit',
    inactiveButtonClass: 'popup__btn__disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
  });
});

popupEdit.addEventListener('submit', submitPopupEdit);
popupAdd.addEventListener('submit', submitPopupAdd);

popupArr.forEach((popupElement) => {
  const popupBtnClose = popupElement.querySelector('.popup__btn_action_close');

  popupElement.addEventListener('click', (evt) => {
    if (evt.target === evt.currentTarget) {
      closePopup(popupElement);
    }
  });

  popupBtnClose.addEventListener('click', () => closePopup(popupElement));
});

// initialCards.forEach(addCards);

initialCards.forEach((item) => {
  const card = new Card(item, '#card-template')
  const cardElement = card.render();
  cards.append(cardElement);
})
