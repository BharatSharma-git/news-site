import '../scss/style.scss';
const body = document.querySelector('body');
const main = document.querySelector('main');
const btnOpen = document.querySelector('#btnOpen');
const btnClose = document.querySelector('#btnClose');
const media = window.matchMedia('(width < 69.375em)');
const navContent = document.querySelector('.nav__content');
const navoverlay = document.querySelector('.nav__overlay');

function openMobileMenu() {
  btnOpen.setAttribute('aria-expanded', 'true');
  body.classList.add('noscroll');
  navContent.removeAttribute('inert');
  main.setAttribute('inert', '');
  btnClose.focus();
}

function closeMobileMenu() {
  btnOpen.setAttribute('aria-expanded', 'false');
  navContent.setAttribute('inert', '');
  body.classList.remove('noscroll');
  main.removeAttribute('inert');
  btnOpen.focus();

}

function setupNav(e) {
  if (e.matches) {
    // is mobile
    console.log("is mobile");
    navContent.setAttribute('inert', '');

    setTimeout(() => {
      navContent.style.display = 'block';
      navoverlay.style.display = 'block';

    }, 500);
  }
  else {
    // is desktop
    console.log("is desktop");
    navContent.removeAttribute('inert');
    main.removeAttribute('inert');
    navContent.style.display = '';

  }
}

setupNav(media);

btnOpen.addEventListener('click', openMobileMenu);
btnClose.addEventListener('click', closeMobileMenu);

media.addEventListener('change', (e) => {
  setupNav(e);
})
