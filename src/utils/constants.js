export const enableValidation = {
	formSelector: '.popup__form',
  inputSelector: '.popup__text-form',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__error_border',
  errorClass: 'popup__error_visible'
};

export const profile = document.querySelector('.profile');
export const profileButton = document.querySelector('.profile__editing');
export const newPlaceButton = document.querySelector('.profile__add-element')
export const popupProfile = document.querySelector('.popup-profile');
export const popupPlace = document.querySelector('.popup-place');
export const popupDelete = document.querySelector('.popup-delete');
export const nameInput = popupProfile.querySelector('.popup__text-form_name');
export const jobInput = popupProfile.querySelector('.popup__text-form_job');
export const popupImage = document.querySelector('.popup-image');
export const listContainerElement = document.querySelector('.places');
export const place = document.querySelector('.place');
export const trash = document.querySelector('.place__delete');
export const popupAvatar= document.querySelector('.popup-avatar')



