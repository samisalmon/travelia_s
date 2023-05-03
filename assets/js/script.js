const preloader = document.querySelector("[data-preloader]");
window.addEventListener("load", () => {
    preloader.classList.add("remove");
}
);


const events = function(ele, evtype, callback){
    for(let i = 0, len = ele.length; i < len; i++){
        ele[i].addEventListener(evtype, callback);
    }
}


// navbar

const navbar = document.querySelector("[data-navbar]");
const navtog = document.querySelectorAll("[data-nav-toggler]")
const overlay = document.querySelector("[data-overlay]");

const toggle = function(){
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("nav-active");
}

events(navtog, "click", toggle); 


// header

const header = document.querySelector("[data-header]");
window.addEventListener("scroll", function(){
    header.classList[window.scrollY > 100 ? "add" : "remove"]("active")
})