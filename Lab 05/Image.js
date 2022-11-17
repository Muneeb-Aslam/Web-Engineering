let flag = 0;
let btn = document.getElementsByClassName('btn');
let images = document.getElementsByClassName('images');
let right = document.getElementById('right');
let left = document.getElementById('left');
let dots=document.getElementsByClassName('dot');
Slider(flag);

function Slider(num) {
    if (num == images.length) {
        flag = 0;
        num = 0;
    }
    if (num < 0){
        flag = images.length-1;
        num = images.length-1;
    }
    for (let y of images) {
        y.style.display = "none";
    }
    for (i = 0; i < dots.length; i++) 
        dots[i].className = dots[i].className.replace(" active", "");
    
    images[num].style.display="block";
    dots[flag].className += " active";
}

function increment(num){
    flag=flag+num;
    Slider(flag);
}

function dotslide(index){
    Slider(index);
}