/**
 * Created by Janak on 1/3/2018.
 */
var isOpen = false;
function menuClick(x) {
    x.classList.toggle("change");
    if(isOpen){
        closeNav();
    }else {
        openNav();
    }
}
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    isOpen = true;
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    isOpen = false;
}


// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 2;
var navbarHeight = $('header').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();

    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;

    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('header').removeClass('nav-down').addClass('nav-up');
        if(isOpen){
            closeNav();
            $('#container-side-nav').removeClass("change");
        }
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('header').removeClass('nav-up').addClass('nav-down');
        }
    }

    lastScrollTop = st;
}