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
const popup = document.querySelector('.popup');
const popupCloseButton = popup.querySelector('.popup__close');
const saveProfile = popup.querySelector('.popup__button')
const nameInput = popup.querySelector('.popup__text-form_name');
const jobInput = popup.querySelector('.popup__text-form_job');
let namePage = document.querySelector('.profile__name');
let jobPage = document.querySelector('.profile__description');

const getTemplateEl = document.querySelector('.template');

const listContainerEl = document.querySelector('.places')

function render() {
  const html = initialCards.map(getItemHTML).join('')
  listContainerEl.insertAdjacentHTML("afterbegin", html);
}

function getItemHTML(item) {
  return `<li class="place">
  <img src=${item.link} alt="Москва" class="place__image">
  <div class="place__info">
    <h2 class="place__title">${item.name}</h2>
    <button type="submit" class="place__like"></button>
  </div>
</li>`
}

render();

// function getItem(item) {
//   const newItem = getTemplateEl.content.cloneNode(true);
//   const src = newItem.querySelector('.place__image');
//   src.classList.add('item.link')
//   return newItem;
// }

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

