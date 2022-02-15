import Popup from './Popup.js'
export default class PopupWithForm extends Popup {
  constructor (popupElement,handleFormSumbit) {
    super (popupElement)
    this._handleFormSumbit = handleFormSumbit
    this._inputList = this._popupElement.querySelectorAll('.popup__text-form');
    this._form = this._popupElement.querySelector('.popup__form');
  }
  _getInputValues() {

    this._formValues = {};
    this._inputList.forEach(input => {
      this._formValues[input.id] = input.value;


    });
    return this._formValues
  }

  close() {
    super.close()
    this._form.reset();
  }

  setEventListeners() {
    super.setEventListeners()
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleFormSumbit(this._getInputValues());
      this.close();
    });
  }

}

