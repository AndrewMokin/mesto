const initialCards = [
  name:
  link: ''
]


const openProfile = document.querySelector('.profile__editing');
const popup = document.querySelector('.popup');
const popupCloseButton = popup.querySelector('.popup__close');
const saveProfile = popup.querySelector('.popup__button')
const nameInput = popup.querySelector('.popup__text-form_name');
const jobInput = popup.querySelector('.popup__text-form_job');
let namePage = document.querySelector('.profile__name');
let jobPage = document.querySelector('.profile__description');

function openPopup() {
  popup.classList.add('popup_opened');
}

function closePopup() {
  popup.classList.remove('popup_opened');
}

function formSubmitHandler (evt) {
  evt.preventDefault();
  namePage.textContent = nameInput.value;
  jobPage.textContent = jobInput.value;
  closePopup();
}

popup.addEventListener('submit',formSubmitHandler);
openProfile.addEventListener('click', openPopup);
popupCloseButton.addEventListener('click', closePopup);

