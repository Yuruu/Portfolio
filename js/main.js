const menuBtn = $( '.sandwich' );
const meNav = $( '.menav' );
const meNavListe= $( '.menav-liste' );
const navItem = $( '.nav-item' );
const chevron = $( '.fa-chevron-up');
var showMenu = false;

chevron.click(function(){
    $("html, body").animate({ scrollTop: 0 }, 1000);
    return false;
});


menuBtn.click(function() {

    if (!showMenu) {
        menuBtn.addClass( 'close' );
        meNav.addClass( 'show' );
        meNavListe.addClass( 'show' );
        navItem.addClass( 'show' );

        showMenu = true;
    }
    else {
        menuBtn.removeClass( 'close' );
        meNav.removeClass( 'show' );
        meNavListe.removeClass( 'show' );
        navItem.removeClass( 'show' );

        showMenu = false;
    }
});

navItem.click(function(){
        menuBtn.removeClass( 'close' );
        meNav.removeClass( 'show' );
        meNavListe.removeClass( 'show' );
        navItem.removeClass( 'show' );

        showMenu = false;
        console.log("Saluut")

});