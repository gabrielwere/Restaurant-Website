"use strict";

let yearText = document.getElementById('year');
let button = document.getElementById("button");
let rotationAngle = 360;
let loader = document.getElementById("loader");
let loaderLogo = document.getElementById("loaderLogo");
let menu = document.querySelector("nav");
let topPosition = menu.offsetTop;
let menuIcon = document.getElementById("menu-icon");
let closeIcon = document.getElementById("close-icon");
let hiddenmenu = document.querySelector(".menu");
let body = document.querySelector("html");
let phoneMenu = document.querySelector(".to-stick");

menuIcon.addEventListener("click",()=>{
    hiddenmenu.style.marginLeft = "0";
    hiddenmenu.style.transition = "margin-left 0.7s ease-in-out";
    hiddenmenu.style.webkitTransition = "margin-left 0.7s ease-in-out";
    body.style.overflowY="hidden";
});
closeIcon.addEventListener("click",()=>{
    hiddenmenu.style.marginLeft = "-200%";
    body.style.overflowY="scroll";
});

window.onscroll = ()=>{
    let scrollPosition = window.pageYOffset;
    if(scrollPosition > topPosition){
        menu.className="sticky";
        phoneMenu.className="menu-sticky";
        // menuIcon.style.top="30%";
    }else{
        menu.className=" ";
        phoneMenu.className="to-stick";
        menuIcon.style.top="5%";
    }
    scrollPosition = topPosition;

}

document.onreadystatechange = function(){
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

let date = new Date();
yearText.textContent = date.getFullYear();

button.addEventListener("click",alertFunction);

function alertFunction(){
    window.alert("Call - 0712 345 678");
}
