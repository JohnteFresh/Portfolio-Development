const menuBtn = document.querySelector('.menu');
menuBtn.addEventListener('click', () => {
  const popUp = document.querySelector('#mobile_menu');
  popUp.classList.toggle('show');
  popUp.style.backgroundColor = 'white';
  popUp.style.display = 'block';
  const page = document.querySelectorAll('section, footer');
  for (let i = 0; i < page.length; i += 1) {
    page[i].classList.toggle('hide');
  }
});


document.getElementById('x-btn').addEventListener('click', () => {
  const popUp = document.querySelector('#mobile_menu');
  popUp.classList.toggle('show');
  const page = document.querySelectorAll('section, footer');
  for (let i = 0; i < page.length; i += 1) {
    page[i].classList.toggle('hide');
  }
});

const linkBtn = document.querySelectorAll('.menu-bar a');
for (let i = 0; i < linkBtn.length; i += 1) {
  linkBtn[i].addEventListener('click', () => {
    const popUp = document.querySelector('#mobile_menu');
    popUp.classList.toggle('show');
    const page = document.querySelectorAll('section, footer');
    for (let i = 0; i < page.length; i += 1) {
      page[i].classList.toggle('hide');
    }
  });
}