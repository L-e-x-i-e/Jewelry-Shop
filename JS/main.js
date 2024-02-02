// IMAGE SLIDER

var slider_img = document.querySelector('.slider-img');
var images = ['a.jpg', 'b.jpg', 'c.jpg', 'd.jpg', 'e.jpg'];
var i = 0; // Current Image Index


function prev(){
    if(i <= 0) i = images.length;
    i--;
    return setImg();
}


function next(){
    if(i >= images.length-1) i = -1;
    i++;
    return setImg();
}

function setImg(){
    return slider_img.setAttribute('src', 'Assets/' + images[i]);
}


//Mobile navigation animation

const mobileNavMenu = document.querySelector('.mobile-navigation-menu');
const hamburgerMenuIcon = document.querySelector('.ham-menu');

const firstHamBar = document.querySelector('.ham-menu .bar:first-child');
const secondHamBar = document.querySelector('.ham-menu .bar:nth-child(2)');
const thirdHamBar = document.querySelector('.ham-menu .bar:last-child');

hamburgerMenuIcon.addEventListener('mousedown', function() {
    mobileNavMenu.classList.toggle('appear');
    firstHamBar.classList.toggle('rotate-left');
    secondHamBar.classList.toggle('opaque');
    thirdHamBar.classList.toggle('rotate-right');
})