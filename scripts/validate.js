const showInputError = (formElement, inputElement, errorMessage, {inputErrorClass, errorClass, ...rest}) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add(inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(errorClass);
};

const hideInputError = (formElement, inputElement, {inputErrorClass, errorClass, ...rest}) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove(inputErrorClass);
  errorElement.textContent = '';
  errorElement.classList.remove(errorClass);
};

const checkInputValidity = (formElement, inputElement, {...rest}) => {
  if (inputElement.validity.valid) {
    hideInputError(formElement, inputElement, rest);
  } else {
    showInputError(formElement, inputElement, inputElement.validationMessage, rest);
  };
};

const hasInvalidInput = (inputList) => {
  return inputList.some(inputElement => !inputElement.validity.valid);
}

const toggleBtn = (inputList, buttonElement, {inactiveButtonClass, ...rest}) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(inactiveButtonClass);
  } else {
    buttonElement.classList.remove(inactiveButtonClass);
  }
}

const setEventListeners = (formElement, {inputSelector, submitButtonSelector, ...rest}) => {

  const inputList = Array.from(formElement.querySelectorAll(inputSelector));
  const buttonElement = formElement.querySelector(submitButtonSelector);

  if (!inputList.length) {
    return;
  }

  toggleBtn(inputList, buttonElement, rest);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      checkInputValidity(formElement, inputElement, rest);
      toggleBtn(inputList, buttonElement, rest);
    });
  });
};

const resetValidationForForm = (formElement, {inputSelector, submitButtonSelector, ...rest}) => {
  const inputList = Array.from(formElement.querySelectorAll(inputSelector));
  const buttonElement = formElement.querySelector(submitButtonSelector);

  toggleBtn(inputList, buttonElement, rest);

  inputList.forEach((inputElement) => {
    hideInputError(formElement, inputElement, rest);
  });
};

const enableValidation = ({formSelector, ...rest}) => {
  const formList = Array.from(document.querySelectorAll(formSelector));

  formList.forEach((formElement) => {
    setEventListeners(formElement, rest);
  });
};


enableValidation({
  formSelector: '.popup__container',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__btn_action_submit',
  inactiveButtonClass: 'popup__btn__disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
});
