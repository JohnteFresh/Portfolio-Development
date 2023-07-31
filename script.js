const menuBtn = document.querySelector('.menu');
menuBtn.addEventListener('click', () => {
  const mobilePopup = document.querySelector('#mobile_menu');
  mobilePopup.classList.toggle('visible');
  mobilePopup.style.display = 'block';
  const restOfThePage = document.querySelector('#body');
  restOfThePage.classList.toggle('visible');
  restOfThePage.style.display = 'none';
  z
});



const linkBtn = document.querySelectorAll('.menu-bar a');
for (let i = 0; i < linkBtn.length; i += 1) {
  linkBtn[i].addEventListener('click', () => {
    const mobilePopup = document.querySelector('#mobile_menu');
    mobilePopup.classList.toggle('visible');
    const restOfThePage = document.querySelectorAll('section, footer');
    for (let i = 0; i < restOfThePage.length; i += 1) {
      restOfThePage[i].classList.toggle('hidden');
    }
  });
}