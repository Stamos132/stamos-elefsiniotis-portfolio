function toggleMenu() {
    const menu = document.querySelector('.menu-links');
    const icon = document.querySelector('.hamburger-icon');
    menu.classList.toggle('open');
    icon.classList.toggle('open');
}

var hamburgerIcon = document.querySelector('.hamburger-icon');

document.addEventListener('click', function (event) {
    if (event.target !== hamburgerIcon && !hamburgerIcon.contains(event.target)) {
        toggleMenu();
    }
});
