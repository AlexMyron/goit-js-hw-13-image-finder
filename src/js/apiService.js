import galleryTpl from '../templates/gallery-item-tpl.hbs';
import refs from './refs';

const API_KEY = '22046149-41a2515b5a783e6a5f4bfbfcc';

export default class ApiService {
  constructor() {
    this.page = 1;
  }

  fetchRequest(val) {
    const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${val}&page=${this.page}&per_page=12&key=${API_KEY}`;

    return fetch(url)
      .then(resolve => resolve.json())
      .then(result => {
        return result;
      })
      .catch(error => console.log('ERROR:', error));
  }

  incrementPage() {
    this.page += 1;
  }

  markupGallery(request) {
    const galleryMarkup = galleryTpl(request);
    refs.gallery.insertAdjacentHTML('beforeend', galleryMarkup);
  }
}
