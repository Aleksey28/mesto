/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/scripts/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/pages/index.css":
/*!*****************************!*\
  !*** ./src/pages/index.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/pages/index.css?");

/***/ }),

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pages_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/index.css */ \"./src/pages/index.css\");\n/* harmony import */ var _pages_index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_pages_index_css__WEBPACK_IMPORTED_MODULE_0__);\n\nvar content = document.querySelector(\".content\");\nvar editButton = content.querySelector(\".profile__btn_action_edit\");\nvar addButton = content.querySelector(\".profile__btn_action_add\");\nvar popupArr = Array.from(document.querySelectorAll(\".popup\"));\nvar validationSettings = {\n  inputSelector: \".popup__input\",\n  submitButtonSelector: \".popup__btn_action_submit\",\n  inactiveButtonClass: \"popup__btn__disabled\",\n  inputErrorClass: \"popup__input_type_error\",\n  errorClass: \"popup__error_visible\"\n};\nvar popupEdit = document.querySelector(\".popup_type_edit\");\nvar popupEditContainer = popupEdit.querySelector(\".popup__container\");\nvar popupEditInputName = popupEdit.querySelector(\".popup__input_type_name\");\nvar popupEditInputProfession = popupEdit.querySelector(\".popup__input_type_profession\");\nvar popupEditValidator = new FormValidator(validationSettings, popupEdit);\nvar popupAdd = document.querySelector(\".popup_type_add\");\nvar popupAddContainer = popupAdd.querySelector(\".popup__container\");\nvar popupAddInputName = popupAdd.querySelector(\".popup__input_type_name\");\nvar popupAddInputlink = popupAdd.querySelector(\".popup__input_type_link\");\nvar popupAddValidator = new FormValidator(validationSettings, popupAdd);\nvar profileName = content.querySelector(\".profile__name\");\nvar profileProfession = content.querySelector(\".profile__profession\");\nvar cards = content.querySelector(\".cards\");\n\nvar openPopup = function openPopup(popupToOpen) {\n  popupToOpen.classList.add(\"popup_opened\");\n  document.addEventListener(\"keyup\", closeOpenedPopup);\n};\n\nvar closePopup = function closePopup(popupToClose) {\n  popupToClose.classList.remove(\"popup_opened\");\n  document.removeEventListener(\"keyup\", closeOpenedPopup);\n};\n\nvar closeOpenedPopup = function closeOpenedPopup(evt) {\n  if (evt.key === \"Escape\") {\n    var openedPopup = document.querySelector(\".popup_opened\");\n    closePopup(openedPopup);\n  }\n};\n\nvar addCards = function addCards(cardData) {\n  var cardElement = new Card(cardData, \"#card-template\", openPopup, \".popup_type_show\").generateCard();\n  cards.prepend(cardElement);\n};\n\nvar submitPopupEdit = function submitPopupEdit(evt) {\n  evt.preventDefault();\n  profileName.textContent = popupEditInputName.value;\n  profileProfession.textContent = popupEditInputProfession.value;\n  closePopup(popupEdit);\n};\n\nvar submitPopupAdd = function submitPopupAdd(evt) {\n  evt.preventDefault();\n  addCards({\n    name: popupAddInputName.value,\n    link: popupAddInputlink.value,\n    description: popupAddInputName.value\n  });\n  closePopup(popupAdd);\n};\n\neditButton.addEventListener(\"click\", function () {\n  openPopup(popupEdit);\n  popupEditInputName.value = profileName.textContent;\n  popupEditInputProfession.value = profileProfession.textContent; //Если не сделать reset то:\n  //1. кнопка отправки будет заблокирована в любом случае, так как на момент инициализации валидации поля попап не заполнены.\n  //2. В случае если оставить форму с ошибками и закрыть, то при открытии ошибки останутся, а данные будут перезаполнены.\n\n  popupEditValidator.resetValidationForForm();\n});\naddButton.addEventListener(\"click\", function () {\n  openPopup(popupAdd);\n  popupAddInputName.value = \"\";\n  popupAddInputlink.value = \"\";\n  popupAddValidator.resetValidationForForm();\n});\npopupEditValidator.enableValidation();\npopupAddValidator.enableValidation();\npopupEdit.addEventListener(\"submit\", submitPopupEdit);\npopupAdd.addEventListener(\"submit\", submitPopupAdd);\npopupArr.forEach(function (popupElement) {\n  var popupBtnClose = popupElement.querySelector(\".popup__btn_action_close\");\n  popupElement.addEventListener(\"click\", function (evt) {\n    if (evt.target === evt.currentTarget) {\n      closePopup(popupElement);\n    }\n  });\n  popupBtnClose.addEventListener(\"click\", function () {\n    return closePopup(popupElement);\n  });\n});\ninitialCards.forEach(addCards);\n\n//# sourceURL=webpack:///./src/scripts/index.js?");

/***/ })

/******/ });