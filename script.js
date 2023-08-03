const hamburgerBtn = document.querySelector('#menu');
const mobileMenu = document.querySelector('#mobile-menu');
hamburgerBtn.addEventListener('click', () => {
  hamburgerBtn.classList.toggle('active');
  mobileMenu.classList.toggle('active');
  mobileMenu.style.backgroundColor = 'white';
});

document.getElementById('x-btn').addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
  const page = document.querySelectorAll('#mobile_menu');
  for (let i = 0; i < page.length; i += 1) {
    page[i].classList.toggle('hide');
  }
});

document.querySelectorAll('.nav-link').forEach((n) => n.addEventListener('click', () => {
  hamburgerBtn.classList.remove('active');
  mobileMenu.classList.remove('active');
}));
