function toggleMenu(button) {
    var menu = document.getElementById('ftco-nav');
    var isOpen = menu.classList.contains('show');
    if (isOpen) {
        menu.classList.remove('show');
        button.innerHTML = '<span class="oi oi-menu"></span> Menu';
    } else {
        closeMenu();
    }
}

function closeMenu() {
    var menu = document.getElementById('ftco-nav');
    var button = document.querySelector('.navbar-toggler');
    menu.classList.remove('show');
    button.innerHTML = '<span class="oi oi-menu"></span> Menu';
}