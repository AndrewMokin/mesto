import Popup from './Popup.js'
export default class PopupWithForm extends Popup {
  constructor (popupElement,handleFormSumbit) {
    super (popupElement)
    this._handleFormSumbit = handleFormSumbit
    this._inputList = this._popupElement.querySelectorAll('.popup__text-form');
    this._form = this._popupElement.querySelector('.popup__form');
    this._button = this._popupElement.querySelector('.popup__button');
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

  loading(isLoading) {
    if (isLoading === true) {
      this._button.textContent='Сохранение...'
      console.log('да')
    }
    else {
      this._button.textContent = 'Сохранить'
      console.log('да')
    }
  }

  setEventListeners() {
    super.setEventListeners()
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this.loading(true);
      this._handleFormSumbit(this._getInputValues());
    });
  }

}

