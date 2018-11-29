// declaring variables
let sliderTime = 4000;
const slider = document.getElementById('img-slider');
const sliderImgs= Array.from(slider.getElementsByTagName("img"));
let i = 0
let value = 0;
const forward = document.getElementById("forward");
const backward =document.getElementById("backward");

// adding id using js
sliderImgs.forEach(img => {
    i++
    img.setAttribute("id","img_slide"+[i]);
});

function bannerLoop(){
  if (value < sliderImgs.length-5) {
    value++ 
    sliderImgs[value-1].style.display = 'none';
} else {
      value=0;
      sliderImgs.forEach(function(img) {
        img.style.display = "block";
    });
}
}

// run 
slider.addEventListener("mouseover", function(){setTimeout(bannerLoop, 1000)});