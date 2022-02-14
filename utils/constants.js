export const initialCards = [
  {
    name: 'Огни ночной Москвы',
    link: '../images/moscow.jpg'
  },
  {
    name: 'Бангкок',
    link: '../images/bangkok.jpg'
  },
  {
    name: 'Из России в Дубаи',
    link: '../images/dubai.jpg'
  },
  {
    name: 'Гонконг, как Кин-Конг',
    link: '../images/hongkong.jpg'
  },
  {
    name: 'Лондон, тот самый',
    link: '../images/london.jpg'
  },
  {
    name: 'Сан-Франциско - Диско',
    link: '../images/san_francisco.jpg'
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


