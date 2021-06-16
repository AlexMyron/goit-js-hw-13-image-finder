import ApiService from './apiService';
import { refs } from './refs';
import { isBtnHidden } from './refs';
import alertMsg from './pnotifyer';

const debounce = require('lodash.debounce');
refs.form.addEventListener('input', debounce(onInputSearch, 1000));
refs.loadMoreBtn.addEventListener('click', onLoadMore);

const apiService = new ApiService();

async function onInputSearch(e) {
  e.preventDefault();

  const value = refs.form.elements.query.value.trim();

  if (value === '') {
    return clearMarkupAndHideBtn();
  }

  try {
    const result = await apiService.aFetchRequest(value);
    apiService.markupGallery(result);

    alertMsg(value);
    isBtnHidden(false);
  } catch (error) {
    console.log('ERROR', error);
  }
}

const scrollOptions = {
  behavior: 'smooth',
  block: 'end',
  inline: 'nearest',
};

async function onLoadMore(e) {
  e.preventDefault();

  const value = refs.form.elements.query.value.trim();

  if (value === '') {
    return clearMarkupAndHideBtn();
  }

  apiService.incrementPage();
  try {
    const result = await apiService.aFetchRequest(value);
    apiService.markupGallery(result);
    refs.gallery.scrollIntoView(scrollOptions);
  } catch (error) {
    console.log('ERROR', error);
  }
}

function clearMarkupAndHideBtn() {
  apiService.clearMarkup();
  return isBtnHidden(true);
}
