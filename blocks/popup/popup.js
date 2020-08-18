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




const togglePopup = (evt) => {

  let popapToToggle;
  switch (evt.currentTarget) {
    case editButton:
    case popupEdit:
      popapToToggle = popupEdit;
      break;
    case addButton:
    case popupAdd:
      popapToToggle = popupAdd;
      break;
    default:
      popapToToggle = popupShow;
  }


  const popapToToggleBtnClose = popapToToggle.querySelector('.popup__btn_action_close');
  // Изначально добавление и удаление класса было реализовано через toggle, но после добавления плавного закрытия и открытия попапа был обнаружен баг. Если быстро нажимать открытия и закрытие, то в момент, когда попап закрывает можно снова нажать на область попап, тогда попап снова будет открываться по верх закрывающегося предыдущего, и currentTarget будет хранить значение самого попап. Нам же не нужна такая ситуация при открытии попап, так как чез currentTarget получаются значения для вывода картинки.
  // Данное уловия срабатывают, если:
  // - было вызвано событие не из блока попап для открытия блока, на данный момент это относится к кнопке редактирования;
  // - было вызвано событие из блока на нажатие вне контейнера попап, для закрытия блока;
  // - было вызвано события из блока на нажатие кнопки закрытия, соответственно для закрытия блока.
  // Можно подвязать функцию к событиям нажатия только кнопок. Но закрытие попап при нажатии вне контейнера - довольно удобно.
  if (evt.currentTarget !== popapToToggle) {
    popapToToggle.classList.add('popup_opend');
    switch (popapToToggle) {
      case popupEdit:
        popupEditInputName.value = profileName.textContent;
        popupEditInputProfession.value = profileProfession.textContent;
        break;
      case popupShow:
        popupImage.src = evt.currentTarget.src;
        popupImage.alt = evt.currentTarget.alt;
        popupCaption.textContent = evt.currentTarget.nextElementSibling.children[0].textContent;
    }
  }else if(evt.currentTarget === popapToToggle && (evt.currentTarget === evt.target || evt.target === popapToToggleBtnClose)) {
    popapToToggle.classList.remove('popup_opend');
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

editButton.addEventListener('click', togglePopup);
addButton.addEventListener('click', togglePopup);
popupEdit.addEventListener('click', togglePopup);
popupAdd.addEventListener('click', togglePopup);
popupShow.addEventListener('click', togglePopup);
popupEdit.addEventListener('submit', submitPopap);
popupAdd.addEventListener('submit', submitPopap);
