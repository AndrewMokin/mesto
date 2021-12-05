const initialCards = [
  {name: 'Огни ночной Москвы',
  link: './images/moscow.jpg'},
  {name: 'Бангкок',
  link: './images/bangkok.jpg'},
  {name: 'Из России в Дубаи',
  link: './images/dubai.jpg'},
  {name: 'Гонконг, как Кин-Конг',
  link: './images/hongkong.jpg'},
  {name: 'Лондон, тот самый',
  link: './images/london.jpg'},
  {name: 'Сан-Франциско - Диско',
  link: './images/san_francisco.jpg'},
]

const openProfile = document.querySelector('.profile__editing');
const addPlace = document.querySelector('.profile__add-element')
const popup = document.querySelector('.popup');
const popupPlace = document.querySelector('.popup-place');
const popupCloseButton = popup.querySelector('.popup__close');
const popupCloseButtonPlace = popupPlace.querySelector('.popup__close');
const saveProfile = popup.querySelector('.popup__button')
const nameInput = popup.querySelector('.popup__text-form_name');
const jobInput = popup.querySelector('.popup__text-form_job');
const placeInput = popupPlace.querySelector('.popup__text-form_place');
const linkInput = popupPlace.querySelector('.popup__text-form_link');
let namePage = document.querySelector('.profile__name');
let jobPage = document.querySelector('.profile__description');

const getTemplateEl = document.querySelector('.template');

const listContainerEl = document.querySelector('.places')

function render() {
  const html = initialCards.map((item) => {
    return getItem(item);
  });
  listContainerEl.append(...html);



}


function getItem(item) { // функция добавления карточек
  const newItem = getTemplateEl.content.cloneNode(true);
  const src = newItem.querySelector('.place__image');
  const srcPopup = newItem.querySelector('.popup__image')
  const name = newItem.querySelector('.place__title');
  const namePopup = newItem.querySelector('.popup__note');
  const deleteButton = newItem.querySelector('.place__delete');
  src.src = item.link;
  srcPopup.src = item.link;
  name.textContent = item.name;
  namePopup.textContent = item.name;

  newItem.querySelector('.place__like').addEventListener('click', function(evt) { // лайк карточкам
    evt.target.classList.toggle('place__like_active');
    evt.stopPropagation();
  });

  deleteButton.addEventListener('click', function(evt){ // удаляем карточки
    const placeItem = deleteButton.closest('.place');
    evt.stopPropagation();
    placeItem.remove();
  });

  const openLargeImage = newItem.querySelector('.place');
  const openPopupImage = newItem.querySelector('.popup-image')
  openLargeImage.addEventListener('click', function(){
    openPopupImage.classList.add('popup_opened');
  });

  const closeImageButton = newItem.querySelector('.popup__close');
  closeImageButton.addEventListener('click', function(){
    openPopupImage.classList.remove('popup_opened');
  });

  return newItem;
}

render();



function openPopup() {
  popup.classList.add('popup_opened');
}

function openPopupPlace() {
  popupPlace.classList.add('popup_opened');
}

function closePopup() {
  popup.classList.remove('popup_opened');
}

function closePopupPlace() {
  popupPlace.classList.remove('popup_opened');
}

function formSubmitHandler (evt) {
  evt.preventDefault();
  namePage.textContent = nameInput.value;
  jobPage.textContent = jobInput.value;
  closePopup();
}

function handleAddPlace (evt) {
  evt.preventDefault();
  const inputPlace = placeInput.value;
  const inputLink = linkInput.value;
  const cardAdd = getItem({name: inputPlace, link: inputLink});
  listContainerEl.prepend(cardAdd);
  placeInput.value='';
  closePopupPlace();
}

popup.addEventListener('submit',formSubmitHandler);
openProfile.addEventListener('click', openPopup);
popupCloseButton.addEventListener('click', closePopup);

addPlace.addEventListener('click', openPopupPlace);
popupCloseButtonPlace.addEventListener('click', closePopupPlace);
popupPlace.addEventListener('submit', handleAddPlace);


