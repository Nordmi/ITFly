(() => {
  const refs = {
    openFillingBtn: document.querySelector('[data-products-open]'),
    closeFillingBtn: document.querySelector('[data-products-close]'),
    filling: document.querySelector('[data-products]'),
  };
  refs.openFillingBtn.addEventListener('click', toggleModal);
  refs.closeFillingBtn.addEventListener('click', toggleModal);
  function toggleModal() {
    refs.filling.classList.toggle('is-open');
  }
})();
