import Popup from './Popup.js'
export default class PopupWithSubmit extends Popup {
  constructor (popupElement,api) {
    super (popupElement)
    this._api = api
  }

  _deleteCard (data,element) {
    this._api.deleteCard(data).then((res) => {
      element.remove();
      element = null;
      super.close();
    })
  }

  open() {
    super.open()
  }

  setEventListeners() {
    super.setEventListeners()
    document.querySelector('.popup__button_delete').addEventListener('click',() =>{
      this._deleteCard(data,element)
    })
  }
}
