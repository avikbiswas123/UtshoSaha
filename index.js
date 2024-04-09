function toggleNavbar() {
    var sidemenu = document.querySelector('.sidemenu');
    sidemenu.classList.toggle('active');
}

// Close sidebar menu when an item is clicked
document.querySelectorAll('.sidemenu ul li a').forEach(item => {
    item.addEventListener('click', () => {
        var sidemenu = document.querySelector('.sidemenu');
        sidemenu.classList.remove('active');
    });
});