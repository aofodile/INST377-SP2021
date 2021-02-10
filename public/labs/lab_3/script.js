/* Put your javascript in here */

let imgs = [
  "onigiri_1.png",
  "onigiri_2.png",
  "onigiri_3.png",
  "roll_1.png",
  "roll_2.png",
  "roll_3.png"
];


let mainImg = 0;
let prevImg = imgs.length - 1;
let nextImg = 1;

function loadGallery() {

  let mainView = document.getElementById("mainView");
  mainView.style.background = "url(" + imgs[mainImg] + ")";

  let leftView = document.getElementById("leftView");
  leftView.style.background = "url(" + imgs[prevImg] + ")";
  
  let rightView = document.getElementById("rightView");
  rightView.style.background = "url(" + imgs[nextImg] + ")";
  
  let linkTag = document.getElementById("linkTag")
  linkTag.href = imgs[mainImg];

};

function scrollRight() {
  
  prevImg = mainImg;
  mainImg = nextImg;
  if (nextImg >= (imgs.length -1)) {
    nextImg = 0;
  } else {
    nextImg++;
  }; 
  loadGallery();
};

function scrollLeft() {
  nextImg = mainImg
  mainImg = prevImg;
   
  if (prevImg === 0) {
    prevImg = imgs.length - 1;
  } else {
    prevImg--;
  };
  loadGallery();
};

document.getElementById("navRight").addEventListener("click", scrollRight);
document.getElementById("navLeft").addEventListener("click", scrollLeft);
document.getElementById("rightView").addEventListener("click", scrollRight);
document.getElementById("leftView").addEventListener("click", scrollLeft);
document.addEventListener('keyup',function(e){
    if (e.keyCode === 37) {
    scrollLeft();
  } else if(e.keyCode === 39) {
    scrollRight();
  }
});

loadGallery();