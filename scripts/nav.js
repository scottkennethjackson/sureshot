const navbar = document.getElementById('navbar');
const menuBtn = document.getElementById('menu-btn');
const bars = document.querySelectorAll('.bar');
const navMenu = document.getElementById('nav-menu');
const menuLink = document.querySelectorAll('.menu-link');

// When the user enters the menu-btn, add tranition to bars
navbar.addEventListener('mouseenter', () => {
    bars.forEach(bar => bar.classList.add('transition'));
});

// When the user leaves the menu-btn, remove tranition from bars
navbar.addEventListener('mouseleave', () => {
    bars.forEach(bar => bar.classList.remove('transition'));
});

// When the user clicks the menu-btn, rotate bars and display the nav-menu
menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// When the user enters a menu-link, add transition to bars
menuLink.forEach(link => link.addEventListener('click', () => {
    bars.forEach(bar => bar.classList.add('transition'));
}));

// When the user selects a menu-link, reset the menu-btn and nav-menu
menuLink.forEach(link => link.addEventListener('click', () => {
    menuBtn.classList.remove('active');
    navMenu.classList.remove('active');
    setTimeout(() => {
        bars.forEach(bar => bar.classList.remove('transition'));
    }, 500);
}));