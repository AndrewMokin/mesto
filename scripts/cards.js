
export const initialCards = [
  {
    name: 'Огни ночной Москвы',
    link: './images/moscow.jpg'
  },
  {
    name: 'Бангкок',
    link: './images/bangkok.jpg'
  },
  {
    name: 'Из России в Дубаи',
    link: './images/dubai.jpg'
  },
  {
    name: 'Гонконг, как Кин-Конг',
    link: './images/hongkong.jpg'
  },
  {
    name: 'Лондон, тот самый',
    link: './images/london.jpg'
  },
  {
    name: 'Сан-Франциско - Диско',
    link: './images/san_francisco.jpg'
  },
]

export class Card {
  constructor (link, name, handleClickCard) {
    this._link = link;
    this._name = name;
    this._handleClickCard = handleClickCard;
  }
  _getTemplate() {
    const cardElement = document
    .querySelector('.template')
    .content
    // .querySelector('.place')
    .cloneNode(true);
    return cardElement;
  }
  generateCard() {
    this._element = this._getTemplate();
    this._element.querySelector('.place__image').src = this._link;
    this._element.querySelector('.place__title').textContent = this._name;
    this._element.querySelector('.place__delete').addEventListener('click', this._handleDelitePlace);
    this._element.querySelector('.place__like').addEventListener('click', this._handleClickLike);
    this._element.querySelector('.place').addEventListener('click', () =>{
      this._handleClickCard(this._link, this._name);
    });
    return this._element;
  }
  _handleDelitePlace = (evt) => {
    this._element.remove();
    evt.stopPropagation();
  }
  _handleClickLike = (evt) => {
    this._element.querySelector('.place__like').classList.toggle('place__like_active');
    evt.stopPropagation();
  }
}



