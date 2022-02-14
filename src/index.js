import {initialCards,enableValidation,profileButton,newPlaceButton,popupProfile,popupPlace,nameInput,jobInput,popupImage,listContainerElement} from '../utils/constants.js'
import Cards from '../components/Cards.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import '../pages/index.css';

const formProfileValidator = new FormValidator(enableValidation, popupProfile);
const formPlaceValidator = new FormValidator(enableValidation, popupPlace);
formProfileValidator.enableValidation();
formPlaceValidator.enableValidation();

formPlaceValidator.resetValidation();

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
  formPlaceValidator.resetValidation()
});

popupWithFormPlace.setEventListeners()

function handleAddPlace (item) {
  const card = new Cards('.template',item.link, item.place, handleCardClick);
  const cardElement = card.generateCard();
	listContainerElement.prepend(cardElement);
}

const popupWithFormProfile = new PopupWithForm(popupProfile, handleProfileSubmitForm);
profileButton.addEventListener('click', function(){
  popupWithFormProfile.open();
  const userInfoForm = userInfo.getUserInfo();
  nameInput.value = userInfoForm.profileName;
  jobInput.value = userInfoForm.profileDescription;
  formProfileValidator.resetValidation();
});

popupWithFormProfile.setEventListeners();

const userInfo = new UserInfo({nameProfileSelector:'.profile__name',informProfileSelector:'.profile__description'})

userInfo.getUserInfo()

function handleProfileSubmitForm (item) {
  userInfo.setUserInfo (item.profileName,item.profileDescription)
}



