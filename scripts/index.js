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
const cardElement = document.querySelector('.template');
const allPopups = document.querySelectorAll('.popup');
const srcPopup = document.querySelector('.popup__image');
const namePopup = document.querySelector('.popup__note');
const listContainerElement = document.querySelector('.places');

function render() {
  const html = initialCards.map((item) => {
    return getItem(item);
  });
  listContainerElement.append(...html);

}

function getItem(item) { // функция добавления карточек
  const newItem = cardElement.content.cloneNode(true);
  const cardImageSrc = newItem.querySelector('.place__image');
  const name = newItem.querySelector('.place__title');
  const deleteButton = newItem.querySelector('.place__delete');
  const buttonLike = newItem.querySelector('.place__like');
  cardImageSrc.src = item.link;
  cardImageSrc.alt = item.name;
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
    srcPopup.alt = item.name;
    namePopup.textContent = item.name;
    openPopup(popupImage);
  });

  return newItem;
}

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


function handleProfileSubmitForm () {
  namePage.textContent = nameInput.value;
  jobPage.textContent = jobInput.value;
  closePopup(popupProfile);
}

function handleAddPlace () {
  const inputPlace = placeInput.value;
  const inputLink = linkInput.value;
  const newCard = getItem({name: inputPlace, link: inputLink});
  listContainerElement.prepend(newCard);
  placeInput.value='';
  linkInput.value='';
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

 render();

