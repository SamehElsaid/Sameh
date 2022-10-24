let home = document.getElementById("home").offsetTop;
let about = document.getElementById("about").offsetTop;
let what = document.getElementById("what").offsetTop;
let protofolio = document.getElementById("protofolio").offsetTop;
let contact = document.getElementById("contact").offsetTop;
let links = document.querySelectorAll(".my-logo li")
let topBtn = document.querySelector("span.top")
let sa = document.querySelector(".home h1")
let nav = document.querySelector(".nav")
let responseve = window.matchMedia("(max-width: 1200px)")
sa.textContent
window.addEventListener("scroll", function () {
    let responseveNav = document.querySelector(".nav.responseve")
    if (responseve.matches) {
        if (window.scrollY >= 200) {
            responseveNav.classList.add("active")
        } else {
            responseveNav.classList.remove("active")
        }
    }
    if (window.scrollY >= 200) {
        topBtn.classList.add("active")
    } else {
        topBtn.classList.remove("active")
    }
    if (window.scrollY >= home) {
        links.forEach(function (e) {
            e.classList.remove("active")
        })
        links[0].classList.add("active")
    }
    if (window.scrollY >= about - 400) {
        links.forEach(function (e) {
            e.classList.remove("active")

        })
        links[1].classList.add("active")
    } if (window.scrollY >= what - 400) {
        links.forEach(function (e) {
            e.classList.remove("active")
        })
        links[2].classList.add("active")
    }
    if (window.scrollY >= protofolio - 400) {
        links.forEach(function (e) {
            e.classList.remove("active")
        })
        links[3].classList.add("active")
    }
    if (window.scrollY >= contact - 400) {
        links.forEach(function (e) {
            e.classList.remove("active")
        })
        links[4].classList.add("active")
    }
})
topBtn.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}
window.addEventListener("load", function () {
    if (responseve.matches) {
        nav.classList.add("responseve")
    } else {
        nav.classList.remove("responseve")
    }
})
window.addEventListener("resize", function () {
    if (responseve.matches) {
        nav.classList.add("responseve")
    } else {
        nav.classList.remove("responseve")
    }
})

const DarkMode = document.getElementById("changeToDark")
const boxDarkMode = document.querySelector(".boxDarkMode")
const overlay = document.querySelector(".overlay")
const body = document.querySelector("body")
boxDarkMode.onclick = function(){
    DarkMode.classList.toggle("active")
    boxDarkMode.classList.toggle("active")
    body.classList.toggle("whiteMode")
}
const formControl = document.querySelectorAll(".formAtext")
const contactBage = document.querySelector("#contact")
contactBage.onclick = (e)=>{
    if(e.target.classList == "formAtext"){
        formControl.forEach(()=>{
            formControl.forEach((s)=>{
                s.parentElement.classList.remove("ok")
            })
            e.target.parentElement.classList.add("ok")
        })
    }else{
        formControl.forEach((e)=>{
            e.parentElement.classList.remove("ok")
        })
    }
}
const menu = document.querySelector(".menuMedia")
const holdLinl = document.querySelector(".holdLinl")
menu.onclick = ()=>{
    menu.classList.toggle("open")
    holdLinl.classList.toggle("open")
}