
const btn = document.querySelector( ".hero-btn button")
btn.addEventListener( "click",() => {
    document.querySelector(".hero-modal").style.display = "block"

})

const btnCLose = document.querySelector( ".hero-modal-block-square")
btnCLose.addEventListener( "click",() => {
    document.querySelector(".hero-modal").style.display = "none"
})

const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        "@1.50": {
            slidesPerView: 4,
            spaceBetween: 50,
        },
    },
});