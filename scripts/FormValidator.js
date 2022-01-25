export default class FormValidator {
  constructor(selector, form) {
    this._inputSelector = selector.inputSelector;
    this._submitButtonSelector = selector.submitButtonSelector;
    this._inactiveButtonClass = selector.inactiveButtonClass;
    this._inputErrorClass = selector.inputErrorClass;
    this._errorClass = selector.errorClass;
    this._form = form;
    this._inputList = this._form.querySelectorAll(this._inputSelector);
    this._submitButton = this._form.querySelector(this._submitButtonSelector);
    this._allinputs = Array.from(this._inputList);
  }
  _setInputListeners() { //ищем инпуты внутри формы и берем из них свойства
    this._inputList.forEach((input) => {
      input.addEventListener('input', () => {
        this._checkIfInputValid(input);
        this._toggleButtonError();
      });
    });
  };
  _checkIfInputValid = (input) => { //метод проверки валидности инпута, берем свойства из массива
    if (!input.validity.valid) {
      this._showError(input, input.validationMessage);
    } else {
      this._hideError(input);
    }
  };
  _showError = (input, errorMessageText) => {
    const errorText = this._form.querySelector(`#${input.id}-error`);
    errorText.textContent = errorMessageText;
    errorText.classList.add(this._errorClass);
    input.classList.add(this._inputErrorClass);
  };
  _hideError = (input) => {
    const errorText = this._form.querySelector(`#${input.id}-error`);
    errorText.textContent = '';
    errorText.classList.remove(this._errorClass);
    input.classList.remove(this._inputErrorClass);
  };
  _hasInvalidInput = () => {
    return this._allinputs.some((el) => {
      return !el.validity.valid;
    });

  };
  _toggleButtonError = () => {
    if (this._hasInvalidInput()) {
      this._submitButton.classList.add(this._inactiveButtonClass);
      this._submitButton.disabled = true;
    } else {
      this._submitButton.classList.remove(this._inactiveButtonClass);
      this._submitButton.disabled = false;
    }
  };
  resetValidation() {
    this._toggleButtonError(this._submitButton);
    this._inputList.forEach((inputElement) => {
      this._hideError(inputElement);
    });
  }
  enableValidation = () => {
    this._setInputListeners();
  };
}

