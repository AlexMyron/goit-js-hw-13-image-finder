import { refs } from './refs';
import splideTpl from '../templates/splide-tpl.hbs';
import ApiService from './apiService';
import Splide from '@splidejs/splide';

const spildeList = document.querySelector('.splide__list');
// console.log(ApiService);

const apiServiceSplide = new ApiService();

refs.gallery.addEventListener('click', onClickToSplide);

async function onClickToSplide(e) {
  e.preventDefault();

  // if (e.target.nodeName !== 'IMG') {
  //   return;
  // }

  const value = refs.form.elements.query.value.trim();

  try {
    new Splide('.splide').mount();
    const result = await apiServiceSplide.aFetchRequest(value);
    apiServiceSplide.markupSlider(result);
    console.log(result);

    // isBtnHidden(false);
    // alertMsg(value);
  } catch (error) {
    // alertError(error);
    console.log('ERROR', error);
  }
}
