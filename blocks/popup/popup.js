const content = document.querySelector('.content');
const editButton = content.querySelector('.profile__btn_action_edit');

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

editButton.addEventListener('click', popupToggle);
popup.addEventListener('click', popupToggle);
popup.addEventListener('submit', formSubmitHandler);
