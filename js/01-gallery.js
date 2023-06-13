import { galleryItems } from "./gallery-items.js";

// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");
const galleryMarkup = createGalleryMarkup(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);

galleryContainer.addEventListener("click", (event) => {
  event.preventDefault();

  if (!event.target.classList.contains("gallery__image")) {
    return;
  }
  onGalleryItemClick();
});

function createGalleryMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
          <a class="gallery__link"  href="${original}">
              <img
              class="gallery__image"
              src="${preview}"
              data-source="${original}"
              alt="${description}"
              />
          </a>
      </li>`;
    })
    .join("");
}

function onGalleryItemClick() {
  const instance = basicLightbox
    .create(
      `<img width="1400" height="900" src="${event.target.dataset.source}">`,
      {
        onShow: (instance) =>
          window.addEventListener("keydown", (evt) => {
            if (evt.key === "Escape") {
              instance.close();
            }
          }),
      }
    )
    .show();
}
