import { imageSlider } from "./Data/imageSlider.js";

/*************************image Slider***********************/
let imageSliderEl = document.querySelector(".imageSliderList");
let imageSliderListHTML = ``;

imageSlider.forEach(el => {
    imageSliderListHTML += `
    <div class="imageSliderItems">
        <a href="${el.link}">
            <div class="box">
                <img src="${el.img}" />
            </div>
        </a>
    </div>
    `
});
imageSliderEl.innerHTML = imageSliderListHTML;

let preve_imageBtnEl = document.getElementById("preve_imageBtn");
let next_imageBtnEl = document.getElementById("next_imageBtn");
let start = 0;
let numImageSlider = imageSlider.length
let end = -(numImageSlider-1)*100;
let clickImageslider = false;

preve_imageBtnEl.addEventListener("click",()=>{
    handlePreve_image();
    clickImageslider=true;
});
next_imageBtnEl.addEventListener("click",()=>{
    handleNext_image();
    clickImageslider=true;
});

function handlePreve_image(){
    let imageallItem = document.querySelectorAll(".imageSliderItems")

    if(start < 0){
        start+=100
        imageallItem.forEach(el=>{
            el.style.transform = `translateX(${start}%)`
        })
    }
    else{
        start=end
        imageallItem.forEach(el=>{
            el.style.transform = `translateX(${start}%)`
        })
    }
}
function handleNext_image(){
    let imageallItem = document.querySelectorAll(".imageSliderItems")

    if(start > end){
        start-=100
        imageallItem.forEach(el=>{
            el.style.transform = `translateX(${start}%)`
        })
    }
    else{
        start=0
        imageallItem.forEach(el=>{
            el.style.transform = `translateX(${start}%)`
        })
    }
}

function renderImageSlider(){
    if(start > end){
        handleNext_image()
    }
    else{
        start=100
        handleNext_image()
    }
}
function ImageSliderTime(){

    if(clickImageslider){
       setTimeout(() =>{
            renderImageSlider();
       },3000);
       clickImageslider=false;
    }
    else{
        renderImageSlider();
    }
}
setInterval(ImageSliderTime,4000);


