// dark color 
const checkbox = document.getElementById('checkbox');
checkbox.addEventListener('change', () => {
    document.body.classList.toggle('dark');
});
// end dark color






// const panoImage = document.querySelector('.pano-image');
// const miamiPano = "assets/images/road.jpg";
// const panorama = new PANOLENS.imagePanorama(miamiPano);
// const viewer = new PAROLENS.Viewer({
//     container: panoImage,
//     autoRotate: true,
//     autoRotateSpeed: 0.2
// });
// viewer.add(panorama);



// const progText = document.querySelectorAll(".progText");
// const progress = document.querySelectorAll(".progress");
// const progContainer = document.querySelector(".container");
// let bol = false;


// window.addEventListener("scroll", function(){
//     if (pageYOffset > progContainer.offsetTop - 600 && bol === false){
//         for (let i = 0; i < progText.length; i++){
//             progText[i].innerText = 0;
//             count = 0;

//             progress[i].style.bottom = "100%";

//             progress[i].style.bottom = progText[i].dataset.count - 100 + "%";


//             function updateCount(){
//                 target = parseInt(progText[i].dataset.count);
//                 if (count < target) {
//                     count++;
//                     progText[i].innerText = count;
//                     setTimeout(updateCount, 50);
//                 } else {
//                     progText[i].innerText = target + "%";
//                 }
//             }
//             updateCount();
//             bol = true;
//         }
//     }
// })