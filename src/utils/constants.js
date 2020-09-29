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

export const content = document.querySelector(".content");
export const editButton = content.querySelector(".profile__btn_action_edit");
export const addButton = content.querySelector(".profile__btn_action_add");

export const popupArr = Array.from(document.querySelectorAll(".popup"));
export const validationSettings = {
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__btn_action_submit",
  inactiveButtonClass: "popup__btn__disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

export const popupEdit = document.querySelector(".popup_type_edit");
export const popupEditContainer = popupEdit.querySelector(".popup__container");
export const popupEditInputName = popupEdit.querySelector(".popup__input_type_name");
export const popupEditInputProfession = popupEdit.querySelector(
  ".popup__input_type_profession"
);

export const popupAdd = document.querySelector(".popup_type_add");
export const popupAddContainer = popupAdd.querySelector(".popup__container");
export const popupAddInputName = popupAdd.querySelector(".popup__input_type_name");
export const popupAddInputlink = popupAdd.querySelector(".popup__input_type_link");

export const profileName = content.querySelector(".profile__name");
export const profileProfession = content.querySelector(".profile__profession");

export const cardListSelector = '.cards';
