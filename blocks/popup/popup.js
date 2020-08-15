const content = document.querySelector('.content');
const editButton = content.querySelector('.profile__btn_action_edit');
const addButton = content.querySelector('.profile__btn_action_add');

const popupEdit = document.querySelector('.popup_type_edit');
const popupEditInputName = popupEdit.querySelector('.popup__input_type_name');
const popupEditInputProfession = popupEdit.querySelector('.popup__input_type_profession');

const popupAdd = document.querySelector('.popup_type_add');
const popupAddInputName = popupAdd.querySelector('.popup__input_type_name');
const popupAddInputlink = popupAdd.querySelector('.popup__input_type_link');

const profileName = content.querySelector('.profile__name');
const profileProfession = content.querySelector('.profile__profession');




const togglePopupEdit = (evt) => {

  const popapToToggle = evt.currentTarget === editButton || evt.currentTarget === popupEdit ? popupEdit : popupAdd;
  const popapToToggleBtnClose = popapToToggle.querySelector('.popup__btn_action_close');
  // Данное уловие срабатывает, если:
  // - было вызвано событие не из блока попап для открытия блока, на данный момент это относится к кнопке редактирования;
  // - было вызвано событие из блока на нажатие вне контейнера попап, для закрытия блока;
  // - было вызвано события из блока на нажатие кнопки закрытия, соответственно для закрытия блока.
  // Можно подвязать функцию к событиям нажатия только кнопок. Но закрытие попап при нажатии вне контейнера - довольно удобно.
  if (evt.currentTarget !== popapToToggle ||
    evt.currentTarget === popapToToggle && (evt.currentTarget === evt.target || evt.target === popapToToggleBtnClose)) {
      popapToToggle.classList.toggle('popup_opend');

    if (popapToToggle.classList.contains('popup_opend')) {
      //Делаю switch с залогом на будущее, например для редактирования карточек.
      switch (popapToToggle) {
        case popupEdit:
          popupEditInputName.value = profileName.textContent;
          popupEditInputProfession.value = profileProfession.textContent;
      }
    }
  }
}

const submitPopap = (evt) => {
  evt.preventDefault();

  switch (evt.currentTarget) {
    case popupEdit:
      profileName.textContent = popupEditInputName.value;
      profileProfession.textContent = popupEditInputProfession.value;
      break;
    case popupAdd:
      addCards({
        name: popupAddInputName.value,
        link: popupAddInputlink.value,
        description: popupAddInputName.value
      });
      break;
  }
  evt.currentTarget.classList.remove('popup_opend');
}

editButton.addEventListener('click', togglePopupEdit);
addButton.addEventListener('click', togglePopupEdit);
popupEdit.addEventListener('click', togglePopupEdit);
popupAdd.addEventListener('click', togglePopupEdit);
popupEdit.addEventListener('submit', submitPopap);
popupAdd.addEventListener('submit', submitPopap);
