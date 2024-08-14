// ---------typing animation-/
var typed= new Typed(".typing",{
    strings:["","Web Developer","Video Editor","Web Designer","Software Engineer"],
    typeSpeed:100,
    BackSpeed:70,
    loop:true
})

const navTogglerBtn=document.querySelector(".nav-toggler"),
aside=document.querySelector(".aside");
navTogglerBtn.addEventListener("click",()=>{
    asideSectionToggleBtn();
})
allsection= document.querySelectorAll(".section");
totalSection=allsection.length;
function asideSectionToggleBtn(){
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
    for(let i=0; i<totalSection;i++){
        allsection[i].classList.toggle("open");
    }
}

