/* Put your javascript in here */

let imgs = ["onigiri_1.png","onigiri_2.png","onigiri_3.png","roll_1.png","roll_2.png","roll_3.png"];

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");
  });

function test() {
    alert('Click!');
};

const main = document.getElementById("main");
main.addEventListener("mouseover", test());