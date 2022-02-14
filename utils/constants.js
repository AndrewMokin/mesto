import moscow from '../images/moscow.jpg';
import bangkok from '../images/bangkok.jpg';
import dubai from '../images/dubai.jpg';
import hongkong from '../images/hongkong.jpg';
import london from '../images/london.jpg';
import san_francisco from '../images/san_francisco.jpg';

export const initialCards = [
  {
    name: 'Огни ночной Москвы',
    link: moscow
  },
  {
    name: 'Бангкок',
    link: bangkok
  },
  {
    name: 'Из России в Дубаи',
    link: dubai
  },
  {
    name: 'Гонконг, как Кин-Конг',
    link: hongkong
  },
  {
    name: 'Лондон, тот самый',
    link: london
  },
  {
    name: 'Сан-Франциско - Диско',
    link: san_francisco
  },
]

export const enableValidation = {
	formSelector: '.popup__form',
  inputSelector: '.popup__text-form',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__error_border',
  errorClass: 'popup__error_visible'
};

export const profileButton = document.querySelector('.profile__editing');
export const newPlaceButton = document.querySelector('.profile__add-element')
export const popupProfile = document.querySelector('.popup-profile');
export const popupPlace = document.querySelector('.popup-place');
export const nameInput = popupProfile.querySelector('.popup__text-form_name');
export const jobInput = popupProfile.querySelector('.popup__text-form_job');
export const popupImage = document.querySelector('.popup-image');
export const listContainerElement = document.querySelector('.places');


