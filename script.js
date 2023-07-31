const menuBtn = document.querySelector(".menu-burger");
menuBtn.addEventListener('click', function() {
  const pop = document.querySelector("#mobile_menu");
  pop.classList.toggle('visible');
  const page = document.querySelectorAll('section, footer');
  for (let i = 0; i < page.length; i++) {
    page[i].classList.toggle('unvisible');
  }
});

// document.getElementById('x-btn').addEventListener('click', function() {
//   const pop = document.querySelector('.mobile_menu');
//   pop.classList.toggle('visible');
//   const page = document.querySelectorAll('section, footer');
//   for (let i = 0; i < page.length; i++) {
//     page[i].classList.toggle('unvisible');
    
//   }
// });

// const otherBtn = document.querySelectorAll('.menu-bar a');
// for (let i = 0; i < otherBtn.length; i += 1) {
//   otherBtn[i].addEventListener('click', function() {
//     const pop = document.querySelector('.mobile_menu');
//     pop.classList.toggle('visible');
//     const page = document.querySelectorAll('section, footer');
//     for (let i = 0; i < page.length; i += 1) {
//       page[i].classList.toggle('unvisible');
//     }
//   });
  
//  }