import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', handleSubmit);

async function handleSubmit(event) {
  event.preventDefault();

  const { elements } = event.target;
  const request = elements['search-text'].value.trim();

  if (request === '') {
    iziToast.error({
      title: 'Error',
      message: 'Please enter a search term!',
      position: 'topRight',
    });
    return;
  }

  if (request.length < 3) {
    iziToast.error({
      title: 'Error',
      message: 'Search term must be at least 3 characters long!',
      position: 'topRight',
    });
    return;
  }

  clearGallery();
  showLoader();

  const MIN_LOADER_TIME = 1000;
  const startTime = Date.now();

  try {
    const data = await getImagesByQuery(request);

    if (data.hits.length === 0) {
      iziToast.error({
        title: 'No Results',
        message: 'No images found. Please try again!',
        position: 'topRight',
      });
    }

    const elapsed = Date.now() - startTime;
    const delay = Math.max(MIN_LOADER_TIME - elapsed, 0);

    setTimeout(() => {
      hideLoader();
      if (data.hits.length > 0) {
        createGallery(data.hits);
      }
    }, delay);
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: 'Something went wrong. Please try again later.',
      position: 'topRight',
    });
    hideLoader();
  }
}
