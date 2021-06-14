import ApiService from './apiService';
import refs from './refs';

const debounce = require('lodash.debounce');
refs.form.addEventListener('input', debounce(onInputSearch, 500));
refs.loadMoreBtn.addEventListener('click', onLoadMore);

const apiService = new ApiService();
let URL = null;

function onInputSearch(e) {
  e.preventDefault();

  const val = refs.form.elements.query.value;
  console.log(val);
  URL = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${val}`;

  apiService.fetchRequest(URL).then(result => {
    apiService.markupGallery(result);
  });
}

function onLoadMore(e) {
  e.preventDefault();

  apiService.incrementPage();
  apiService.fetchRequest(URL).then(r => apiService.markupGallery(r));
  refs.gallery.scrollIntoView({
    behavior: 'smooth',
    block: 'end',
    inline: 'nearest',
  });
}
