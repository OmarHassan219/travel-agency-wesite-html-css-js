// toggle spin class on icon 
let gear = document.querySelector(".toggle-settings i");
gear.onclick=function(){
    this.classList.toggle("fa-spin");
document.querySelector(".settings-box").classList.toggle("open")
}

//switch colors
const colorsli = document.querySelectorAll(".color-list li");

// check localstorage color item
if(localStorage.getItem("maincolor")){
    document.documentElement.style.setProperty('--main-color',localStorage.getItem("maincolor"))
    colorsli.forEach(li =>li.classList.remove("active"))
    colorsli.forEach(li =>{
if(li.dataset.color == localStorage.getItem("maincolor"))
li.classList.add("active");
    })

}
// check localstorage to change the about section img 
function imgbasedoncolor(){

if(localStorage.getItem("maincolor") == "#e91e63"){
    aboutimg.setAttribute("src","./images/maldives-pink.jpg")
}
else if(localStorage.getItem("maincolor") == "#009688"){
    aboutimg.setAttribute("src","./images/maldives-green1jpg.jpg")
}
else if(localStorage.getItem("maincolor") == "#03a9f4"){
    aboutimg.setAttribute("src","./images/maldives-2.jpg")
}
else if(localStorage.getItem("maincolor") == "#4caf50"){
    aboutimg.setAttribute("src","./images/maldives-green1jpg.jpg")
}
else{
   aboutimg.setAttribute("src","./images/maldives-3.jpg") 
}
}
// end of about section img 
colorsli.forEach(li => {

li.addEventListener("click",(e) =>{

    colorsli.forEach(li =>li.classList.remove("active"))
    e.target.classList.add("active")

    //set color on root
    document.documentElement.style.setProperty('--main-color',e.target.dataset.color)

    window.localStorage.setItem("maincolor",e.target.dataset.color)
    changeaboutimg();
})


})

// bring yes and no random background 

let random = document.querySelector(".option-box .randombox")
let bullet = document.querySelector(".option-box .bulletbox")
let bullets = document.querySelector(".bullets")

let randombutton = document.querySelectorAll(".option-box .randombox span")
let bulletbutton = document.querySelectorAll(".option-box .bulletbox span")
let backgroundopt = true;
let randomstop ;

//check random background in localstorage
if(localStorage.getItem("random")){
if(localStorage.getItem("random") == "no"){
    backgroundopt = false;
    generaterandombackground();
    randombutton.forEach((s) => s.classList.remove("active") ) 
    randombutton[1].classList.add("active")
}
else{
    backgroundopt = true;
    randombutton.forEach((s) => s.classList.remove("active") ) 
    randombutton[0].classList.add("active")

}

}else{
    window.localStorage.setItem("random","yes")

}
//check bullet status in localstorage
if(localStorage.getItem("showbullets")){
if(localStorage.getItem("showbullets") == "no"){
    bulletbutton.forEach((s) => s.classList.remove("active") ) 
    bulletbutton[1].classList.add("active")
    bullets.style.display="none"

}
else{
    bulletbutton.forEach((s) => s.classList.remove("active") ) 
    bulletbutton[0].classList.add("active")
    bullets.style.display="block"

}

}else{
    window.localStorage.setItem("showbullets","yes")

}

//check if random background buttons yes or no have been clicked 
random.onclick=function(e){


if(e.target.classList.contains("no")){
    backgroundopt = false;
    generaterandombackground();

    randombutton.forEach((s) => s.classList.remove("active") ) 
    e.target.classList.add("active")
    window.localStorage.setItem("random","no")
}
else if(e.target.classList.contains("yes")){
    backgroundopt = true;
    generaterandombackground();
    randombutton.forEach((s) => s.classList.remove("active") ) 
    e.target.classList.add("active")
    window.localStorage.setItem("random","yes")


}

}

// show or hide bullets
bullet.onclick=function(e){


if(e.target.classList.contains("no")){

    bulletbutton.forEach((s) => s.classList.remove("active") ) 
    e.target.classList.add("active")
    bullets.style.display="none"

    window.localStorage.setItem("showbullets","no")
}
else if(e.target.classList.contains("yes")){
    bulletbutton.forEach((s) => s.classList.remove("active") ) 
    e.target.classList.add("active")
    window.localStorage.setItem("showbullets","yes")
    bullets.style.display="block";


}
}





// select landing page element
let landingpage = document.querySelector(".landing-page");

// get array of imgs 
let imgarray = ['"./images/landing 1.jpg"','"./images/landing 2.jpg"','"./images/landing 3.jpg"']; 



function generaterandombackground (){
 
if(backgroundopt == true){

 randomstop = setInterval(() =>  {


    
// get random number 
let randomNumber = Math.floor(Math.random()*imgarray.length);

// change background image url
landingpage.style.backgroundImage= 'url(' + imgarray[randomNumber] +')'
console.log(imgarray[randomNumber])
},4000);

}
else{
clearInterval(randomstop);
}
}
generaterandombackground();


// about us section 
let aboutimg = document.querySelector(".about img");
imgbasedoncolor();
function changeaboutimg(){

if(localStorage.getItem("maincolor") == "#e91e63"){
    aboutimg.setAttribute("src","./images/maldives-pink.jpg")
}
else if(localStorage.getItem("maincolor") == "#009688"){
    aboutimg.setAttribute("src","./images/maldives-green1jpg.jpg")
}
else if(localStorage.getItem("maincolor") == "#03a9f4"){
    aboutimg.setAttribute("src","./images/maldives-2.jpg")
}
else if(localStorage.getItem("maincolor") == "#4caf50"){
    aboutimg.setAttribute("src","./images/maldives-green1jpg.jpg")
}
else{
   aboutimg.setAttribute("src","./images/maldives-3.jpg") 
}
}

// get the progress spans
let progressspans = document.querySelectorAll(".bar span");
let visitsection = document.querySelector(".visit");
// let spanbefore = document.querySelectorAll(".bar span:before");
// console.log(spanbefore);
// spanbefore.style.display="none";

// progress part when scroll
window.onscroll = function(){
if(window.scrollY >= visitsection.offsetTop - 200){

progressspans.forEach((e) => {

e.style.width = e.dataset.progress ; 



})


}

}


// gallery img on click js section
let galleryimages = document.querySelectorAll(".gallery .container img");
let imageview = document.querySelector(".gallery .imgclick");
let imageorder = document.querySelector(".imgbox span")
let clickedimage = document.querySelector(".imgclick .imgbox img");
let closebutton = document.querySelector(".imgclick .imgbox .closebutton");

//click on any image to be shown 
galleryimages.forEach((e) => {
e.onclick=function(){
imageview.style.display="flex";
clickedimage.setAttribute("src",e.getAttribute("src"))
imageorder.innerHTML = `image ${e.dataset.order}`;
}

})
closebutton.onclick=closeimageview;
window.onkeyup =function(e){
if(e.key == "Escape"){
closeimageview();
}

}
function closeimageview(){
imageview.style.display="none";
}

// links 

let headerlink = document.querySelectorAll(".links li a")

function scrollto (elements){
elements.forEach((e) => {
e.addEventListener('click',function(link){
link.preventDefault();
    document.querySelector(link.target.dataset.name).scrollIntoView({

         behavior:'smooth'
    })

})


})



}

scrollto(headerlink);



//reset button
document.querySelector(".reset-option").onclick=function(){

   localStorage.clear();
   window.location.reload();

}
