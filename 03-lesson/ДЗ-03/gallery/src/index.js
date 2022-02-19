import './css/style.scss'
import { drawGallery } from './js/gallery.js'
import items from './js/items.js'

const rootGallery = document.querySelector('.gallery');

items.forEach(el => {
    rootGallery.appendChild(drawGallery(el));
});

