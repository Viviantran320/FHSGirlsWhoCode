/* .js files add interaction to your website */
let hamMenuIcon = document.getElementById("ham-menu");
let navBar = document.getElementById("nav-bar");
let navLinks = navBar.querySelectorAll("li");
hamMenuIcon.addEventListener("click", () => {
  navBar.classList.toggle("active");
  hamMenuIcon.classList.toggle("fa-times");
});
navLinks.forEach((navLinks) => {
  navLinks.addEventListener("click", () => {
    navBar.classList.remove("active");
    hamMenuIcon.classList.toggle("fa-times");
  });
});
/*s */
var slideIndex = 0;
var timer1, timer;
var slides = document.getElementsByClassName("mySlides");
var dots = document.getElementsByClassName("dot");

function showSlides() {//called by automatic slideshow
    clearTimeout(timer1);//clear previously set timer 

    //clear styles
    for (var i = 0; i < slides.length; i++)
        slides[i].style.display = "none";           
    for (var i = 0; i < dots.length; i++) 
        dots[i].className = dots[i].className.replace(" active", "");
    
    //reset slideIndex
    if (++slideIndex == slides.length)
        slideIndex = 0;

    //reset styles
    slides[slideIndex].style.display = "block"; 
    dots[slideIndex].className += " active";
    
    //reset timer
    timer1 = setTimeout(showSlides, 3000);
}

function showSlide(n) {//called when user manually choose particular slide
    //clear previously set timers
    clearTimeout(timer1);
    clearTimeout(timer);

    //clear styles
    for (var i = 0; i < slides.length; i++) 
        slides[i].style.display = "none";
    for (var i = 0; i < dots.length; i++) 
        dots[i].className = dots[i].className.replace(" active", "");

    //reset slideIndex
    if (n == slides.length)
        slideIndex = 0; 
    if (n < 0)
        slideIndex = slides.length;

    //reset styles
    slides[slideIndex].style.display = "block"; 
    dots[slideIndex].className += " active";

    //reset timer for automatic slideshow
    timer = setTimeout(showSlides, 10000);
}


var factList = [
  "The U.S. Census Bureau reports that women represented 27% of STEM workers in 2019, up from 8% in 1970.",/*0*/
  "Women make up only 28% of the workforce in science, technology, engineering and math (STEM) ",/*1*/
  "Among the 70 detailed STEM occupations the Census Bureau reports on, women earned more than men in only one STEM occupation: computer network architects. But women represented only 8% of those in this occupation",/*2*/
  "Women only make up 3% of STEM industry CEOs. "];/*3*/


var fact = document.getElementById("fact");
var myButton = document.getElementById("myButton");
var count = 0;

myButton.addEventListener("click", displayFact);

function displayFact(){
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length){
    count = 0;
  }
}/* .js files add interaction to your website */

