let i = 0;
let time = 2500;
let sliderImages = [];

sliderImages[0] = 'assets/images/slider/23975_Grenaa_strand.jpg';
sliderImages[1] = 'assets/images/slider/23976_Grenaa_strand.jpg';
sliderImages[2] = 'assets/images/slider/23977_Grenaa_strand.jpg';
sliderImages[3] = 'assets/images/slider/23978_Grenaa_strand.jpg';
sliderImages[4] = 'assets/images/slider/23979_Grenaa_strand.jpg';
sliderImages[5] = 'assets/images/slider/23980_Grenaa_strand.jpg';
sliderImages[6] = 'assets/images/slider/23981_Grenaa_strand.jpg';
sliderImages[7] = 'assets/images/slider/23982_Grenaa_strand.jpg';
sliderImages[8] = 'assets/images/slider/23983_Grenaa_strand.jpg';

function changeSliderImage() {
  document.mySlider.src = sliderImages[i];

  if(i < sliderImages.length - 1) {
    i++;
  } else {
    i = 0;
  }

  setTimeout('changeSliderImage()', time);
}

window.onload = changeSliderImage();


// function til burger menu
function burgerFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}