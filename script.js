/* Toggles the visibility of the hamburger menu */
function toggleMenu() {
    const menu = document.querySelector('.menu-links');
    const icon = document.querySelector('.hamburger-icon');
    menu.classList.toggle('open');
    icon.classList.toggle('open');
}

/* Removes the 'open' class from the hamburger menu */
function closeMenu() {
    const menu = document.querySelector('.menu-links');
    const icon = document.querySelector('.hamburger-icon');
    menu.classList.remove('open');
    icon.classList.remove('open');
}

/* Listens for a click event for the hamburger menu */
var hamburgerIcon = document.querySelector('.hamburger-icon');

document.addEventListener('click', function (event) {
    const menu = document.querySelector('.menu-links');
    if (
        event.target === menu ||
        menu.contains(event.target) ||
        event.target === hamburgerIcon ||
        hamburgerIcon.contains(event.target)
    ) {
        return;
    }
    if (menu.classList.contains('open')) {
        closeMenu();
    }
});

/* Closes hamburger menu when scrolling */
document.addEventListener('scroll', function () {
    const menu = document.querySelector('.menu-links');
    if (menu.classList.contains('open')) {
        closeMenu();
    }
});
