/* ===================================== */
/* NAKURU MOBILE TECH MAIN JAVASCRIPT */
/* ===================================== */


/* NAVBAR SCROLL EFFECT */

window.addEventListener("scroll", function(){

const navbar = document.querySelector("header")

if(window.scrollY > 50){

navbar.style.background = "rgba(10,10,20,0.9)"
navbar.style.backdropFilter = "blur(10px)"

}else{

navbar.style.background = "transparent"

}

})



/* SMOOTH SCROLLING */

document.querySelectorAll("a[href^='#']").forEach(anchor => {

anchor.addEventListener("click", function(e){

e.preventDefault()

document.querySelector(this.getAttribute("href"))
.scrollIntoView({
behavior:"smooth"
})

})

})



/* SERVICE CARD HOVER EFFECT */

const cards = document.querySelectorAll(".card")

cards.forEach(card => {

card.addEventListener("mouseenter", () => {

card.style.transform = "translateY(-10px) scale(1.02)"

})

card.addEventListener("mouseleave", () => {

card.style.transform = "translateY(0) scale(1)"

})

})



/* LOADING SCREEN */

window.addEventListener("load", ()=>{

const loader = document.querySelector(".loader")

if(loader){

loader.style.opacity = "0"

setTimeout(()=>{
loader.style.display="none"
},500)

}

})



/* PORTFOLIO IMAGE LIGHTBOX */

const portfolioImages = document.querySelectorAll(".portfolio-grid img")

portfolioImages.forEach(img=>{

img.addEventListener("click",()=>{

const lightbox = document.createElement("div")

lightbox.classList.add("lightbox")

const image = document.createElement("img")

image.src = img.src

lightbox.appendChild(image)

document.body.appendChild(lightbox)

lightbox.addEventListener("click",()=>{
lightbox.remove()
})

})

})



/* BOOKING FORM VALIDATION */

const bookingForm = document.getElementById("bookingForm")

if(bookingForm){

bookingForm.addEventListener("submit",function(e){

const phone = document.getElementById("phone").value

if(phone.length < 10){

alert("Please enter a valid phone number")

e.preventDefault()

}

})

}



/* WHATSAPP BUTTON AUTO MESSAGE */

const whatsappBtn = document.querySelector(".whatsapp")

if(whatsappBtn){

whatsappBtn.addEventListener("click",()=>{

console.log("User opened WhatsApp contact")

})

}



/* CURSOR GLOW EFFECT */

const cursor = document.querySelector(".cursor")

document.addEventListener("mousemove",(e)=>{

if(cursor){

cursor.style.left = e.pageX + "px"
cursor.style.top = e.pageY + "px"

}

})



/* SIMPLE PAGE REVEAL ANIMATION */

const revealElements = document.querySelectorAll(".reveal")

window.addEventListener("scroll", ()=>{

const windowHeight = window.innerHeight

revealElements.forEach(el=>{

const elementTop = el.getBoundingClientRect().top

if(elementTop < windowHeight - 100){

el.classList.add("active")

}

})

})