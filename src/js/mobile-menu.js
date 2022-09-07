(() => {
    const refs = {
      openMenuBtn: document.querySelector('[data-menu-open]'),
      closeMenuBtn: document.querySelector('[data-menu-close]'),
      menu: document.querySelector('[data-menu]'),
    };
    refs.openMenuBtn.addEventListener('click', toggleModal);
    refs.closeMenuBtn.addEventListener('click', toggleModal);
    function toggleModal() {
      refs.menu.classList.toggle('is-open');
    }
    const refsBuyNow = {
      openModalhtn: document.querySelector('[data-modalh1-open]'),
      closeModalhtn: document.querySelector('[data-modalh-close]'),
      modalh: document.querySelector('[data-modalh]'),
      body: document.querySelector('.body'),
    };
    refsBuyNow.openModalhtn.addEventListener('click', toggleModalh);
    refsBuyNow.closeModalhtn.addEventListener('click', toggleModalh);
    function toggleModalh() {
      refsBuyNow.modalh.classList.toggle('is-hidden');
      refsBuyNow.body.classList.toggle('no-scroll');
    }
  })();

  (() => {
    const refsBuyNow = {
      openModalhtn: document.querySelector('[data-modalh2-open]'),
      closeModalhtn: document.querySelector('[data-modalhm-close]'),
      modalh: document.querySelector('[data-modalh]'),
      body: document.querySelector('.body'),
    };
    refsBuyNow.openModalhtn.addEventListener('click', toggleModalh);
    refsBuyNow.closeModalhtn.addEventListener('click', toggleModalh);
    function toggleModalh() {
      refsBuyNow.modalh.classList.toggle('is-hidden');
      refsBuyNow.body.classList.toggle('no-scroll');
    }
  })();