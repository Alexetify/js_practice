'use strict';

import getData from './modules/getData';
import renderCards from './modules/renderCards';
import renderCatalog from './modules/renderCatalog';
import toggleCheckbox from './modules/toggleCheckbox';
import toggleCart from './modules/toggleCart';
import toggleEndCart from './modules/toggleEndCart';
import actionPage from './modules/actionPage';

(async function(){
  const db = await getData();
    renderCards(db);
    renderCatalog();
    toggleCheckbox();
    toggleCart();
    toggleEndCart();
    actionPage();
  
}());







