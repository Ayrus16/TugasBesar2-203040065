/* -------------------------------- Navscroll ------------------------------- */
var myNav = document.getElementById('mynav');
window.onscroll = function () { 
    
    if (document.body.scrollTop >= 100 || document.documentElement.scrollTop >= 100 ) {
        myNav.classList.add("navbar-colored");
        myNav.classList.remove("navbar-transparent");
        document.getElementById('nav-brand').src='assets/img/logo-color.png';
    } 
    else {
        myNav.classList.add("navbar-transparent");
        myNav.classList.remove("navbar-colored");
        document.getElementById('nav-brand').src='assets/img/logo-white.png';
    }
};