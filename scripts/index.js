const profileButton = document.querySelector('.profile__editing');
const newPlaceButton = document.querySelector('.profile__add-element')
const popup = document.querySelector('.popup');
const popupPlace = document.querySelector('.popup-place');
const popupCrossButton = popup.querySelector('.popup__close');
const popupCrossButtonPlace = popupPlace.querySelector('.popup__close');
const nameInput = popup.querySelector('.popup__text-form_name');
const jobInput = popup.querySelector('.popup__text-form_job');
const placeInput = popupPlace.querySelector('.popup__text-form_place');
const linkInput = popupPlace.querySelector('.popup__text-form_link');
const namePage = document.querySelector('.profile__name');
const jobPage = document.querySelector('.profile__description');
const popupImage = document.querySelector('.popup-image')
const imageCrossButton = popupImage.querySelector('.popup__close');
const overlay = popup.querySelector('.popup__overlay')
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
  largeImage.addEventListener('click', function(){
    srcPopup.src = item.link;
    namePopup.textContent = item.name;
    popupImage.classList.add('popup_opened');
    document.addEventListener('keydown', closeEsc);
  });

  return newItem;
}

function openPopup(popupElement) {
  const buttonPlace = document.querySelector('.popup__button_place')
  popupElement.classList.add('popup_opened');
  buttonPlace.classList.add('popup__button_disabled');
  buttonPlace.disabled = true;
  document.addEventListener('keydown', closeEsc);
}

function closePopup(popupElement) {
  popupElement.classList.remove('popup_opened');
}

function closeEsc(evt) {
  const popupOpened = document.querySelector('.popup_opened')
  if(evt.key === 'Escape' && popupOpened.classList.contains('popup_opened')) {
    closePopup(popupOpened);
  }
}



function handleSubmitForm () {
  namePage.textContent = nameInput.value;
  jobPage.textContent = jobInput.value;
  closePopup(popup);
}

function handleAddPlace () {
  const inputPlace = placeInput.value;
  const inputLink = linkInput.value;
  const newCard = getItem({name: inputPlace, link: inputLink});
  listContainerElement.prepend(newCard);
  placeInput.value='';
  closePopup(popupPlace);
}



popup.addEventListener('submit',handleSubmitForm);
profileButton.addEventListener('click', function(){
  openPopup(popup);
});
popupCrossButton.addEventListener('click', function(){
  closePopup(popup);
});

newPlaceButton.addEventListener('click', function(){
  openPopup(popupPlace);
});
popupCrossButtonPlace.addEventListener('click', function(){
  closePopup(popupPlace);
});
popupPlace.addEventListener('submit', handleAddPlace);

imageCrossButton.addEventListener('click', function(){
    closePopup(popupImage);
  });

 const popupOverlay = document.querySelectorAll('.popup');
 popupOverlay.forEach((popup) => {
  popup.addEventListener('click', function(evt) {
    if (evt.target.classList.contains('popup__overlay')) {
      popup.classList.remove('popup_opened');
    }
  });
 });

 render();

