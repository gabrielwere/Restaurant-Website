"use strict";

let sliderImages = document.querySelectorAll('.box');
let current = 0;
let leftArrow = document.getElementById('leftArrow');
let rightArrow = document.getElementById('rightArrow');
let yearText = document.getElementById('year');
let width = sliderImages[0].clientWidth;
let button = document.getElementById("button");
let loader = document.getElementById("loader");
let loaderLogo = document.getElementById("loaderLogo");
let menuIcon = document.getElementById("menu-icon");
let closeIcon = document.getElementById("close-icon");
let menu = document.querySelector(".menu");
let rotationAngle = 360;



menuIcon.addEventListener("click",()=>{
    menu.style.marginLeft = "0";
    menu.style.transition = "margin-left 0.7s ease-in-out";
    menu.style.webkitTransition = "margin-left 0.7s ease-in-out";
});
closeIcon.addEventListener("click",()=>{
    menu.style.marginLeft = "-200%";
})


//get the current year
let date = new Date();
yearText.textContent = date.getFullYear();


leftArrow.addEventListener("click",()=>{
    if(current===0){
        current=sliderImages.length;
    }
    slideLeft();
});

rightArrow.addEventListener("click",slideRight);

button.addEventListener("click",alertFunction);

window.addEventListener("orientationchange", function() {
    location.reload();
  });

document.onreadystatechange=function(){
    if(document.readyState !== "complete"){
        loader.style.display="flex";
        setInterval(()=>{
            loaderLogo.style.transform = "rotate("+rotationAngle+"deg)";
            loaderLogo.style.transition = "transform 0.6s ease-in-out";
            loaderLogo.style.webkitTransform = "rotate("+rotationAngle+"deg)";
            loaderLogo.style.webkitTransition = "transform 0.6s ease-in-out";
            rotationAngle += 360;
        },1000);
    }else{
        loader.style.display="none";
    }
}


function slideRight(){
   if(current >= sliderImages.length-1){
       current=-1;
   }
   current++;
    sliderImages.forEach((value)=>{
        value.style.transform = "translateX("+(-width * current)+"px)";
        value.style.transition = "transform 1s ease-in-out";
        value.style.webkitTransform = "translateX("+(-width * current)+"px)";
        value.style.webkitTransition = "transform 1s ease-in-out";
    });
}

function slideLeft(){
    current--;
    sliderImages.forEach((value)=>{
        value.style.transform = "translateX("+(-width * current)+"px)";
        value.style.transition = "transform 1s ease-in-out";
        value.style.webkitTransform = "translateX("+(-width * current)+"px)";
        value.style.webkitTransition = "transform 1s ease-in-out";
    });
}

function alertFunction(){
    alert("Call - 0712 345 678");
}






