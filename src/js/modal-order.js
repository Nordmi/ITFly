(() => {
  const refs = {
    openOrderBtn: document.querySelector('[data-products-open]'),
    closeOrderBtn: document.querySelector('[data-products-close]'),
    order: document.querySelector('[data-products]'),
  };
  refs.openOrderBtn.addEventListener('click', toggleModal);
  refs.closeOrderBtn.addEventListener('click', toggleModal);
  function toggleModal() {
    refs.order.classList.toggle('is-open');
  }
})();
