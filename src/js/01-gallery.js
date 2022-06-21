// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
const marcup = galleryItems.map(({ preview, original, description }) => {
  return `
  <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
});
gallery.insertAdjacentHTML('afterbegin', marcup.join(''));

var lightbox = new SimpleLightbox('.gallery a', {
  captionData: 'alt',
  animationSpeed: 500,
});
