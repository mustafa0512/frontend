let star_one = document.querySelector('.star_one')
let star_two = document.querySelector('.star_two')
let star_three = document.querySelector('.star_three')
let star_four = document.querySelector('.star_four')
let star_five = document.querySelector('.star_five')
let rate_star = document.querySelectorAll('.head__app-rate_star img')

console.log(rate_star);

star_one.onclick = () => {
    star_one.src = '../assets/img/star (1).png'
}

star_two.onclick = () => {
    star_one.src = '../assets/img/star (1).png'
    star_two.src = '../assets/img/star (1).png'
}

star_three.onclick = () => {
    star_one.src = '../assets/img/star (1).png'
    star_two.src = '../assets/img/star (1).png'
    star_three.src = '../assets/img/star (1).png'
}

star_four.onclick = () => {
    star_one.src = '../assets/img/star (1).png'
    star_two.src = '../assets/img/star (1).png'
    star_three.src = '../assets/img/star (1).png'
    star_four.src = '../assets/img/star (1).png'

}

star_five.onclick = () => {
    star_one.src = '../assets/img/star (1).png'
    star_two.src = '../assets/img/star (1).png'
    star_three.src = '../assets/img/star (1).png'
    star_four.src = '../assets/img/star (1).png'
    star_five.src = '../assets/img/star (1).png'
}


var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

