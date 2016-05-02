$(document).ready(function() {

    $( ".btn-anim-three" ).on( "click", function() {
      $(this).toggleClass( "closed" );
      $('.menu-mobile').toggleClass( "closed" );
    });

    $('.js-animate').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeInDown',
        offset: 100
    });
});
