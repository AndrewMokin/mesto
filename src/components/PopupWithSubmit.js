import Popup from './Popup.js'
export default class PopupWithSubmit extends Popup {
  constructor (popupElement,api) {
    super (popupElement)
    this._api = api
  }

  _deleteCard () {
    this._api.deleteCard(this._data).then((res) => {
      this._element.remove();
      this._element = null;
      super.close();
    })
  }

  open(data,element) {
    this._data = data
    this._element = element
    super.open()
  }

  setEventListeners() {
    super.setEventListeners()
    document.querySelector('.popup__button_delete').addEventListener('click',() =>{
      this._deleteCard()
    })
  }
}
