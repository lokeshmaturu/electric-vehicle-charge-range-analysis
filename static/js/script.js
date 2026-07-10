/* ===========================================
            SCROLL TO TOP
=========================================== */

const topBtn = document.getElementById("topBtn");

window.onscroll = function () {

    if (document.body.scrollTop > 300 ||
        document.documentElement.scrollTop > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

};

function topFunction() {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

}


/* ===========================================
            SMOOTH SCROLLING
=========================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({

            behavior: "smooth"

        });

    });

});


/* ===========================================
            ACTIVE NAVBAR
=========================================== */

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(link => {

    link.addEventListener("click", function () {

        navLinks.forEach(item => item.classList.remove("active"));

        this.classList.add("active");

    });

});
/* ===========================================
        STICKY NAVBAR EFFECT
=========================================== */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {

    if (window.scrollY > 80) {

        navbar.classList.add("navbar-scroll");

    } else {

        navbar.classList.remove("navbar-scroll");

    }

});


/* ===========================================
        SHRINK NAVBAR
=========================================== */

window.addEventListener("scroll", function () {

    if (window.scrollY > 100) {

        navbar.classList.add("navbar-small");

    } else {

        navbar.classList.remove("navbar-small");

    }

});


/* ===========================================
        BUTTON RIPPLE EFFECT
=========================================== */

const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {

    button.addEventListener("click", function(e){

        let x = e.clientX - e.target.offsetLeft;

        let y = e.clientY - e.target.offsetTop;

        let ripple = document.createElement("span");

        ripple.classList.add("ripple");

        ripple.style.left = `${x}px`;

        ripple.style.top = `${y}px`;

        this.appendChild(ripple);

        setTimeout(() => {

            ripple.remove();

        },600);

    });

});
/* ===========================================
        FADE-IN ANIMATION
=========================================== */

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.15

});

document.querySelectorAll(".fade-up").forEach((element) => {

    observer.observe(element);

});


/* ===========================================
        COUNTER ANIMATION
=========================================== */

const counters = document.querySelectorAll(".counter");

const speed = 80;

counters.forEach(counter => {

    const updateCounter = () => {

        const target = +counter.getAttribute("data-target");

        const count = +counter.innerText;

        const increment = Math.ceil(target / speed);

        if (count < target) {

            counter.innerText = count + increment;

            setTimeout(updateCounter, 20);

        } else {

            counter.innerText = target;

        }

    };

    updateCounter();

});


/* ===========================================
        IMAGE REVEAL ANIMATION
=========================================== */

const images = document.querySelectorAll(".hero-img, .about-image, .team-img");

images.forEach(img => {

    observer.observe(img);

});


/* ===========================================
        FEATURE CARD ANIMATION
=========================================== */

const cards = document.querySelectorAll(".feature-card");

cards.forEach(card => {

    observer.observe(card);

});
/* ===========================================
        PAGE LOADER
=========================================== */

window.addEventListener("load", function () {

    const loader = document.getElementById("loader");

    if(loader){

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

        },500);

    }

});


/* ===========================================
        SCROLL PROGRESS BAR
=========================================== */

window.addEventListener("scroll", () => {

    const scrollTop = document.documentElement.scrollTop;

    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    const progress = (scrollTop / scrollHeight) * 100;

    const progressBar = document.getElementById("progress-bar");

    if(progressBar){

        progressBar.style.width = progress + "%";

    }

});


/* ===========================================
        FLOATING HERO IMAGE
=========================================== */

const heroImage = document.querySelector(".hero-img");

if(heroImage){

    window.addEventListener("mousemove",(e)=>{

        const x = (window.innerWidth/2 - e.pageX)/50;

        const y = (window.innerHeight/2 - e.pageY)/50;

        heroImage.style.transform =
        `translate(${x}px,${y}px)`;

    });

}


/* ===========================================
        CARD HOVER EFFECT
=========================================== */

const featureCards = document.querySelectorAll(".feature-card");

featureCards.forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform="translateY(-12px)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="translateY(0px)";

    });

});