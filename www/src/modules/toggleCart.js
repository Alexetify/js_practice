//корзина
export default function toggleCart(){
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
  