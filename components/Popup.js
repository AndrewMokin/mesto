export default class Popup {
  constructor (popupElement) {
    this._popupElement = popupElement;
    // this._popupButton = popupButton;
    this._popupCrossButton = this._popupElement.querySelector('.popup__close')
  }
  open() {
    this._popupElement.classList.add('popup_opened')
  }
  close() {
    this._popupElement.classList.remove('popup_opened')
  }
  _handleEscClose =(evt) => {
    if (evt.key === 'Escape') {
      this.close('popup_opened');
    }
  }
  _handleClickOverlay = (evt) => {
    if (evt.target.classList.contains('popup__overlay')) {
      this.close('popup_opened');
    }
  }
  setEventListeners() {
    // this._popupButton.addEventListener('click',this.open)
    this._popupCrossButton.addEventListener('click',this.close.bind(this))
    document.addEventListener('keydown', this._handleEscClose);
    document.addEventListener('click', this._handleClickOverlay);
  }
}
