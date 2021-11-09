// Navbar toggle
document.addEventListener('DOMContentLoaded', function () {
    var menuOpen = document.querySelector('.menu-open');
    var menuOpenRS = document.querySelector('.menu-open-responsive')
    var menuClose = document.querySelector('.menu-close');
    var menuCloseRS = document.querySelector('.menu-close-responsive');
    var menu = document.querySelector('.menu');
    var menuItem = document.querySelectorAll('.menu-item');

    // if (!menuOpen || !menuClose || !menu) return;
    
    menuOpen.addEventListener('click', function () {
        menu.classList.add('is-active')
    })

    menuOpenRS.addEventListener('click', function () {
        menu.classList.add('is-active')
    })

    // Function for removing is-active class
    function removeActive () {
        menu.classList.remove('is-active')
    }

    if (menuClose.addEventListener('click', removeActive)) return;
    if (menuCloseRS.addEventListener('click', removeActive)) return;


    for (const item of menuItem) {
        item.addEventListener('click', removeActive)   
    }
})



// Active
// var activeBorder = document.getElementsByClassName("active");
// function changeActive() {
//     document.addEventListener("click", function () {
        
//     })
// }