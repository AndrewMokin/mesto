import Popup from './Popup.js'
export default class PopupWithImage extends Popup {
  constructor (popupElement) {
    super (popupElement)
    this._popupElement = document.querySelector('.popup__image');
    this._popupElement = document.querySelector('.popup__note');
  }
  open (link,name) {
    super.open();
    this._popupImageLink.src = link;
    this._popupImageLink.alt = name;
    this._popupImageNote.textContent = name;
    console.log(link)
  }

}
