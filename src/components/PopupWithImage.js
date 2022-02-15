import Popup from './Popup.js'
export default class PopupWithImage extends Popup {
  constructor (popupElement) {
    super (popupElement)
    this._popupImageLink = this._popupElement.querySelector('.popup__image');
    this._popupImageNote = this._popupElement.querySelector('.popup__note');
  }
  open (link,name) {
    super.open();
    this._popupImageLink.src = link;
    this._popupImageLink.alt = name;
    this._popupImageNote.textContent = name;
  }

}
