let container = document.querySelector('.container')
let header_navigation = document.querySelectorAll('.header_navigation a')

// swiper

const fetchSwipe = (swipeType, slideView) => {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: slideView,
        spaceBetween: 80,
        slidesPerGroup: swipeType,
        loop: false,
        loopFillGroupWithBlank: false,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
}

fetchSwipe(3, 3)

let a = window.screen.width

if (a <= 480) {
    fetchSwipe(1, 1)
} else if (a <= 1025) {
    fetchSwipe(1, 2)
} else {
    fetchSwipe(1, 3)
}

// swiper

header_navigation.forEach(btn => {
    btn.onclick = () => {
        header_navigation.forEach(el => el.classList.remove('active'))
        btn.classList.add('active')
    }
})
