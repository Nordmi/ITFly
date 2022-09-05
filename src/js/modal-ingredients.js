(() => {
  const refs = {
    openFillingBtn: document.querySelector('[data-ingredients-open]'),
    closeFillingBtn: document.querySelector('[data-ingredients-close]'),
    filling: document.querySelector('[data-ingredients]'),
  };
  refs.openFillingBtn.addEventListener('click', toggleModal);
  refs.closeFillingBtn.addEventListener('click', toggleModal);
  function toggleModal() {
    refs.filling.classList.toggle('is-open');
  }
})();
