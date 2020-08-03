const content = document.querySelector('.content');
const editButton = content.querySelector('.profile__btn_action_edit');
const popup = document.querySelector('.popup');
const popupBtnClose = popup.querySelector('.popup__btn_action_close');

const popupInputName = popup.querySelector('.popup__input_type_name');
const popupInputProfession = popup.querySelector('.popup__input_type_profession');
const profileName = content.querySelector('.profile__name');
const profileProfession = content.querySelector('.profile__profession');


function popupToggle(evt) {

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

  if (evt.type === 'keypress' && evt.key !== 13) {
    return;
  }

  evt.preventDefault();

  profileName.textContent = popupInputName.value;
  profileProfession.textContent = popupInputProfession.value;
  popup.classList.remove('popup_opend');
}

editButton.addEventListener('click', popupToggle);
popup.addEventListener('click', popupToggle);
popup.addEventListener('keypress', formSubmitHandler);
popup.addEventListener('submit', formSubmitHandler);
