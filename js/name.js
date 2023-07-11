// var swiper = new Swiper(".mySwiper", {
//     speed : 2000,
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//   });
var swiper = new Swiper(".mySwiper", {
  speed : 2000,
  
 effect :'fade',
 
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay:3000,
  }
});
// - 
// - cube
// - coverflow
// - flip
// - cards
// - creative
let mobileMenuIcon=document.querySelector('header .fa-bars')
console.log(mobileMenuIcon)
let menu= document.querySelector('header .menu')
console.log(menu)
 
mobileMenuIcon.addEventListener('click', ()=>{
menu.classList.toggle('Open')
})