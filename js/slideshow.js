/*let slideIndex = 0;
showSlides(slideIndex);*/

let myTimeout;

function currentSlide(n) {
    clearTimeout(myTimeout);
    showSlides(n);
}

function showSlides(n){
    let i;
    let slides = document.getElementsByClassName("slides");
    let dots = document.getElementsByClassName("dot");

    for (i = 0; i < slides.length; i++)
    {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++)
    {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[n].style.display = "block";
    dots[n].className += " active";
    n++;
    if (n >= slides.length) n = 0;

    myTimeout = setTimeout(function () {
        showSlides(n);}, 5000);
}

window.onload = function () {
    showSlides(0);
}
