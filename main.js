var typed = new Typed(".text", {
   strings: ["Frontend Developer","Full Stack Developer", "Web Developer"],
   typeSpeed: 100,
   backSpeed: 100,
   backDelay: 1000,
   loop: true
});

// script.js
document.addEventListener('DOMContentLoaded', () => {
   const navToggle = document.getElementById('nav-toggle');
   const navbar = document.querySelector('.navbar');

   navToggle.addEventListener('click', () => {
       navbar.classList.toggle('active');
   });
});
