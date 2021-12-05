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
const namePage = document.querySelector('.profile__name');
const jobPage = document.querySelector('.profile__description');

const cardElement = document.querySelector('.template');

const listContainerElement = document.querySelector('.places')

function render() {
  const html = initialCards.map((item) => {
    return getItem(item);
  });
  listContainerElement.append(...html);

}

function getItem(item) { // функция добавления карточек
  const newItem = cardElement.content.cloneNode(true);
  const cardImageSrc = newItem.querySelector('.place__image');
  const srcPopup = document.querySelector('.popup__image')
  const name = newItem.querySelector('.place__title');
  const namePopup = document.querySelector('.popup__note');
  const deleteButton = newItem.querySelector('.place__delete');
  const buttonLike = newItem.querySelector('.place__like');
  cardImageSrc.src = item.link;
  name.textContent = item.name;

  buttonLike.addEventListener('click', function(evt) { // лайк карточкам
    evt.target.classList.toggle('place__like_active');
    evt.stopPropagation();
  });

  deleteButton.addEventListener('click', function(evt){ // удаляем карточки
    const placeItem = deleteButton.closest('.place');
    evt.stopPropagation();
    placeItem.remove();
  });

  const largeImage = newItem.querySelector('.place');
  const popupImage = document.querySelector('.popup-image')
  largeImage.addEventListener('click', function(){
    srcPopup.src = item.link;
    namePopup.textContent = item.name;
    popupImage.classList.add('popup_opened');
  });

  const closeImageButton = popupImage.querySelector('.popup__close');
  closeImageButton.addEventListener('click', function(){
    popupImage.classList.remove('popup_opened');
  });

  return newItem;


}

function openPopup(popupElement) {
  popupElement.classList.add('popup_opened');
}

function closePopup(popupElement) {
  popupElement.classList.remove('popup_opened');
}

function handleSubmitForm (evt) {
  evt.preventDefault();
  namePage.textContent = nameInput.value;
  jobPage.textContent = jobInput.value;
  closePopup(popup);
}

function handleAddPlace (evt) {
  evt.preventDefault();
  const inputPlace = placeInput.value;
  const inputLink = linkInput.value;
  const newCard = getItem({name: inputPlace, link: inputLink});
  listContainerElement.prepend(newCard);
  placeInput.value='';
  closePopup(popupPlace);
}

render();

popup.addEventListener('submit',handleSubmitForm);
openProfile.addEventListener('click', function(){
  openPopup(popup);
});
popupCloseButton.addEventListener('click', function(){
  closePopup(popup);
});

addPlace.addEventListener('click', function(){
  openPopup(popupPlace);
});
popupCloseButtonPlace.addEventListener('click', function(){
  closePopup(popupPlace);
});
popupPlace.addEventListener('submit', handleAddPlace);


