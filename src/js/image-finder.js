import ApiService from './apiService';
import refs from './refs';

const debounce = require('lodash.debounce');
refs.form.addEventListener('input', debounce(onInputSearch, 500));
refs.loadMoreBtn.addEventListener('click', onLoadMore);

const apiService = new ApiService();
// let URL = null;

function onInputSearch(e) {
  e.preventDefault();

  const val = refs.form.elements.query.value;

  apiService.fetchRequest(val).then(result => {
    apiService.markupGallery(result);
  });
}

const scrollOptions = {
  behavior: 'smooth',
  block: 'end',
  inline: 'nearest',
};

function onLoadMore(e) {
  e.preventDefault();

  const val = refs.form.elements.query.value;

  apiService.incrementPage();
  apiService.fetchRequest(val).then(result => apiService.markupGallery(result));
  refs.gallery.scrollIntoView(scrollOptions);
}
