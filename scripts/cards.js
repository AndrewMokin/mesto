export default class Card {
  constructor (selector,link, name, handleClickCard) {
    this._selector = selector;
    this._link = link;
    this._name = name;
    this._handleClickCard = handleClickCard;
  }
  _getTemplate() {
    const cardElement = document
    .querySelector(this._selector)
    .content
    .querySelector('.place')
    .cloneNode(true);
    return cardElement;
  }
  generateCard() {
    this._element = this._getTemplate();
    this._likeButton = this._element.querySelector('.place__like')
    this._element.querySelector('.place__image').src = this._link;
    this._element.querySelector('.place__title').textContent = this._name;
    this._element.querySelector('.place__delete').addEventListener('click', this._handleDelitePlace);
    this._likeButton.addEventListener('click', this._handleClickLike);
    this._element.querySelector('.place__image').addEventListener('click', () =>{
      this._handleClickCard(this._link, this._name);
    });
    return this._element;
  }
  _handleDelitePlace = () => {
    this._element.remove();
  }
  _handleClickLike = () => {
    this._likeButton.classList.toggle('place__like_active');
  }
}



