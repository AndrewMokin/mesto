const profileButton = document.querySelector('.profile__editing');
const newPlaceButton = document.querySelector('.profile__add-element')
const popupProfile = document.querySelector('.popup-profile');
const popupPlace = document.querySelector('.popup-place');
const popupCrossButtonProfile = popupProfile.querySelector('.popup__close');
const popupCrossButtonPlace = popupPlace.querySelector('.popup__close');
const nameInput = popupProfile.querySelector('.popup__text-form_name');
const jobInput = popupProfile.querySelector('.popup__text-form_job');
const placeInput = popupPlace.querySelector('.popup__text-form_place');
const linkInput = popupPlace.querySelector('.popup__text-form_link');
const namePage = document.querySelector('.profile__name');
const jobPage = document.querySelector('.profile__description');
const popupImage = document.querySelector('.popup-image');
const imageCrossButton = popupImage.querySelector('.popup__close');
const allPopups = document.querySelectorAll('.popup');
import {initialCards, Card} from './cards.js';
import FormValidator from './FormValidator.js';

const enableValidation = {
	formSelector: '.popup__form',
  inputSelector: '.popup__text-form',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__error_border',
  errorClass: 'popup__error_visible'
};
const formProfileValidator = new FormValidator(enableValidation, popupProfile);
const formPlaceValidator = new FormValidator(enableValidation, popupPlace);
formProfileValidator.enableValidation();
formPlaceValidator.enableValidation();
console.log(formProfileValidator)

const listContainerElement = document.querySelector('.places');

initialCards.forEach((item) => {
  const card = new Card('.template',item.link, item.name, handleClickCard);
  const cardElement = card.generateCard();
  listContainerElement.append(cardElement);
});

function diactivateButtonPlace () {
  const buttonPlace = document.querySelector('.popup__button_place')
  buttonPlace.classList.add('popup__button_disabled');
  buttonPlace.disabled = true;
}

function openPopup(popupElement) {
  popupElement.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEsc);
}

function closePopup(popupElement) {
  popupElement.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEsc)
  document.activeElement.blur()
}

function closeByEsc(evt) {
  if (evt.key === 'Escape') {
    const openPopup = document.querySelector('.popup_opened');
    closePopup(openPopup);
  }
}

function handleProfileSubmitForm (evt) {
  evt.preventDefault();
  namePage.textContent = nameInput.value;
  jobPage.textContent = jobInput.value;
  closePopup(popupProfile);
}

function handleClickCard(link, name) {
  openPopup(popupImage);
  popupImage.querySelector('.popup__image').src = link;
  popupImage.querySelector('.popup__image').alt = link;
  popupImage.querySelector('.popup__note').textContent = name;
}

function handleAddPlace (evt) {
  evt.preventDefault();
  const inputPlace = placeInput.value;
  const inputLink = linkInput.value;
  const cardItem = new Card('.template', inputLink, inputPlace, handleClickCard);
	const card = cardItem.generateCard();
	listContainerElement.prepend(card);
	evt.target.reset();
  closePopup(popupPlace);
}



popupProfile.addEventListener('submit', handleProfileSubmitForm);
profileButton.addEventListener('click', function(){
  openPopup(popupProfile);
});
popupCrossButtonProfile.addEventListener('click', function(){
  closePopup(popupProfile);
});

newPlaceButton.addEventListener('click', function(){
  openPopup(popupPlace);
  diactivateButtonPlace();
});
popupCrossButtonPlace.addEventListener('click', function(){
  closePopup(popupPlace);
});
popupPlace.addEventListener('submit', handleAddPlace);

imageCrossButton.addEventListener('click', function(){
    closePopup(popupImage);
  });

allPopups.forEach((popup) => {
  popup.addEventListener('click', function(evt) {
    if (evt.target.classList.contains('popup__overlay')) {
      closePopup(popup);
    }
  });
});



