const Slide = [...document.querySelectorAll('.topSlide')];
let currentDisplay = 0;
Slide[currentDisplay].style.opacity=1;
const totalImg = 2;
setInterval(changeSlide,6000);
function changeSlide(){
    Slide[currentDisplay].style.opacity=0;
    currentDisplay = (currentDisplay+1) % totalImg;
    Slide[currentDisplay].style.opacity=1;
}
