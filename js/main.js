// switch
const checkbox = document.getElementById('checkbox');
checkbox.addEventListener('change', () => {
    document.body.classList.toggle('dark');
});
// switch  --




// loader
window.addEventListener('load', function () {
    document.querySelector('body').classList.add("loaded")
});
// loader  --



// scroll to top button
const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 200) {
        toTop.classList.add("active");
    } else {
        toTop.classList.remove("active");
    }
});
// scroll to top button --


//swiper
var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: ".swiper-pagination",
    },
});
//swiper --




let cursor = document.getElementById('cursor');
    window.onmousemove = function(e){
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    }







