const showError = (form, input, errorMessageText, inputErrorClass, errorMessageClass) => {
  const errorMessage = form.querySelector(`#${input.id}-error`);
  errorMessage.textContent = errorMessageText;
  errorMessage.classList.add(errorMessageClass);
  input.classList.add(inputErrorClass);
}

const hideError = (form, input, inputErrorClass, errorMessageClass) => {
  const errorMessage = form.querySelector(`#${input.id}-error`);
  errorMessage.textContent = '';
  errorMessage.classList.remove(errorMessageClass);
  input.classList.remove(inputErrorClass);
}

const hasInvalidInput = (inputs) => {
  return Array.from(inputs).some((element) => !element.validity.valid);
}

const toggleButtonError = (inputs, button, inactiveButtonClass) => {
  if (hasInvalidInput(inputs)) {
    button.classList.add(inactiveButtonClass);
    button.disabled = true;
  } else {
    button.classList.remove(inactiveButtonClass);
    button.disabled = false;
  }
}

const checkIfInputValid = (form, input, {inputErrorClass, errorClass}) => { //функция проверка валидности инпута, берем свойства из массива
  if (!input.validity.valid) {
    showError(form, input, input.validationMessage, inputErrorClass, errorClass);
  } else {
    hideError(form, input, inputErrorClass, errorClass);
  }
}

const setInputListeners = (form, {inputSelector, submitButtonSelector, inactiveButtonClass, ...rest}) => { //ищем инпуты внутри формы и берем из них свойства
  const inputs = form.querySelectorAll(inputSelector);
  const submitButton = form.querySelector(submitButtonSelector)
  inputs.forEach((input) => {
    input.addEventListener('input', () => {
      checkIfInputValid(form, input, rest);
      toggleButtonError(form, submitButton, inactiveButtonClass);
    });
  });
}

const enableValidation = ({formSelector,...rest}) => {
  const forms = document.querySelectorAll(formSelector); //ищем формы на странице

  forms.forEach((form) => { //проходимся по формам и отключаем стандартную отправку форм на сервер
    form.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    setInputListeners(form, rest); //вызываем функцию поиска инпутов для каждой формы
  });
}

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__text-form',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__error_border',
  errorClass: 'popup__error_visible'
});



