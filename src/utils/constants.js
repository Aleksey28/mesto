import mysteryShack from "../images/card-mystery-shack.jpg";
import canyon from "../images/card-canyon.jpg";
import northwestManor from "../images/card-northwest-manor.jpg";
import fromDuskToDawn from "../images/card-from-dusk-to-dawn.jpg";
import islandWasAsked from "../images/card-island-was-asked.jpg";
import futureCity from "../images/card-future-city.jpg";

export const initialCards = [
  {
    name: "Хижина чудес",
    link: mysteryShack,
    description: "Хижина в лесу под лучами солнца.",
  },
  {
    name: "Каньон",
    link: canyon,
    description: "Деревня на дне каньона на закате.",
  },
  {
    name: "Поместе Нортвест",
    link: northwestManor,
    description: "Старый и большой особняк под ливнем.",
  },
  {
    name: "От заката до рассвета",
    link: fromDuskToDawn,
    description: "Заброшенный продуктовый магазин.",
  },
  {
    name: "Остров Задавалы",
    link: islandWasAsked,
    description: "Остров посреди озера в тумане.",
  },
  {
    name: "Город будущего",
    link: futureCity,
    description: "Вид на гладиаторскую арену в городе будущего.",
  },
];

export const cardListSelector = ".cards";
export const selectorPopupWithImage = ".popup_type_show";
export const selectorPopupWithAddForm = ".popup_type_add";
export const selectorPopupWithEditForm = ".popup_type_edit";

export const inputSelectorsAddForm = {
  name: ".popup__input_type_name",
  link: ".popup__input_type_link",
};

export const inputSelectorsEditForm = {
  name: ".popup__input_type_name",
  profession: ".popup__input_type_profession",
};

export const selectorsUserInfo = {
  selectorName: ".profile__name",
  selectorProfession: ".profile__profession",
};

export const content = document.querySelector(".content");
export const editButton = content.querySelector(".profile__btn_action_edit");
export const addButton = content.querySelector(".profile__btn_action_add");

export const validationSettings = {
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__btn_action_submit",
  inactiveButtonClass: "popup__btn__disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};
