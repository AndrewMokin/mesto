
const openProfile = document.querySelector('.profile__editing');
const popup = document.querySelector('.popup');
const popupCloseButton = popup.querySelector('.popup__close');
const saveProfile = popup.querySelector('.popup__button')
let nameInput = popup.querySelector('.popup__text-form_name');
let jobInput = popup.querySelector('.popup__text-form_job');
let namePage = document.querySelector('.profile__name');
let jobPage = document.querySelector('.profile__description');

function open() {
  popup.classList.add('popup__opened');
}

function close() {
  popup.classList.remove('popup__opened');
}

openProfile.addEventListener('click', open);
popupCloseButton.addEventListener('click', close);


function formSubmitHandler (evt) {
  evt.preventDefault();
  namePage.textContent = nameInput.value;
  jobPage.textContent = jobInput.value;
}

popup.addEventListener('submit',formSubmitHandler);
saveProfile.addEventListener('click',close);

