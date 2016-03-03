$(document).ready(function() {
    
    $('a#toContent').click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            'scrollTop': $('#skills').offset().top
        }, 700, 'swing');
    });
    
});