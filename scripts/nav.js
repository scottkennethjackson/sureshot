const menuBtn = document.getElementById('menu-btn');
const dropdown = document.getElementById('dropdown');
const links = document.querySelectorAll('.dropdown-link');

// When the user clicks the menu-btn, rotate bars and display the dropdown
menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    dropdown.classList.toggle('active');
});

// When the user selects a dropdown-link, reset the menu-btn and hide the dropdown
links.forEach(link => link.addEventListener('click', () => {
    menuBtn.classList.remove('active');
    dropdown.classList.remove('active');
}));