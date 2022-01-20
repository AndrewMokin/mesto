
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

export const popupImage = document.querySelector('.popup-image');
export const srcPopup = document.querySelector('.popup__image');
import {openPopup} from './index.js';

//   largeImage.addEventListener('click', function(){
//     srcPopup.src = item.link;
//     srcPopup.alt = item.name;
//     namePopup.textContent = item.name;
//     openPopup(popupImage);
//   });

// function openPopup(popupElement) {
//   popupElement.classList.add('popup_opened');
//   // document.addEventListener('keydown', closeByEsc);
// }



export class Card {
  constructor (link, name) {
    this._link = link;
    this._name = name;

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
    this._element.querySelector('.place').addEventListener('click', this._handleClickCard);
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
  _handleClickCard = () => {
    const popupImage = document.querySelector('.popup-image');
    openPopup(popupImage);
    popupImage.querySelector('.popup__image').src = this._link;
    popupImage.querySelector('.popup__image').alt = this._link;
    popupImage.querySelector('.popup__note').textContent = this._name;
  }
}



