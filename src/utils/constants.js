export const cardListSelector = ".cards";
export const selectorPopupWithImage = ".popup_type_show";
export const selectorPopupWithAddForm = ".popup_type_add";
export const selectorPopupWithEditForm = ".popup_type_edit";
export const selectorPopupWithEditAvatarForm = ".popup_type_edit-avatar";
export const selectorPopupWithConfirm = ".popup_type_confirm";

export const inputSelectorsAddForm = {
  name: ".popup__input_type_name",
  link: ".popup__input_type_link",
};

export const inputSelectorsEditForm = {
  name: ".popup__input_type_name",
  about: ".popup__input_type_about",
};

export const inputSelectorsEditAvatarForm = {
  link: ".popup__input_type_link",
};

export const selectorsUserInfo = {
  selectorName: ".profile__name",
  selectorAbout: ".profile__about",
  selectorAvatar: ".profile__avatar",
};

export const content = document.querySelector(".content");
export const editButton = content.querySelector(".profile__btn_action_edit");
export const addButton = content.querySelector(".profile__btn_action_add");
export const editAvatarButton = content.querySelector(
  ".profile__btn_action_edit-avatar"
);

export const validationSettings = {
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__btn_action_submit",
  inactiveButtonClass: "popup__btn__disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

export const apiSettings = {
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-16123",
  headers: {
    authorization: "fcd9a632-5cad-436c-b58e-4c80d498006a",
    "Content-Type": "application/json",
  },
};
