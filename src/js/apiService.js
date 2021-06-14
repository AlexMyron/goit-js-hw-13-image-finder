import galleryTpl from '../templates/gallery-item-tpl.hbs';
import refs from './refs';

const API_KEY = '22046149-41a2515b5a783e6a5f4bfbfcc';

export default class ApiService {
  constructor(query) {
    this.page = 1;
    this.URL = `&page=${this.page}&per_page=12&key=${API_KEY}`;
  }

  fetchRequest(url) {
    console.log(this.URL);
    console.log(this.page);
    return fetch(`${url}${this.URL}`)
      .then(resolve => resolve.json())
      .then(result => {
        return result;
      })
      .catch(error => console.log('ERROR:', error));
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  markupGallery(request) {
    const galleryMarkup = galleryTpl(request);
    refs.gallery.insertAdjacentHTML('beforeend', galleryMarkup);
  }

  clearMarkup() {
    refs.gallery.innerHTML = '';
  }
}
