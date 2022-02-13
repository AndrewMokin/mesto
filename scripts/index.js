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
const popupImageLink = popupImage.querySelector('.popup__image');
const popupImageNote = popupImage.querySelector('.popup__note');
const imageCrossButton = popupImage.querySelector('.popup__close');
const allPopups = document.querySelectorAll('.popup');
import Cards from './Cards.js';
import FormValidator from './FormValidator.js';
import Popup from '../components/Popup.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';

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

formPlaceValidator.resetValidation();

const listContainerElement = document.querySelector('.places');

// initialCards.forEach((item) => { //рендеринг карточек
//   listContainerElement.append(createCard(item));
// });




// function handleCardClick(link, name) { функция открития попапа карточек
//   openPopup(popupImage);
//   popupImageLink.src = link;
//   popupImageLink.alt = link;
//   popupImageNote.textContent = name;
// }



const popupWithImage = new PopupWithImage(popupImage)
popupWithImage.setEventListeners()

const handleCardClick = (link, name) => {popupWithImage.open(link, name)}
const renderCard = new Section ({
  items: initialCards,
  renderer: (item) => {
    const handleCardClick = (link, name) => {popupWithImage.open(link, name)}
    const card = new Cards('.template',item.link, item.name, handleCardClick);
    const cardElement = card.generateCard();
    return cardElement;

  }

  },listContainerElement);

renderCard.render()

const popupWithFormPlace = new PopupWithForm(
  popupPlace,handleAddPlace);

newPlaceButton.addEventListener('click', function(){
  popupWithFormPlace.open();
});

popupWithFormPlace.setEventListeners()

function handleAddPlace (item) {
  const card = new Cards('.template',item.link, item.place, handleCardClick);
  const cardElement = card.generateCard();
	listContainerElement.prepend(cardElement);
}

// function handleAddPlace (evt) {
//   evt.preventDefault();
//   const inputPlace = placeInput.value;
//   const inputLink = linkInput.value;
//   const card = {name:inputPlace,link:inputLink }
//   createCard(card)
// 	listContainerElement.prepend(createCard(card));
//   console.log(createCard(card))
// 	evt.target.reset();
//   placePopup.close();
// }

const popupWithFormProfile = new PopupWithForm(popupProfile,handleProfileSubmitForm)
profileButton.addEventListener('click', function(){
  popupWithFormProfile.open();
  popupWithFormProfile.setEventListeners();
});

function handleProfileSubmitForm () {
  namePage.textContent = nameInput.value;
  jobPage.textContent = jobInput.value;
  popupWithFormProfile.close();
}

// function handleProfileSubmitForm (evt) {
//   evt.preventDefault();
//   namePage.textContent = nameInput.value;
//   jobPage.textContent = jobInput.value;
//   profilePopup.close();
// }


// function createCard(item) {
//   const card = new Cards('.template',item.link, item.name, handleClickCard);
//   const cardElement = card.generateCard();
//   return cardElement;
// }

// function openPopup(popupElement) {
//   popupElement.classList.add('popup_opened');
//   document.addEventListener('keydown', closeByEsc);
// }


// function closePopup(popupElement) {
//   popupElement.classList.remove('popup_opened');
//   document.removeEventListener('keydown', closeByEsc)
//   document.activeElement.blur()
// }

// function closeByEsc(evt) {
//   if (evt.key === 'Escape') {
//     const openPopup = document.querySelector('.popup_opened');
//     closePopup(openPopup);
//   }
// }





// const profilePopup = new Popup(popupProfile,profileButton,popupCrossButtonProfile);
// profilePopup.setEventListeners();

// const placePopup = new Popup(popupPlace,newPlaceButton,popupCrossButtonPlace);
// placePopup.setEventListeners();

popupProfile.addEventListener('submit', handleProfileSubmitForm);
// profileButton.addEventListener('click', function(){
//   openPopup(popupProfile);
// });
// popupCrossButtonProfile.addEventListener('click', function(){
//   closePopup(popupProfile);
// });

// newPlaceButton.addEventListener('click', function(){
//   openPopup(popupPlace);
//   formPlaceValidator.resetValidation();;
// });
// popupCrossButtonPlace.addEventListener('click', function(){
//   closePopup(popupPlace);
// });
popupPlace.addEventListener('submit', handleAddPlace);

// imageCrossButton.addEventListener('click', function(){
//     closePopup(popupImage);
//   });

// allPopups.forEach((popup) => {
//   popup.addEventListener('click', function(evt) {
//     if (evt.target.classList.contains('popup__overlay')) {
//       closePopup(popup);
//     }
//   });
// });



