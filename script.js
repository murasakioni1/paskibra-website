// Mobile Navigation Toggle
document.querySelector('.burger').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.nav-links').classList.toggle('active');
    document.body.classList.toggle('no-scroll');
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        const headerOffset = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
        
        // Close mobile menu after clicking
        document.querySelector('.burger').classList.remove('active');
        document.querySelector('.nav-links').classList.remove('active');
        document.body.classList.remove('no-scroll');
    });
});

// Sticky Navbar on Scroll
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('sticky', window.scrollY > 50);
});

// Video Autoplay
document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('bg-video');
    const playPromise = video.play();
    
    if (playPromise !== undefined) {
        playPromise.catch(error => {
            video.muted = true;
            video.play();
        });
    }
});

// Video Fallback
const video = document.getElementById('bg-video');
video.addEventListener('error', function() {
    const hero = document.querySelector('.hero');
    hero.style.background = "linear-gradient(135deg, #e60000, #b30000), url('images/fallback-bg.jpg')";
    hero.style.backgroundSize = "cover";
    hero.style.backgroundPosition = "center";
});

// Scroll Animation
const animateOnScroll = function() {
    const elements = document.querySelectorAll('.animate');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;
        
        if (elementPosition < screenPosition) {
            element.classList.add('show');
        }
    });
};

// Initialize animation
window.addEventListener('load', function() {
    setTimeout(() => {
        animateOnScroll();
    }, 500);
});

window.addEventListener('scroll', animateOnScroll);