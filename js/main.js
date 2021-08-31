// switch
const checkbox = document.getElementById('checkbox');
checkbox.addEventListener('change', () => {
    document.body.classList.toggle('dark');
});
// switch  --




// loader
window.addEventListener('load',function(){
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













