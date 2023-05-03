import { galleryItems } from './gallery-items.js';
// Change code below this line
const ulGalleryEl = document.querySelector('.gallery');
const createMarkup = createGallery(galleryItems);
ulGalleryEl.insertAdjacentHTML('beforeend', createMarkup);
function createGallery(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
        <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
        />
    </a>
</li>`
    }).join('');
};
const openModal = (event => {
    event.preventDefault();
    const { target } = event;
    const instance = basicLightbox.create(`
        <img src="${target.dataset.source}">
        `)
    instance.show()
    const closeModal = (event => {
        if (event.code === 'Escape') {
            instance.close();
            window.removeEventListener('keydown', closeModal);
        }
    })
    window.addEventListener('keydown', closeModal);
});
ulGalleryEl.addEventListener('click', openModal);
console.log(galleryItems);
