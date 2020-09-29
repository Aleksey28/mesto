import "../../pages/index.css";

import {
  initialCards,
  cardListSelector,
} from "../utils/constants.js";

import Section from "../components/Section.js";
import Card from "../components/Card.js";
import Popup from "../components/Popup.js";


// // const content = document.querySelector(".content");
// // const editButton = content.querySelector(".profile__btn_action_edit");
// // const addButton = content.querySelector(".profile__btn_action_add");

// // const popupArr = Array.from(document.querySelectorAll(".popup"));
// // const validationSettings = {
// //   inputSelector: ".popup__input",
// //   submitButtonSelector: ".popup__btn_action_submit",
// //   inactiveButtonClass: "popup__btn__disabled",
// //   inputErrorClass: "popup__input_type_error",
// //   errorClass: "popup__error_visible",
// // };

// // const popupEdit = document.querySelector(".popup_type_edit");
// // const popupEditContainer = popupEdit.querySelector(".popup__container");
// // const popupEditInputName = popupEdit.querySelector(".popup__input_type_name");
// // const popupEditInputProfession = popupEdit.querySelector(
// //   ".popup__input_type_profession"
// // );
// const popupEditValidator = new FormValidator(validationSettings, popupEdit);

// // const popupAdd = document.querySelector(".popup_type_add");
// // const popupAddContainer = popupAdd.querySelector(".popup__container");
// // const popupAddInputName = popupAdd.querySelector(".popup__input_type_name");
// // const popupAddInputlink = popupAdd.querySelector(".popup__input_type_link");
// const popupAddValidator = new FormValidator(validationSettings, popupAdd);

// // const profileName = content.querySelector(".profile__name");
// // const profileProfession = content.querySelector(".profile__profession");

// // const cards = content.querySelector(".cards");

const openPopup = (popupToOpen) => {
  popupToOpen.classList.add("popup_opened");
  document.addEventListener("keyup", closeOpenedPopup);
};

const closePopup = (popupToClose) => {
  popupToClose.classList.remove("popup_opened");
  document.removeEventListener("keyup", closeOpenedPopup);
};

const closeOpenedPopup = (evt) => {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector(".popup_opened");
    closePopup(openedPopup);
  }
};

// // const addCards = (cardData) => {
// //   const cardElement = new Card(
// //     cardData,
// //     "#card-template",
// //     openPopup,
// //     ".popup_type_show"
// //   ).generateCard();
// //   cards.prepend(cardElement);
// // };

// const submitPopupEdit = (evt) => {
//   evt.preventDefault();

//   profileName.textContent = popupEditInputName.value;
//   profileProfession.textContent = popupEditInputProfession.value;
//   closePopup(popupEdit);
// };

// const submitPopupAdd = (evt) => {
//   evt.preventDefault();

//   addCards({
//     name: popupAddInputName.value,
//     link: popupAddInputlink.value,
//     description: popupAddInputName.value,
//   });

//   closePopup(popupAdd);
// };

// editButton.addEventListener("click", () => {
//   openPopup(popupEdit);
//   popupEditInputName.value = profileName.textContent;
//   popupEditInputProfession.value = profileProfession.textContent;

//   //Если не сделать reset то:
//   //1. кнопка отправки будет заблокирована в любом случае, так как на момент инициализации валидации поля попап не заполнены.
//   //2. В случае если оставить форму с ошибками и закрыть, то при открытии ошибки останутся, а данные будут перезаполнены.
//   popupEditValidator.resetValidationForForm();
// });

// addButton.addEventListener("click", () => {
//   openPopup(popupAdd);
//   popupAddInputName.value = "";
//   popupAddInputlink.value = "";

//   popupAddValidator.resetValidationForForm();
// });

// popupEditValidator.enableValidation();
// popupAddValidator.enableValidation();

// popupEdit.addEventListener("submit", submitPopupEdit);
// popupAdd.addEventListener("submit", submitPopupAdd);

// popupArr.forEach((popupElement) => {
//   const popupBtnClose = popupElement.querySelector(".popup__btn_action_close");

//   popupElement.addEventListener("click", (evt) => {
//     if (evt.target === evt.currentTarget) {
//       closePopup(popupElement);
//     }
//   });

//   popupBtnClose.addEventListener("click", () => closePopup(popupElement));
// });

// initialCards.forEach(addCards);

const cardList = new Section({
  items: initialCards,
  renderer: (item) => {
    const cardElement = new Card(
      item,
      "#card-template",
      openPopup,
      ".popup_type_show"
    ).generateCard();
    cardList.addItem(cardElement);
  }
}, cardListSelector)

cardList.rendererItem();
