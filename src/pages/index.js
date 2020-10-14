import './index.css';

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
} from '../utils/constants.js';

import Section from '../components/Section.js';
import Card from '../components/Card.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithConfirm from '../components/PopupWithConfirm.js';
import UserInfo from '../components/UserInfo.js';
import FormValidator from '../components/FormValidator.js';
import Api from '../components/Api.js';

const apiClass = new Api(apiSettings);

Promise.all([apiClass.getUserData(), apiClass.getCardList()])
  .then((data) => {
    const addCard = (item) => {
      const cardElement = new Card('#card-template', {
        data: item,
        userId: data[0]._id,
        handlerCardClick: (item) => {
          popupShow.open(item);
        },
        handlerLikeCard: (data) => apiClass.toggleCardLike(data),
        handlerDeleteCard: (item, id) => {
          popupConfirm.setHandlerSubmit(() => {
            popupConfirm.toggleLoading();
            apiClass
              .deleteCard(id)
              .then(() => {
                item.remove();
                item = null;
              })
              .catch(console.log)
              .finally(() => {
                popupConfirm.close();
                popupConfirm.toggleLoading();
              });
          });
          popupConfirm.open();
        },
      }).generateCard();
      return cardElement;
    };

    const userInfo = new UserInfo(selectorsUserInfo);
    const cardList = new Section(
      {
        items: data[1].sort((a, b) => Date.parse(a.createdAt) - Date.parse(b.createdAt)),
        renderer: addCard,
      },
      cardListSelector,
    );

    const popupAddValidator = new FormValidator(validationSettings, selectorPopupWithAddForm);
    const popupEditValidator = new FormValidator(validationSettings, selectorPopupWithEditForm);
    const popupEditAvatarValidator = new FormValidator(validationSettings, selectorPopupWithEditAvatarForm);

    const popupShow = new PopupWithImage(selectorPopupWithImage);
    const popupEdit = new PopupWithForm(selectorPopupWithEditForm, inputSelectorsEditForm, {
      handlerSubmit: (data) => {
        popupEdit.toggleLoading();
        apiClass
          .setUserData(data)
          .then((data) => {
            userInfo.setUserInfo(data);
          })
          .catch(console.log)
          .finally(() => {
            popupEdit.close();
            popupEdit.toggleLoading();
          });
      },
      handlerOpen: popupEditValidator.resetValidationForForm.bind(popupEditValidator),
    });
    const popupEditAvatar = new PopupWithForm(selectorPopupWithEditAvatarForm, inputSelectorsEditAvatarForm, {
      handlerSubmit: (data) => {
        popupEditAvatar.toggleLoading();
        apiClass
          .setAvatar(data)
          .then((data) => {
            userInfo.setUserInfo(data);
          })
          .catch(console.log)
          .finally(() => {
            popupEditAvatar.close();
            popupEditAvatar.toggleLoading();
          });
      },
      handlerOpen: popupEditAvatarValidator.resetValidationForForm.bind(popupEditAvatarValidator),
    });
    const popupAdd = new PopupWithForm(selectorPopupWithAddForm, inputSelectorsAddForm, {
      handlerSubmit: (data) => {
        popupAdd.toggleLoading();
        apiClass
          .addCard(data)
          .then((data) => {
            cardList.addItem(addCard(data));
          })
          .catch(console.log)
          .finally(() => {
            popupAdd.close();
            popupAdd.toggleLoading();
          });
      },
      handlerOpen: popupAddValidator.resetValidationForForm.bind(popupAddValidator),
    });
    const popupConfirm = new PopupWithConfirm(selectorPopupWithConfirm);

    return {
      data,
      cardList,
      userInfo,
      popupShow,
      popupAdd,
      popupEdit,
      popupConfirm,
      popupEditAvatar,
      popupAddValidator,
      popupEditValidator,
      popupEditAvatarValidator,
    };
  })
  .then(
    ({
      data,
      cardList,
      userInfo,
      popupShow,
      popupAdd,
      popupEdit,
      popupConfirm,
      popupEditAvatar,
      popupAddValidator,
      popupEditValidator,
      popupEditAvatarValidator,
    }) => {
      userInfo.setUserInfo(data[0]);
      cardList.render();
      popupConfirm.setUserInfo(data[0]);

      popupShow.setEventListeners();
      popupAdd.setEventListeners();
      popupEdit.setEventListeners();
      popupConfirm.setEventListeners();
      popupEditAvatar.setEventListeners();

      popupAddValidator.enableValidation();
      popupEditValidator.enableValidation();
      popupEditAvatarValidator.enableValidation();

      editButton.addEventListener('click', () => {
        popupEdit.open(userInfo.getUserInfo());
      });

      editAvatarButton.addEventListener('click', () => {
        popupEditAvatar.open({ link: '' });
      });

      addButton.addEventListener('click', () => {
        popupAdd.open({
          name: '',
          link: '',
        });
      });
    },
  )
  .catch((error) => {
    const elementError = document.createElement('p');
    elementError.textContent = error;
    elementError.classList.add('error');
    document.body.append(elementError);
  });
