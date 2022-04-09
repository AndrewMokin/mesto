import {profile,enableValidation,profileButton,newPlaceButton,popupProfile,popupPlace,nameInput,jobInput,popupImage,listContainerElement,popupDelete,popupAvatar} from '../utils/constants.js'
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithSubmit from '../components/PopupWithSubmit';
import UserInfo from '../components/UserInfo.js';
import './index.css';
import Api from '../components/Api.js';
let userId;
const api = new Api({
  address: 'https://mesto.nomoreparties.co/v1/cohort-38',
  token: '5915b378-e30a-47e1-90fe-a5a0aac62f5e'
})

const formProfileValidator = new FormValidator(enableValidation, popupProfile);
const formPlaceValidator = new FormValidator(enableValidation, popupPlace);
const formAvatarValidator = new FormValidator(enableValidation, popupAvatar);
formProfileValidator.enableValidation();
formPlaceValidator.enableValidation();
formAvatarValidator.enableValidation();

formPlaceValidator.resetValidation();

const popupWithImage = new PopupWithImage(popupImage)

Promise.all([api.getCards(),api.getUserInfo()])
  .then(([initialCards,data]) =>{
    userInfo.setUserInfo (data.name,data.about)
    userInfo.setUserAvatar (data.avatar)
    userId = data._id;
    renderCard.render(initialCards)
  }).catch(err => console.log(err))

popupWithImage.setEventListeners()


const handleCardClick = (link, name) => {popupWithImage.open(link, name)}

const renderCard = new Section ({
  items: [],
  renderer: (item) => {
    return addCard(item)
  }
  },listContainerElement);



const popupWithFormPlace = new PopupWithForm(
  popupPlace,handleAddPlace);

newPlaceButton.addEventListener('click', function(){
  popupWithFormPlace.open();
  formPlaceValidator.resetValidation()
});

popupWithFormPlace.setEventListeners()

function addCard (item) {
  const card = new Card(api,'.template',item, handleCardClick, handleTrashClick,userId);
  const cardElement = card.generateCard();
  return cardElement
}

const popupWithSubmit = new PopupWithSubmit(popupDelete,api);

popupWithSubmit.setEventListeners()

function handleTrashClick (data,element) {
  popupWithSubmit.open(data,element)
}

const popupWhithAvatar = new PopupWithForm (popupAvatar,handleAvatarClick);

document.querySelector('.profile__button-editing').addEventListener('click', function(){
  popupWhithAvatar.open()
  formAvatarValidator.resetValidation()
})

function handleAddPlace (item) {
api.addCard (item)
  .then(res => {
    const card = addCard (res)
    renderCard.addItem(card);
  })
  .catch(err => console.log(err))
  .finally(()=> {
    popupWithFormPlace.loading(false)
    popupWithFormPlace.close();
  })
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

const userInfo = new UserInfo({nameProfileSelector:'.profile__name',informProfileSelector:'.profile__description',avatarProfileSelector: '.profile__image'})

function handleAvatarClick (item) {
  const avatar = item.linkAvatar
  api.changeAvatar(avatar).then((res) => {
    userInfo.setUserAvatar (avatar)
  })
  .catch(err => console.log(err))
  .finally(()=> {
    popupWhithAvatar.loading(false)
    popupWhithAvatar.close();
  })
}
popupWhithAvatar.setEventListeners();

function handleProfileSubmitForm (item) {
  api.newProfileInfo (item)
  .then(res => {
    userInfo.setUserInfo (item.profileName,item.profileDescription)
  })
  .catch(err => console.log(err))
  .finally(()=> {
    popupWithFormProfile.loading(false)
    popupWithFormProfile.close();
  })
}





