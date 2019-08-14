'use strict';

//checkbox

function toggleCheckbox(){
  const checkbox = document.querySelectorAll('.filter-check_checkbox');

  checkbox.forEach(function(element)  {
      element.addEventListener('change', function(){
          if(this.checked ) {
          this.nextElementSibling.classList.add('checked')
          } else {
              this.nextElementSibling.classList.remove('checked')
          }
      });
  
  });
}


//end checkbox

//корзина
function toggleCart(){
  const btnCart = document.getElementById('cart');
  const modalCart = document.querySelector('.cart');
  const closeBtn = document.querySelector('.cart-close');
  
  btnCart.addEventListener('click', () => {
    modalCart.style.display = 'flex';
    modalCart.style.backgroundColor = '#1b1b1b';
    document.body.style.overflow = 'hidden';
  });
  
  closeBtn.addEventListener('click', ()=>{
    modalCart.style.display = 'none';
    document.body.style.overflow = '';
  });
}

// end корзина

//добавление, удаление товара в корзину
function toggleEndCart() {
  const cards = document.querySelectorAll('.goods .card');
  const cartWrapper = document.querySelector('.cart-wrapper');
  const cartEmpty = document.getElementById('cart-empty');
  const countGoods = document.querySelector('.counter');
  
  
  
  cards.forEach((card) =>{
    const btn = card.querySelector('button');
  
    btn.addEventListener('click', () => {
        const cardClone = card.cloneNode(true);
        cartWrapper.appendChild(cardClone);
        showData();
  
        const removeBtn = cardClone.querySelector('.btn');
        removeBtn.textContent = 'Удалить из корзины';
        removeBtn.addEventListener('click', () =>{
          cardClone.remove();
          showData();
  
        });
    });
  });
  
  function showData() {
      const cardsCart = cartWrapper.querySelectorAll('.card');
      const cardsPrice = cartWrapper.querySelectorAll('.card-price');
      const cardTotal = document.querySelector('.cart-total span');
      let sum = 0;
      countGoods.textContent = cardsCart.length;
  
      cardsPrice.forEach((cardPrice) =>{
        let price = parseFloat(cardPrice.textContent);
        sum += price;
      });
  
      cardTotal.textContent = sum;
  
      if(cardsCart.length !== 0) {
        cartEmpty.remove();
      } else {
        cartWrapper.appendChild(cartEmpty);
      }
  
  }
}
//end добавление, удаление товара в корзину



//Фильтр Акция
function actionPage() {
  const cards = document.querySelectorAll('.goods .card');
  const discountCheckbox =document.getElementById('discount-checkbox');
  //const goods = document.querySelector('.goods');
  const min = document.getElementById('min');
  const max =document.getElementById('max');
  const search = document.querySelector('.search-wrapper_input');
  const searchBtn = document.querySelector('.search-btn');

  discountCheckbox.addEventListener('click', () => {
    cards.forEach((card) => {
      if(discountCheckbox.checked) {
        if(!card.querySelector('.card-sale')){
          //card.parentNode.remove();
          card.parentNode.style.display = 'none';
        }

      } else {
        //goods.appendChild(card.parentNode);

        card.parentNode.style.display = '';

      }

    });

  });

  min.addEventListener('change', filterPrice);
  max.addEventListener('change', filterPrice);

  //фильтр
  function filterPrice() {
    cards.forEach((card) => {
      const cardPrice = card.querySelector('.card-price');
      const price = parseFloat(cardPrice.textContent);

      if ((min.value && price < min.value) || (max.value && price > max.value)){
        
        card.parentNode.style.display = 'none';
        //card.ParentNode.remove();
      } else {

        card.parentNode.style.display = '';
        //goods.appendChild(card.parentNode);
      }

    });
  }


  
//поиск
  searchBtn.addEventListener('click', () => {
    const searchText = new RegExp(search.value.trim(), 'i');
    cards.forEach((card) => {
      const title = card.querySelector('.card-title');

      if(!searchText.test(title.textContent)) {
        card.parentNode.style.display = 'none';


      } else {
        card.parentNode.style.display = '';

      }

    });
    search.value = '';



  });




}
//end Фильтр Акция
toggleCheckbox();
toggleCart();
toggleEndCart();
actionPage();



