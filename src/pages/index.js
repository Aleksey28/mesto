import "./index.css";

import {
  initialCards,
  cardListSelector,
  selectorPopupWithImage,
  selectorPopupWithAddForm,
  selectorPopupWithEditForm,
  selectorPopupWithConfirm,
  selectorsUserInfo,
  editButton,
  addButton,
  validationSettings,
  inputSelectorsAddForm,
  inputSelectorsEditForm,
  apiSettings,
} from "../utils/constants.js";

import Section from "../components/Section.js";
import Card from "../components/Card.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithConfirm from "../components/PopupWithConfirm.js";
import UserInfo from "../components/UserInfo.js";
import FormValidator from "../components/FormValidator.js";
import Api from "../components/Api.js";

const userInfo = new UserInfo(selectorsUserInfo);

const addCard = (item) => {
  const cardElement = new Card(item, "#card-template", (item) => {
    popupShow.open(item);
  }).generateCard();
  cardList.addItem(cardElement);
};

const cardList = new Section(
  {
    items: initialCards,
    renderer: addCard,
  },
  cardListSelector
);

const popupShow = new PopupWithImage(selectorPopupWithImage);

const popupAddValidator = new FormValidator(
  validationSettings,
  selectorPopupWithAddForm
);
const popupEditValidator = new FormValidator(
  validationSettings,
  selectorPopupWithEditForm
);

const popupAdd = new PopupWithForm(
  selectorPopupWithAddForm,
  inputSelectorsAddForm,
  {
    handlerSubmit: addCard,
    handlerOpen: popupAddValidator.resetValidationForForm.bind(
      popupAddValidator
    ),
  }
);

const popupEdit = new PopupWithForm(
  selectorPopupWithEditForm,
  inputSelectorsEditForm,
  {
    handlerSubmit: (data) => {
      userInfo.setUserInfo(data);
    },
    handlerOpen: popupEditValidator.resetValidationForForm.bind(
      popupEditValidator
    ),
  }
);

const popupConfirm = new PopupWithConfirm(selectorPopupWithConfirm, {
  handlerSubmit: () => {
    console.log("Popup Submit was submited");
  },
  handlerOpen: () => {
    console.log("Popup Submit was opened");
  },
});

const apiClass = new Api(apiSettings);
apiClass.getUserData();

cardList.rendererItems();
popupShow.setEventListeners();
popupAdd.setEventListeners();
popupEdit.setEventListeners();
popupConfirm.setEventListeners();

popupAddValidator.enableValidation();
popupEditValidator.enableValidation();

editButton.addEventListener("click", () => {
  popupEdit.open(userInfo.getUserInfo());
});

addButton.addEventListener("click", () => {
  popupAdd.open({
    name: "",
    link: "",
  });
});
