import "./index.css";

import {
  initialCards,
  cardListSelector,
  selectorPopupWithImage,
  selectorPopupWithAddForm,
  selectorPopupWithEditForm,
  selectorPopupWithEditAvatarForm,
  selectorPopupWithConfirm,
  selectorsUserInfo,
  editButton,
  addButton,
  validationSettings,
  inputSelectorsAddForm,
  inputSelectorsEditForm,
  inputSelectorsEditAvatarForm,
  apiSettings,
  editAvatarButton,
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
const apiClass = new Api(apiSettings);

const addCard = (item) => {
  const cardElement = new Card("#card-template", {
    data: item,
    handleCardClick: (item) => {
      popupShow.open(item);
    },
    handleLikeCard: (item) => {},
    handleDeleteIconClick: (item) => {},
  }).generateCard();
  cardList.addItem(cardElement);
};

// const cardList = new Section(
//   {
//     items: initialCards,
//     renderer: addCard,
//   },
//   cardListSelector
// );

const popupShow = new PopupWithImage(selectorPopupWithImage);

const popupAddValidator = new FormValidator(
  validationSettings,
  selectorPopupWithAddForm
);
const popupEditValidator = new FormValidator(
  validationSettings,
  selectorPopupWithEditForm
);

const popupEditAvatarValidator = new FormValidator(
  validationSettings,
  selectorPopupWithEditAvatarForm
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
      apiClass
        .setUserData(data)
        .then((data) => {
          userInfo.setUserInfo(data);
        })
        .catch(console.log)
        .finally(() => {
          popupEdit.close();
        });
    },
    handlerOpen: popupEditValidator.resetValidationForForm.bind(
      popupEditValidator
    ),
  }
);

const popupEditAvatar = new PopupWithForm(
  selectorPopupWithEditAvatarForm,
  inputSelectorsEditAvatarForm,
  {
    handlerSubmit: (data) => {
      apiClass
        .setAvatar(data)
        .then((data) => {
          userInfo.setUserInfo(data);
        })
        .catch(console.log)
        .finally(() => {
          popupEditAvatar.close();
        });
    },
    handlerOpen: popupEditAvatarValidator.resetValidationForForm.bind(
      popupEditAvatarValidator
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

// cardList.rendererItems();
popupShow.setEventListeners();
popupAdd.setEventListeners();
popupEdit.setEventListeners();
popupConfirm.setEventListeners();
popupEditAvatar.setEventListeners();

popupAddValidator.enableValidation();
popupEditValidator.enableValidation();
popupEditAvatarValidator.enableValidation();

editButton.addEventListener("click", () => {
  popupEdit.open(userInfo.getUserInfo());
});

editAvatarButton.addEventListener("click", () => {
  popupEditAvatar.open({ link: "" });
});

addButton.addEventListener("click", () => {
  popupAdd.open({
    name: "",
    link: "",
  });
});

Promise.all([apiClass.getUserData(), apiClass.getCardList()]).then((data) => {
  userInfo.setUserInfo(data[0]);
  // const addCard = (item) => {
  //   const cardElement = new Card("#card-template", {
  //     data: item,
  //     handleCardClick: (item) => {
  //       popupShow.open(item);
  //     },
  //     handleLikeCard: (item) => {},
  //     handleDeleteIconClick: (item) => {},
  //   }).generateCard();
  //   cardList.addItem(cardElement);
  // };

  const cardList = new Section(
    {
      items: data[1],
      renderer: addCard,
    },
    cardListSelector
  );

  cardList.rendererItems();
});
