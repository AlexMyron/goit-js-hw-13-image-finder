import ApiService from './apiService';
import { refs } from './refs';
import { isBtnHidden } from './refs';
import alertMsg from './pnotifyer';

const debounce = require('lodash.debounce');
refs.form.addEventListener('input', debounce(onInputSearch, 1000));
refs.loadMoreBtn.addEventListener('click', onLoadMore);

const apiService = new ApiService();

function onInputSearch(e) {
  e.preventDefault();

  const value = refs.form.elements.query.value.trim();

  if (value === '') {
    return clearMarkupAndHideBtn();
  }

  apiService.fetchRequest(value).then(result => {
    apiService.markupGallery(result);
  });
  alertMsg(value);
  isBtnHidden(false);
}

const scrollOptions = {
  behavior: 'smooth',
  block: 'end',
  inline: 'nearest',
};

function onLoadMore(e) {
  e.preventDefault();

  const value = refs.form.elements.query.value.trim();

  if (value === '') {
    return clearMarkupAndHideBtn();
  }

  apiService.incrementPage();
  apiService
    .fetchRequest(value)
    .then(result => apiService.markupGallery(result));
  refs.gallery.scrollIntoView(scrollOptions);
}

function clearMarkupAndHideBtn() {
  apiService.clearMarkup();
  return isBtnHidden(true);
}
